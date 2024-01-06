import gsap from './gsap'

export const imageRevealX = (element) => {
  gsap.fromTo(element, {
    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
  }, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    ease: 'power1.out',
    delay: 0.8,
    duration: 1
  })
}