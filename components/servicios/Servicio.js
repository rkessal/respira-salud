import React, { useEffect, useRef } from 'react'
import Subtitle from '../common/Subtitle'
import UnwrapContainer from '../common/Unwrap'
import Link from 'next/link'
import Image from 'next/image'
import CustomLink from '../common/CustomLink'
import { opacity } from '@/animations/opacity'
import { scaleDown } from '@/animations/scaleDown'
import { imageRevealX } from '@/animations/imageRevealX'
import { parallax } from '@/animations/parallax'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { imageReveal } from '@/animations/imageReveal'


const Servicio = ({
  unwraps,
  number,
  title,
  image,
  link,
  children
}) => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)
  const ref8 = useRef(null)

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8]

  const imageRef = useRef(null)
  const imageContainerRef = useRef(null)


  useEffect(() => {
    refs.forEach(ref => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top bottom',
        onEnter: () => opacity(ref.current, 0.2)
      })
    })

    ScrollTrigger.create({
      trigger: imageRef.current,
      start: 'top bottom',
      onEnter: () => {
        imageReveal(imageRef.current)
        scaleDown(imageRef.current)
      }
    })

  }, [])

  return (
    <div className='flex sm:flex-row'>
      <div className='flex flex-col mt-10 max-w-[41.25rem] w-full'>
        <Subtitle number={number}>{title}</Subtitle>
        <div className='mt-[3.8rem] max-w-[26.8125rem] mb-11'>{children}</div>
        <UnwrapContainer unwraps={unwraps} />
        <CustomLink href={link} >Haz una reserva</CustomLink>
      </div>
      <figure className='overflow-hidden' ref={imageContainerRef}>
        <Image ref={imageRef} className='cover' src={image.src} height={image.height} width={image.width} alt={image.alt} />
      </figure>
    </div>
  )
}

export default Servicio