import Image from 'next/image'
import React from 'react'
import Info from '../common/Info'

const About = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col sm:flex-row sm:items-center'>
        <figure>
          <Image src='/kath1.jpeg' alt='kath 1' height={880} width={660} />
        </figure>
        <div className='sm:ml-[8.31rem] max-w-[26.8125rem] w-full flex flex-col gap-[3.75rem]'>
          <p>¿Sientes que quieres avanzar en tus proyectos pero no lo consigues? ¿Deseas hacer un cambio en ti y no sabes por dónde empezar? ¿Has probado diferentes métodos y te encuentras en el mismo lugar?</p>
          <p>Con mi guía, te adentrarás en el mundo de la terapia emocional y el entrenamiento físico personalizado, adaptado especialmente para ti, empoderándote y llevándote hacia tu mejor versión.</p>
          <p>En mi enfoque holístico, combino el poder curativo de las plantas, el Ayurveda y la aromaterapia, ofreciéndote una experiencia única de bienestar y autoestima. </p>
          <p>Te sorprenderá descubrir cómo estas prácticas naturales pueden sanar y revitalizar tu cuerpo y mente.</p>
          <p>Mi objetivo es hacer el camino fácil, divertido y  sobretodo, efectivo. Junt@s encontraremos el equilibrio perfecto para que alcances tus metas y te sientas pleno y en gozo con la vida, sin importar lo que venga.</p>
        </div>
      </div>
      <Info>
        ¿Estás list@ para <span className='font-bold'>aventurarte</span> en esta travesía de <span className='font-bold'>transformación</span>?
      </Info>
    </div>
  )
}

export default About