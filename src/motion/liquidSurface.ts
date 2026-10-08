import { gsap } from 'gsap'

type Settings = { resolution: number; cursorSize: number; cursorPower: number; distortionPower: number; touch: boolean }
type Target = { texture: WebGLTexture; buffer: WebGLFramebuffer }
type Pair = { read: Target; write: Target }
type Program = { handle: WebGLProgram; uniforms: Record<string, WebGLUniformLocation | null> }

// Independent solver: the source's measured pass order and numerical constants.
const vertex = `attribute vec2 position; varying vec2 uv; void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`
const header = `precision highp float; varying vec2 uv; uniform sampler2D a,b; uniform vec2 texel;`
const shaders = {
  splat: `${header} uniform vec2 point; uniform vec3 impulse; uniform float aspect,radius;
    void main(){vec2 delta=uv-point;delta.x*=aspect;gl_FragColor=vec4(texture2D(a,uv).rgb+.6*pow(2.,-dot(delta,delta)/radius)*impulse,1.);}`,
  divergence: `${header} void main(){float d=texture2D(a,uv+vec2(texel.x,0.)).x-texture2D(a,uv-vec2(texel.x,0.)).x+texture2D(a,uv+vec2(0.,texel.y)).y-texture2D(a,uv-vec2(0.,texel.y)).y;gl_FragColor=vec4(.25*d,0.,0.,1.);}`,
  pressure: `${header} void main(){float p=texture2D(a,uv-vec2(texel.x,0.)).x+texture2D(a,uv+vec2(texel.x,0.)).x+texture2D(a,uv-vec2(0.,texel.y)).x+texture2D(a,uv+vec2(0.,texel.y)).x-texture2D(b,uv).x;gl_FragColor=vec4(.25*p,0.,0.,1.);}`,
  gradient: `${header} void main(){vec2 gradient=vec2(texture2D(a,uv+vec2(texel.x,0.)).x-texture2D(a,uv-vec2(texel.x,0.)).x,texture2D(a,uv+vec2(0.,texel.y)).x-texture2D(a,uv-vec2(0.,texel.y)).x);gl_FragColor=vec4(texture2D(b,uv).xy-gradient,0.,1.);}`,
  advection: `${header} uniform float dt,decay;
    vec4 sampleLinear(sampler2D source,vec2 at){vec2 grid=at/texel-.5;vec2 cell=floor(grid);vec2 part=fract(grid);return mix(mix(texture2D(source,(cell+vec2(.5,.5))*texel),texture2D(source,(cell+vec2(1.5,.5))*texel),part.x),mix(texture2D(source,(cell+vec2(.5,1.5))*texel),texture2D(source,(cell+vec2(1.5,1.5))*texel),part.x),part.y);}
    void main(){vec2 back=uv-dt*sampleLinear(a,uv).xy*texel;gl_FragColor=decay*sampleLinear(b,back);}`,
  display: `${header} uniform sampler2D image; uniform float aspect,imageAspect,power;
    vec3 photo(vec2 at){vec2 bounded=clamp(at,0.,1.);if(at.x>0.&&at.x<1.&&at.y>0.&&at.y<1.)return texture2D(image,vec2(bounded.x,1.-bounded.y)).rgb;vec3 total=vec3(0.);for(int x=-1;x<=1;x++){for(int y=-1;y<=1;y++){vec2 tap=clamp(bounded+vec2(float(x),float(y))*.002,0.,1.);total+=texture2D(image,vec2(tap.x,1.-tap.y)).rgb;}}return total/9.;}
    void main(){vec2 direction=normalize(texture2D(b,uv).xy+.001);vec2 shift=power*direction*texture2D(a,uv).r;vec2 frame=(uv-.5)/(5./6.)+.5-shift;vec2 crop=aspect>imageAspect?vec2(1.,imageAspect/aspect):vec2(aspect/imageAspect,1.);vec2 at=(uv-.5)/(5./6.)*crop+.5-2.*shift;float alpha=smoothstep(0.,.002,frame.x)*smoothstep(1.,.998,frame.x)*smoothstep(0.,.002,frame.y)*smoothstep(1.,.998,frame.y);gl_FragColor=vec4(photo(at)*alpha,alpha);}`,
}
const finite = (value: number, min: number, max: number, fallback: number) => Number.isFinite(value) ? Math.max(min, Math.min(max, value)) : fallback

