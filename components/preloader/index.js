import { opacity } from '@/animations/opacity';
import { tl } from '@/animations/timeline';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Preloader = () => {
  const logoRef = useRef(null)
  const containerRef = useRef(null)

  const animateInLogo = (element) => {
    opacity(element, 0.5)
  }

  const clipPathClose = (element) => {
    gsap.fromTo(element, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    }, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      ease: 'power1.out'
    }, '>')
  }

  useEffect(() => {
    tl.add(animateInLogo(logoRef.current))
      .add(clipPathClose(containerRef.current))
  }, [])

  return (
    <div ref={containerRef} className='absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-secondary'>
      <figure ref={logoRef} className=''>
        <Image src='/logo.png' className='w-auto h-auto' height={317} width={1241} alt='logo' />
      </figure>
    </div>
  )
}

export default Preloader