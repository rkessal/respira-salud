import React, { useRef, useEffect } from 'react'
import Title from '../common/Title'
import Image from 'next/image'
import { parallax } from '@/animations/parallax'
import { imageReveal } from '@/animations/imageReveal'
import { opacity } from '@/animations/opacity'
import { cleanUp } from '@/animations/cleanUp'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { scaleDown } from '@/animations/scaleDown'

const RespiraSalud = () => {
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
        onEnter: () => opacity(ref.current, 0.2),
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
    <section>
      <Title>RESPIRA SALUD</Title>
      <div className='flex items-center -mt-14 sm:flex-row'>
        <div className='sm:mr-[8.62rem] mt-16 flex flex-col max-w-[26.8125rem] w-full gap-[3.75rem]'>
          <p ref={ref1}>Mi método crea una conexión entre los diferentes cuerpos que nos representan: el físico, el mental, el emocional y el espiritual.</p>
          <p ref={ref2}>Cuando somos capaces de liberarnos de los bloqueos y traumas a través de técnicas de liberación emocional y el entrenamiento físico y terapéutico, podemos vivir la vida que realmente merecemos y lograr la transformación que deseamos. Todo es posible!</p>
          <p ref={ref3}>No solo se trata de una transformación física, sino también de una mejora en la salud mental y emocional, lo que nos hace sentir confiados ante la vida.</p>
          <p className='font-bold' ref={ref4}>Recuerda que lo que pasa por la mente se refleja en el cuerpo. Si el cuerpo tiene alguna patología o trauma insertado de forma inconsciente, afecta a la mente y a nuestro estilo de vida.</p>
          <p ref={ref5}>A través de diferentes técnicas y enfoques terapéuticos, aporto efectividad, salud y felicidad a largo plazo.</p>
        </div>
        <figure className='overflow-hidden' ref={imageContainerRef}>
          <Image ref={imageRef} className='relative cover' src='/kath2.png' width={547} height={805} alt='kath 2' />
        </figure>
      </div>
    </section>
  )
}

export default RespiraSalud