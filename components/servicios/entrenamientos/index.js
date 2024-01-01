import React from 'react'
import Servicio from '../Servicio'
import Precios from './Precios'
import LosEntrenamientos from './LosEntrenamientos'

const unwraps = [
  {
    id: 1,
    title: 'Quiero saber más sobre los entrenamientos',
    children: <LosEntrenamientos />
  },
  {
    id: 2,
    title: 'Precios',
    children: <Precios />
  }
]

const image = {
  src: '/kath5.png',
  height: 812,
  width: 660,
  alt: 'kath 4'
}

const Entrenamientos = () => {
  return (
    <Servicio
      number='02'
      title='Entrenamientos personalizados online'
      unwraps={unwraps}
      link='#'
      image={image}
    >
      <p>
        Estoy aquí para ayudarte a alcanzar tus objetivos físicos de manera personalizada y efectiva. <br />
        Más de una década de experiencia con clientes con más de 50 años de edad.
      </p>
    </Servicio>
  )
}

export default Entrenamientos