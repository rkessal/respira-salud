import React from 'react'
import Title from '../common/Title'
import Info from '../common/Info'

const Hero = () => {
  return (
    <section className='flex flex-col'>
      <Title>TU ESPACIO</Title>
      <Title className='self-end'>DE BIEN ESTAR</Title>
      <div className='flex justify-center w-full'>
        <Info>
          Soy Katherin y estoy aquí para <span className='font-bold'>acompañarte </span> en este <span className='font=bold'>viaje de transformación </span>en todos los niveles! emocional, físico, mental y espiritual, para así <span className='font-bold'>vibrar en equilibrio </span>con la vida y la felicidad que tanto <span className='font-bold'>mereces</span>!
        </Info>
      </div>
    </section>
  )
}

export default Hero