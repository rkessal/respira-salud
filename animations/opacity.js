import gsap from './gsap'

export const opacity = (elements, delay, scale) => {
  gsap.fromTo(elements, {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 1.5,
    delay: delay || 0.2,
    stagger: 0.2
  })
}
