import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row items-center justify-between w-full'>
      <div>
        <span className='hidden'>respira-salud</span>
        <Image src='/logo.png' alt='logo respira salud' width={223} height={58} />
      </div>
      <div>
        <ul className='flex flex-row gap-[2.1875rem]'>
          <li>
            <Link href='#quiensoy'>QUIEN SOY</Link>
          </li>
          <li>
            <Link href='#servicios'>SERVICIOS</Link>
          </li>
          <li>
            <Link href='#reserva'>RESERVA DE CITAS</Link>
          </li>
          <li>
            <Link href='#testimonios'>TESTIMONIOS</Link>
          </li>
          <li>
            <Link href='#contact'>CONTACT</Link>
          </li>
          <li>
            <Link href='#blog'>BLOG</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar