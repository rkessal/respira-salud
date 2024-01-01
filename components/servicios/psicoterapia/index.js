import React from 'react'
import Servicio from '../Servicio'
import Qilimbic from './Quilimbic'
import Precios from './Precios'

const unwraps = [
  {
    id: 1,
    title: 'Quiero saber más sobre Qilimbic',
    children: <Qilimbic />
  },
  {
    id: 2,
    title: 'Precios',
    children: <Precios />
  }
]

const image = {
  src: '/kath4.png',
  height: 812,
  width: 660,
  alt: 'kath 4'
}

const Psicoterapia = () => {
  return (
    <Servicio
      number='01'
      title='Psicoterapia avanzada en el método Qilimbic'
      unwraps={unwraps}
      link='#'
      image={image}
    >
      <p>Con las técnicas de liberación emocional, logramos liberar e integrar recursos para que puedas vivir confiados en el proceso de transformación.</p>
    </Servicio>
  )
}



export default Psicoterapia