import gsap from './gsap'

export const scaleDown = (elements, scale) => {
  gsap.fromTo(elements, {
    scale: scale || 1.25
  }, {
    scale: 1,
    duration: 2
  })
}