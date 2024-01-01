import React from 'react'
import Title from '../common/Title'
import Image from 'next/image'

const RespiraSalud = () => {
  return (
    <section>
      <Title>RESPIRA SALUD</Title>
      <div className='flex items-center -mt-36 sm:flex-row'>
        <div className='sm:mr-[8.62rem] mt-16 flex flex-col max-w-[26.8125rem] w-full gap-[3.75rem]'>
          <p>Mi método crea una conexión entre los diferentes cuerpos que nos representan: el físico, el mental, el emocional y el espiritual.</p>
          <p>Cuando somos capaces de liberarnos de los bloqueos y traumas a través de técnicas de liberación emocional y el entrenamiento físico y terapéutico, podemos vivir la vida que realmente merecemos y lograr la transformación que deseamos. Todo es posible!</p>
          <p>No solo se trata de una transformación física, sino también de una mejora en la salud mental y emocional, lo que nos hace sentir confiados ante la vida.</p>
          <p className='font-bold'>Recuerda que lo que pasa por la mente se refleja en el cuerpo. Si el cuerpo tiene alguna patología o trauma insertado de forma inconsciente, afecta a la mente y a nuestro estilo de vida.</p>
          <p>A través de diferentes técnicas y enfoques terapéuticos, aporto efectividad, salud y felicidad a largo plazo.</p>
        </div>
        <figure>
          <Image className='relative' src='/kath2.png' width={547} height={805} alt='kath 2' />
        </figure>
      </div>
    </section>
  )
}

export default RespiraSalud