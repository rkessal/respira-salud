import React from 'react'
import Title from '../common/Title'
import Psicoterapia from './psicoterapia'
import Entrenamientos from './entrenamientos'
import Cursos from './cursos'
import Info from '../common/Info'

const Servicios = () => {
  return (
    <div className='flex flex-col w-full'>
      <Title>SERVICIOS</Title>
      <div className='flex flex-col mt-16 gap-y-10'>
        <Psicoterapia />
        <Entrenamientos />
        <Cursos />
      </div>
      <Info>
        La búsqueda del significado es la clave para la salud mental y el florecimiento humano. <br /><br />
        <span className='italic'>— Viktor Frank</span>
      </Info>
    </div>
  )
}

export default Servicios