import React from 'react'
import Title from '../common/Title'
import Image from 'next/image'
import CustomLink from '../common/CustomLink'

const ArtExcel = () => {
  return (
    <section>
      <Title>ARTEXCEL</Title>
      <div className='flex -mt-36 sm:flex-row'>
        <figure className='ml-[2.375rem]'>
          <Image src='/artexcel.png' alt='art excel' width={693} height={994} />
        </figure>
        <div className='flex flex-col max-w-[27.125rem] w-full gap-11 sm:ml-[3.81rem] sm:mt-[10.38rem]'>
          <p>Mi objetivo es brindarte un espacio seguro y de confianza donde puedas explorar tus emociones, aprender nuevas habilidades y descubrir tu potencial interno para vivir una vida plena y significativa.</p>
          <p>Te invito a explorar los recursos y servicios que ofrezco en esta web y a dar el primer paso hacia un bienestar duradero. <br /><br />
            Estoy aquí para acompañarte en tu camino de crecimiento personal y transformación.<br /><br />
            Espero tener la oportunidad de trabajar juntos y ayudarte a alcanzar una vida más equilibrada y feliz.
          </p>
          <CustomLink href='#'>ARTExcel</CustomLink>
        </div>
      </div>
    </section>
  )
}

export default ArtExcel