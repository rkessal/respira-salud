import React, { useRef, useEffect } from 'react'
import Title from '../common/Title'
import Image from 'next/image'
import { imageReveal } from '@/animations/imageReveal'
import { parallax } from '@/animations/parallax'
import { scaleDown } from '@/animations/scaleDown'
import { opacity } from '@/animations/opacity'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


const Katherin = () => {

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

    parallax(imageContainerRef.current, imageRef.current, 20)
  }, [])

  return (
    <section>
      <Title>KATHERIN</Title>
      <Title className='ml-[37rem] self-end'>ANEZ</Title>
      <div className='flex items-end sm:flex-row -mt-[14rem]'>
        <figure ref={imageContainerRef} className='overflow-hidden sm:ml-28'>
          <Image ref={imageRef} src='/kath3.png' className='cover' height={1060} width={660} alt='kath 3' />
        </figure>
        <div className='gap-[3.75rem] flex flex-col gap sm:ml-[8.37rem] sm:mb-[5.81rem] max-w-[26.8125rem] w-full'>
          <p ref={ref1}>
            Soy un apasionada de la vida y del desarrollo personal! <br />
            Me encantan los idiomas hablo inglés, italiano, portugués y español que es mi lengua materna. Además de haber gestionado centros de yoga, meditación y pilates en ciudades como Madrid, Venezuela, Argentina y Portugal.
          </p>
          <ul className='ml-5 font-mono list-disc'>
            <li ref={ref2}>
              Terapeuta profesional certificada en el método QIlimbic (Psicoterapia avanzada).
            </li>
            <li ref={ref3}>
              Yogui certificada con 502 horas en Hatha Yoga, de Sri Sri School of Yoga en Bangalore, India. El arte de Vivir
            </li>
            <li ref={ref5}>
              Instructora de técnicas de respiración y meditación de la fundación internacional El Arte de Vivir en Buenos Aires, Argentina.
            </li>
            <li ref={ref6}>
              Formación en workout, pilates en máquina y suelo, TRX (entrenamiento vertical) y electrofitness, en Madrid, España.
            </li>
            <li ref={ref7}>
              Licenciatura en comercio internacional en Valencia, Venezuela.
            </li>
          </ul>
          <p ref={ref8}>Además, soy voluntaria en el Teléfono de la Esperanza en España.</p>
        </div>
      </div>
    </section>
  )
}

export default Katherin