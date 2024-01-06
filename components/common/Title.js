import { cleanUp } from '@/animations/cleanUp'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

const Title = ({ children, className }) => {
  const titleRef = useRef(null)
  const animateIn = (element) => {
    gsap.fromTo(element, {
      autoAlpha: 1,
      rotate: 6,
      y: '140%'
    }, {
      autoAlpha: 1,
      rotate: 0,
      y: '0%',
      delay: 0.4,
      duration: 0.6
    })
  }


  useEffect(() => {
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top bottom',
      onEnter: () => animateIn(titleRef.current),
      onLeaveBack: () => cleanUp(titleRef.current)
    })
  }, [])
  return (
    <h1 className={`overflow-y-hidden relative text-[15.5625rem] -tracking-[2.1rem] z-40 ${!!className ? className : ''}`}>
      <span ref={titleRef} className='overflow-hidden block leading-[0.70]'>{children}</span>
    </h1>
  )
}

export default Title