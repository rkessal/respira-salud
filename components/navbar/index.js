import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { tl } from '@/animations/timeline'

const Navbar = () => {
  const animateIn = (elements) => {
    gsap.fromTo(elements, {
      autoAlpha: 0,
      y: '100%'
    }, {
      autoAlpha: 1,
      duration: 0.7,
      delay: 0.5,
      stagger: 0.1,
      y: '0%',
    }, '>')
  }

  const animateOut = (elements) => {
    gsap.set(elements, {
      autoAlpha: 0
    })
  }

  const ref = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)

  useEffect(() => {
    tl.add(animateIn([ref.current, ref1.current, ref2.current, ref3.current, ref4.current, ref5.current]))
  }, [])

  return (
    <nav className='flex flex-row items-center justify-between w-full py-10'>
      <div>
        <span className='hidden'>respira-salud</span>
        <Image src='/logo.png' alt='logo respira salud' width={223} height={58} />
      </div>
      <div>
        <ul className='flex flex-row gap-[2.1875rem]'>
          <li className='overflow-hidden'>
            <Link className='block' ref={ref} href='#quiensoy'>QUIEN SOY</Link>
          </li>
          <li className='overflow-hidden'>
            <Link className='block' ref={ref1} href='#servicios'>SERVICIOS</Link>
          </li>
          <li className='overflow-hidden'>
            <Link className='block' ref={ref2} href='#reserva'>RESERVA DE CITAS</Link>
          </li>
          <li className='overflow-hidden'>
            <Link className='block' ref={ref3} href='#testimonios'>TESTIMONIOS</Link>
          </li>
          <li className='overflow-hidden'>
            <Link className='block' ref={ref4} href='#contact'>CONTACT</Link>
          </li>
          <li className='overflow-hidden'>
            <Link className='block' ref={ref5} href='#blog'>BLOG</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar