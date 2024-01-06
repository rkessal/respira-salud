import React from 'react'
import Subtitle from '../common/Subtitle'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-secondary py-[10rem] -mx-[3.125rem] px-[3.125rem]'>
      <div className='flex flex-col items-end sm:flex-row mb-[4.5rem]'>
        <Subtitle>Suscríbete</Subtitle>
        <div className='flex flex-col sm:ml-64 max-w-[40rem] w-full'>
          <p className='opacity-60 max-w-[27rem] w-full'>Únete a mi newsletter y descubre una nueva forma de cuida tu mente, tu cuerpo y tu espíritu.</p>
          <form className='flex flex-row font-mono'>
            <input className='max-w-[27rem] w-full' placeholder='Correo electrónico' />
            <input className='sm:ml-[1.25rem]' type='submit' value='Suscribirse' />
          </form>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row'>
        <div>
          <figure className='mb-6'>
            <Image alt='logo' src='/logo.png' height={57} width={223} />
          </figure>
          <p className='text-[0.75rem] opacity-60'>Copyright 2024 Respira Salud KATHERIN ANEZ - All Rights Reserved</p>
        </div>
        <div className=' flex flex-col gap-x-28 sm:flex-row sm:ml-[12.38rem] font-mono text-[0.75rem] uppercase'>
          <ul>
            <li>
              <Link href='#'>QUIEN SOY</Link>
            </li>
            <li>
              <Link href='#'>SERVICIOS</Link>
            </li>
            <li>
              <Link href='#'>RESERVA DE CITAS</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href='#'>TESTIMONIOS</Link>
            </li>
            <li>
              <Link href='#'>BLOG</Link>
            </li>
            <li>
              <Link href='#'>CONTACTO</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href='#'>INSTAGRAM</Link>
            </li>
            <li>
              <Link href='#'>YOUTUBE</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer