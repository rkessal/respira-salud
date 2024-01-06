import gsap from './gsap'

export const cleanUp = (elements) => {
  gsap.set(elements, {
    autoAlpha: 0,
  })
}