import React from 'react'
import Servicio from '../Servicio'
import Info from './Info'
import LosCursos from './LosCursos'

const unwraps = [
  {
    id: 1,
    title: 'Quiero saber más sobre los entrenamientos',
    children: <LosCursos />
  },
  {
    id: 2,
    title: '+ Info',
    children: <Info />
  }
]

const image = {
  src: '/kath6.png',
  height: 812,
  width: 660,
  alt: 'kath 6'
}

const Cursos = () => {
  return (
    <Servicio
      number='02'
      title='Entrenamientos personalizados online'
      unwraps={unwraps}
      link='#'
      image={image}
    >
      <p>
        Los diversos programas están diseñados para todos los niveles y edades, desde niños de 8 años hasta adultos mayores. <br />
        Tenemos modalidad presencial y online así puedas participar donde quieras te encuentres. con la fortuna de colaborar con profesionales ofreciendo temas de mucho interés.
      </p>
    </Servicio>
  )
}

export default Cursos