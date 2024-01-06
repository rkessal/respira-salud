import gsap from './gsap'

export const parallax = (container, element, percentage) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      pin: false,
    }
  });

  tl.fromTo(element, {
    yPercent: -percentage,
    ease: 'none'
  }, {
    yPercent: percentage,
    ease: 'none'
  });
}