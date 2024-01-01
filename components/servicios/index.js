import React from 'react'
import Title from '../common/Title'
import Psicoterapia from './psicoterapia'
import Entrenamientos from './entrenamientos'
import Cursos from './cursos'
import Info from '../common/Info'
import Link from 'next/link'
import CustomLink from '../common/CustomLink'

const Servicios = () => {
  return (
    <div className='flex flex-col w-full'>
      <Title>SERVICIOS</Title>
      <div className='flex flex-col gap-36'>
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