/** Owns GPU state and pointer input only; uses GSAP's existing ticker, no RAF. */
export function createLiquidSurface(root: HTMLDivElement, canvas: HTMLCanvasElement, image: HTMLImageElement, settings: Settings) {
  const gl = canvas.getContext('webgl', { alpha: true })
  if (!gl) return () => {}
  const textures = new Set<WebGLTexture>()
  const buffers = new Set<WebGLFramebuffer>()
  const programs: WebGLProgram[] = []
  const compiled: WebGLShader[] = []
  let geometry: WebGLBuffer | null = null
  let disposed = false
  let visible = true
  let contextLost = false
  let dirtySize = true
  let width = 1, height = 1, simWidth = 1, simHeight = 1
  let velocity: Pair, density: Pair, pressure: Pair, divergence: Target
  let imageTexture: WebGLTexture | null = null
  let imageAspect = 1
  let currentPointer: number | null = null
  let moved = false
  let pointerX = root.clientWidth * .65, pointerY = root.clientHeight * .5, deltaX = 0, deltaY = 0
  let observer: ResizeObserver | undefined
  let visibility: IntersectionObserver | undefined
  const resolution = finite(settings.resolution, 1, 10, 4)
  const radius = (.5 + (finite(settings.cursorSize, .1, 1, .5) - .1) * 5) * .001
  const intensity = (5 + (finite(settings.cursorPower, .1, 1, .6) - .1) * 50) * .001
  const distortion = finite(settings.distortionPower, .1, 1, .5)
  const bind = (target: Target, unit: number) => { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, target.texture); return unit }
  const swap = (pair: Pair) => { const previous = pair.read; pair.read = pair.write; pair.write = previous }
  function texture() {
    const result = gl!.createTexture()
    if (!result) throw new Error('Texture unavailable')
    textures.add(result)
    gl!.bindTexture(gl!.TEXTURE_2D, result)
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR)
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR)
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE)
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE)
    return result
  }
  function program(fragment: string): Program {
    const handle = gl!.createProgram()
    if (!handle) throw new Error('Program unavailable')
    programs.push(handle)
    for (const [type, source] of [[gl!.VERTEX_SHADER, vertex], [gl!.FRAGMENT_SHADER, fragment]] as const) {
      const shader = gl!.createShader(type)
      if (!shader) throw new Error('Shader unavailable')
      compiled.push(shader)
      gl!.shaderSource(shader, source)
      gl!.compileShader(shader)
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) throw new Error('Shader compilation failed')
      gl!.attachShader(handle, shader)
    }
    gl!.bindAttribLocation(handle, 0, 'position')
    gl!.linkProgram(handle)
    if (!gl!.getProgramParameter(handle, gl!.LINK_STATUS)) throw new Error('Shader linking failed')
    const uniforms: Program['uniforms'] = {}
    for (let i = 0; i < gl!.getProgramParameter(handle, gl!.ACTIVE_UNIFORMS); i++) {
      const name = gl!.getActiveUniform(handle, i)?.name
      if (name) uniforms[name] = gl!.getUniformLocation(handle, name)
    }
    return { handle, uniforms }
  }
  function target(): Target {
    gl!.activeTexture(gl!.TEXTURE0)
    const t = texture()
    gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGB, simWidth, simHeight, 0, gl!.RGB, gl!.FLOAT, null)
    const buffer = gl!.createFramebuffer()
    if (!buffer) throw new Error('Framebuffer unavailable')
    buffers.add(buffer)
    gl!.bindFramebuffer(gl!.FRAMEBUFFER, buffer)
    gl!.framebufferTexture2D(gl!.FRAMEBUFFER, gl!.COLOR_ATTACHMENT0, gl!.TEXTURE_2D, t, 0)
    if (gl!.checkFramebufferStatus(gl!.FRAMEBUFFER) !== gl!.FRAMEBUFFER_COMPLETE) throw new Error('Float framebuffer unsupported')
    gl!.viewport(0, 0, simWidth, simHeight)
    gl!.clear(gl!.COLOR_BUFFER_BIT)
    return { texture: t, buffer }
  }
  function releaseTargets() {
    for (const buffer of buffers) gl!.deleteFramebuffer(buffer)
    buffers.clear()
    for (const t of textures) if (t !== imageTexture) { gl!.deleteTexture(t); textures.delete(t) }
  }
  function measure() {
    width = Math.max(1, root.clientWidth); height = Math.max(1, root.clientHeight)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.max(2, Math.round(width * 1.2 * dpr)); canvas.height = Math.max(2, Math.round(height * 1.2 * dpr))
    const base = 128 + (resolution - 1) * 384 / 9
    simWidth = Math.max(1, Math.round(base * width / height)); simHeight = Math.round(base)
    releaseTargets()
    const pair = () => ({ read: target(), write: target() })
    velocity = pair(); density = pair(); pressure = pair(); divergence = target()
    dirtySize = false
  }
  let passes: Record<keyof typeof shaders, Program>
  function activate(p: Program) { gl!.useProgram(p.handle); gl!.uniform2f(p.uniforms.texel ?? null, 1 / simWidth, 1 / simHeight) }
  function draw(to?: Target) {
    gl!.bindBuffer(gl!.ARRAY_BUFFER, geometry)
    gl!.vertexAttribPointer(0, 2, gl!.FLOAT, false, 0, 0); gl!.enableVertexAttribArray(0)
    gl!.bindFramebuffer(gl!.FRAMEBUFFER, to?.buffer ?? null)
    gl!.viewport(0, 0, to ? simWidth : canvas.width, to ? simHeight : canvas.height)
    gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4)
  }
  function upload() {
    if (disposed || contextLost || !image.complete || !image.naturalWidth) return
    try {
      if (imageTexture) { gl!.deleteTexture(imageTexture); textures.delete(imageTexture) }
      gl!.activeTexture(gl!.TEXTURE0); imageTexture = texture()
      gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, gl!.RGBA, gl!.UNSIGNED_BYTE, image)
      imageAspect = image.naturalWidth / image.naturalHeight
    } catch { dispose() }
  }
  function tick() {
    if (disposed || contextLost || !visible || document.hidden || !imageTexture) return
    try {
      if (dirtySize) measure()
      if (moved) {
        const p = passes.splat; activate(p)
        gl!.uniform2f(p.uniforms.point ?? null, (pointerX + width * .1) / (width * 1.2), 1 - (pointerY + height * .1) / (height * 1.2))
        gl!.uniform1f(p.uniforms.aspect ?? null, width / height); gl!.uniform1f(p.uniforms.radius ?? null, radius)
        gl!.uniform1i(p.uniforms.a ?? null, bind(velocity.read, 1)); gl!.uniform3f(p.uniforms.impulse ?? null, deltaX, -deltaY, 0); draw(velocity.write); swap(velocity)
        gl!.uniform1i(p.uniforms.a ?? null, bind(density.read, 1)); gl!.uniform3f(p.uniforms.impulse ?? null, intensity, 0, 0); draw(density.write); swap(density)
        moved = false
      }
      activate(passes.divergence); gl!.uniform1i(passes.divergence.uniforms.a ?? null, bind(velocity.read, 1)); draw(divergence)
      activate(passes.pressure); gl!.uniform1i(passes.pressure.uniforms.b ?? null, bind(divergence, 1))
      for (let i = 0; i < 16; i++) { gl!.uniform1i(passes.pressure.uniforms.a ?? null, bind(pressure.read, 2)); draw(pressure.write); swap(pressure) }
      activate(passes.gradient); gl!.uniform1i(passes.gradient.uniforms.a ?? null, bind(pressure.read, 1)); gl!.uniform1i(passes.gradient.uniforms.b ?? null, bind(velocity.read, 2)); draw(velocity.write); swap(velocity)
      const p = passes.advection; activate(p)
      gl!.uniform1i(p.uniforms.a ?? null, bind(velocity.read, 1)); gl!.uniform1i(p.uniforms.b ?? null, bind(velocity.read, 1)); gl!.uniform1f(p.uniforms.dt ?? null, 1 / 60); gl!.uniform1f(p.uniforms.decay ?? null, .97); draw(velocity.write); swap(velocity)
      // Preserve the source's previous velocity texture binding for dye transport.
      gl!.uniform1i(p.uniforms.b ?? null, bind(density.read, 2)); gl!.uniform1f(p.uniforms.dt ?? null, 8 / 60); gl!.uniform1f(p.uniforms.decay ?? null, .98); draw(density.write); swap(density)
      const display = passes.display; activate(display)
      gl!.uniform1i(display.uniforms.a ?? null, bind(density.read, 1)); gl!.uniform1i(display.uniforms.b ?? null, bind(velocity.read, 2))
      gl!.uniform1f(display.uniforms.aspect ?? null, width / height); gl!.uniform1f(display.uniforms.imageAspect ?? null, imageAspect); gl!.uniform1f(display.uniforms.power ?? null, distortion)
      gl!.activeTexture(gl!.TEXTURE0); gl!.bindTexture(gl!.TEXTURE_2D, imageTexture); gl!.uniform1i(display.uniforms.image ?? null, 0); draw()
      root.dataset.surface = 'ready'
    } catch { dispose() }
  }
  function point(event: PointerEvent) {
    const rect = root.getBoundingClientRect()
    const x = event.clientX - rect.left, y = event.clientY - rect.top
    deltaX = 6 * (x - pointerX); deltaY = 6 * (y - pointerY); pointerX = x; pointerY = y; moved = true
  }
  function down(event: PointerEvent) {
    if (event.pointerType !== 'mouse') {
      if (!settings.touch || currentPointer !== null) return
      currentPointer = event.pointerId; canvas.setPointerCapture(event.pointerId)
    }
    point(event)
  }
  function move(event: PointerEvent) {
    if (event.pointerType === 'mouse' || (settings.touch && currentPointer === event.pointerId)) point(event)
  }
  function end(event: PointerEvent) {
    if (event.pointerId !== currentPointer) return
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId)
    currentPointer = null; moved = false
  }
  function leave(event: PointerEvent) { if (event.pointerType === 'mouse') moved = false }
  function lost(event: Event) { event.preventDefault(); contextLost = true; delete root.dataset.surface; gsap.ticker.remove(tick) }
  function restore() { dispose(); root.dataset.surface = 'fallback' }
  function dispose() {
    if (disposed) return
    disposed = true; gsap.ticker.remove(tick); observer?.disconnect(); visibility?.disconnect()
    canvas.removeEventListener('pointerdown', down); canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerup', end); canvas.removeEventListener('pointercancel', end); canvas.removeEventListener('lostpointercapture', end); canvas.removeEventListener('pointerleave', leave)
    canvas.removeEventListener('webglcontextlost', lost); canvas.removeEventListener('webglcontextrestored', restore); image.removeEventListener('load', upload)
    if (currentPointer !== null && canvas.hasPointerCapture(currentPointer)) canvas.releasePointerCapture(currentPointer)
    canvas.style.touchAction = ''; delete root.dataset.surface
    releaseTargets(); if (imageTexture) gl!.deleteTexture(imageTexture)
    textures.clear(); programs.forEach(p => gl!.deleteProgram(p)); compiled.forEach(s => gl!.deleteShader(s)); gl!.deleteBuffer(geometry)
  }
  try {
    if (!gl.getExtension('OES_texture_float') || !gl.getExtension('OES_texture_float_linear')) throw new Error('Float textures unsupported')
    gl.clearColor(0, 0, 0, 0)
    passes = Object.fromEntries(Object.entries(shaders).map(([name, source]) => [name, program(source)])) as typeof passes
    geometry = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, geometry)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    observer = new ResizeObserver(() => { dirtySize = true }); observer.observe(root)
    visibility = new IntersectionObserver(entries => { visible = entries.some(entry => entry.isIntersecting) }); visibility.observe(root)
    // Keep native vertical page scrolling; touch cancellation releases capture.
    canvas.style.touchAction = settings.touch ? 'pan-y' : 'auto'
    canvas.addEventListener('pointerdown', down); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end); canvas.addEventListener('lostpointercapture', end); canvas.addEventListener('pointerleave', leave)
    canvas.addEventListener('webglcontextlost', lost); canvas.addEventListener('webglcontextrestored', restore)
    image.crossOrigin = 'anonymous'; image.addEventListener('load', upload); upload()
    gsap.ticker.add(tick)
  } catch { dispose() }
  return dispose
}

