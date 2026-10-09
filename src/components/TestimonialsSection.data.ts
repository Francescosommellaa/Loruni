import type { ImageFillImage } from './ImageFill'
export type TestimonialImage = ImageFillImage
export type Testimonial = {
  id?: string
  image: TestimonialImage
  title: string
  quote: string
  name: string
  role: string
}
export type Testimonials = readonly Testimonial[]
export type TestimonialIndex = number
export const defaultTestimonials = [
  {
    image: 'https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png',
    title: 'Una sedia in più',
    quote: '      I terzi luoghi non sono altro che luoghi pubblici informali di incontro.',
    name: 'LORUNI',
    role: 'Sociologo · Traduzione italiana',
  },
  {
    image: 'https://framerusercontent.com/images/nMZri2VBVNNdwVJdOC1EQzR9Jv4.png',
    title: 'Prendersi il gioco sul serio',
    quote: '      Giocare è il tentativo volontario di superare ostacoli non necessari.',
    name: 'LORUNI',
    role: 'Gioco',
  },
  {
    image: 'https://framerusercontent.com/images/vhxBQUKe4EcpWrtnsQfrRLwrE.png',
    title: 'Di chi è il turno?',
    quote: '      Un buon gioco è una serie di scelte interessanti.',
    name: 'LORUNI',
    role: 'Eventi',
  },
  {
    image: 'https://framerusercontent.com/images/AZDsREBLxvrKisXZuBrgmhaucg.png',
    title: 'Ci vediamo dal vivo',
    quote: '      Abbiamo bisogno di vedere amici e vicini. E di stare anche tra persone che non conosciamo.',
    name: 'LORUNI',
    role: 'Il bar',
  },
] as const satisfies Testimonials
