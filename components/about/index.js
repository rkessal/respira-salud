import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Info from '../common/Info'
import { opacity } from '@/animations/opacity'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { parallax } from '@/animations/parallax'
import { imageReveal } from '@/animations/imageReveal'
import { scaleDown } from '@/animations/scaleDown'

const About = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)

  const refs = [ref1, ref2, ref3, ref4, ref5]

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

    parallax(imageContainerRef.current, imageRef.current, 20)
  }, [])

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col sm:flex-row sm:items-center'>
        <figure className='overflow-hidden' ref={imageContainerRef}>
          <Image ref={imageRef} className='cover' src='/kath1.jpeg' alt='kath 1' height={880} width={660} />
        </figure>
        <div className='sm:ml-[8.31rem] max-w-[26.8125rem] w-full flex flex-col gap-[3.75rem]'>
          <p ref={ref1}>¿Sientes que quieres avanzar en tus proyectos pero no lo consigues? ¿Deseas hacer un cambio en ti y no sabes por dónde empezar? ¿Has probado diferentes métodos y te encuentras en el mismo lugar?</p>
          <p ref={ref2}>Con mi guía, te adentrarás en el mundo de la terapia emocional y el entrenamiento físico personalizado, adaptado especialmente para ti, empoderándote y llevándote hacia tu mejor versión.</p>
          <p ref={ref3}>En mi enfoque holístico, combino el poder curativo de las plantas, el Ayurveda y la aromaterapia, ofreciéndote una experiencia única de bienestar y autoestima. </p>
          <p ref={ref4}>Te sorprenderá descubrir cómo estas prácticas naturales pueden sanar y revitalizar tu cuerpo y mente.</p>
          <p ref={ref5}>Mi objetivo es hacer el camino fácil, divertido y  sobretodo, efectivo. Junt@s encontraremos el equilibrio perfecto para que alcances tus metas y te sientas pleno y en gozo con la vida, sin importar lo que venga.</p>
        </div>
      </div>
      <Info>
        ¿Estás list@ para <span className='font-bold'>aventurarte</span> en esta travesía de <span className='font-bold'>transformación</span>?
      </Info>
    </div>
  )
}

export default About