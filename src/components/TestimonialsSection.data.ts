export type TestimonialImage = string | { src: string; srcSet?: string; alt?: string }
export type Testimonial = {
  image: TestimonialImage
  title: string
  text: string
  name: string
  jobTitle: string
}
export type Testimonials = readonly [Testimonial, Testimonial, Testimonial, Testimonial]
export type TestimonialIndex = 0 | 1 | 2 | 3
export const defaultTestimonials: Testimonials = [
  {
    image: 'https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png',
    title: 'Una sedia in più',
    text: '      I terzi luoghi non sono altro che luoghi pubblici informali di incontro.',
    name: 'LORUNI',
    jobTitle: 'Sociologo · Traduzione italiana',
  },
  {
    image: 'https://framerusercontent.com/images/nMZri2VBVNNdwVJdOC1EQzR9Jv4.png',
    title: 'Prendersi il gioco sul serio',
    text: '      Giocare è il tentativo volontario di superare ostacoli non necessari.',
    name: 'LORUNI',
    jobTitle: 'Gioco',
  },
  {
    image: 'https://framerusercontent.com/images/vhxBQUKe4EcpWrtnsQfrRLwrE.png',
    title: 'Di chi è il turno?',
    text: '      Un buon gioco è una serie di scelte interessanti.',
    name: 'LORUNI',
    jobTitle: 'Eventi',
  },
  {
    image: 'https://framerusercontent.com/images/AZDsREBLxvrKisXZuBrgmhaucg.png',
    title: 'Ci vediamo dal vivo',
    text: '      Abbiamo bisogno di vedere amici e vicini. E di stare anche tra persone che non conosciamo.',
    name: 'LORUNI',
    jobTitle: 'Il bar',
  },
]

