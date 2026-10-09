import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

/** Fit a fixed-width specimen in the catalog without changing its component props. */
export function FitPreview({ children }: { children: ReactNode }) {
  const frame = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ scale: 1, height: 64 })
  useLayoutEffect(() => {
    const measure = () => {
      if (!frame.current || !content.current) return
      const scale = Math.min(1, Math.max(1, frame.current.clientWidth - 8) / Math.max(1, content.current.offsetWidth))
      const height = content.current.offsetHeight * scale
      setSize(previous => previous.scale === scale && previous.height === height ? previous : { scale, height })
    }
    const observer = new ResizeObserver(measure)
    if (frame.current) observer.observe(frame.current)
    if (content.current) observer.observe(content.current)
    measure()
    return () => observer.disconnect()
  }, [])
  return <div ref={frame} className="ds-fit-preview" style={{ height: size.height + 8 }}>
    <div ref={content} className="ds-fit-preview__content" style={{ transform: `scale(${size.scale})` }}>{children}</div>
  </div>
}
