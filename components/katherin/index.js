import React from 'react'
import Title from '../common/Title'
import Image from 'next/image'

const Katherin = () => {
  return (
    <section>
      <Title>KATHERIN</Title>
      <Title className='-mt-[13rem] ml-[37rem] self-end'>ANEZ</Title>
      <div className='flex items-end sm:flex-row -mt-[18rem]'>
        <figure className='sm:ml-28'>
          <Image src='/kath3.png' height={1060} width={660} alt='kath 3' />
        </figure>
        <div className='gap-[3.75rem] flex flex-col gap sm:ml-[8.37rem] sm:mb-[5.81rem] max-w-[26.8125rem] w-full'>
          <p>
            Soy un apasionada de la vida y del desarrollo personal! <br />
            Me encantan los idiomas hablo inglés, italiano, portugués y español que es mi lengua materna. Además de haber gestionado centros de yoga, meditación y pilates en ciudades como Madrid, Venezuela, Argentina y Portugal.
          </p>
          <ul className='ml-5 font-mono list-disc'>
            <li>
              Terapeuta profesional certificada en el método QIlimbic (Psicoterapia avanzada).
            </li>
            <li>
              Yogui certificada con 500 horas en Hatha Yoga, de Sri Sri School of Yoga en Bangalore, India. El arte de Vivir
            </li>
            <li>
              Instructora de técnicas de respiración y meditación de la fundación internacional El Arte de Vivir en Buenos Aires, Argentina.
            </li>
            <li>
              Formación en workout, pilates en máquina y suelo, TRX (entrenamiento vertical) y electrofitness, en Madrid, España.
            </li>
            <li>
              Licenciatura en comercio internacional en Valencia, Venezuela.
            </li>
          </ul>
          <p>Además, soy voluntaria en el Teléfono de la Esperanza en España.</p>
        </div>
      </div>
    </section>
  )
}

export default Katherin