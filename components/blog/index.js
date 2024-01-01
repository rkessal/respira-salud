import React from 'react'
import Title from '../common/Title'
import Image from 'next/image'
import Link from 'next/link'
import Info from '../common/Info'

const Blog = () => {
  return (
    <section>
      <Title>BLOG</Title>
      <div className='flex flex-col sm:flex-row'>
        <div className='flex flex-col max-w-[48.3125rem] w-full mr-[1.25rem]'>
          <figure className='mb-[2.25rem]'>
            <Image src='/kath7.png' alt='kath 7' height={649} width={773} />
          </figure>
          <div>
            <h2 className='text-[2.5rem] mb-[0.75rem]'>Energía vital</h2>
            <span className='text-mono text-[0.75rem] italic'>17/7/23</span>
            <p className='my-[1.5rem]'>Cuando estamos más conscientes de la respiración, el «PRANA» que es la «ENERGIA VITAL»  se incrementa fluyendo mejor en el cuerpo,  purificando y liberando las toxinas.</p>
            <Link href='#' className='uppercase'>Leer más</Link>
          </div>
        </div>
        <div className='flex flex-col flex-1 gap-y-[3.5rem]'>
          <article>
            <figure className='mb-[2.25rem]'>
              <Image src='/kath8.png' alt='kath 7' height={353} width={548} />
            </figure>
            <div>
              <h2 className='text-[2.5rem] leading-[2.3125rem] mb-[0.75rem]'>Meditación para los que no meditan</h2>
              <span className='block text-mono text-[0.75rem] italic'>16/7/23</span>
              <Link href='#' className='uppercase'>Leer más</Link>
            </div>
          </article>
          <article>
            <figure className='mb-[2.25rem]'>
              <Image src='/kath9.png' alt='kath 7' height={353} width={548} />
            </figure>
            <div>
              <h2 className='text-[2.5rem] mb-[0.75rem]'>Mantener la motivación</h2>
              <span className='block text-mono text-[0.75rem] italic'>28/5/19</span>
              <Link href='#' className='uppercase'>Leer más</Link>
            </div>
          </article>
        </div>
      </div>
      <Info>
        “La abundancia es un estado de ánimo dentro de ti. Si sólo observas la &quot;falta&quot;, la carencia aumenta en tu vida. Mira lo que tienes, y entonces aumentará la abundancia.”<br /><br />
        — Sri Sri Ravi Shankar
      </Info>
    </section>
  )
}

export default Blog