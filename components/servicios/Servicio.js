import React from 'react'
import Subtitle from '../common/Subtitle'
import UnwrapContainer from '../common/Unwrap'
import Link from 'next/link'
import Image from 'next/image'
import CustomLink from '../common/CustomLink'


const Servicio = ({
  unwraps,
  number,
  title,
  image,
  link,
  children
}) => {
  return (
    <div className='flex sm:flex-row'>
      <div className='flex flex-col mt-10 max-w-[41.25rem] w-full'>
        <Subtitle number={number}>{title}</Subtitle>
        <div className='mt-[3.8rem] max-w-[26.8125rem] mb-11'>{children}</div>
        <UnwrapContainer unwraps={unwraps} />
        <CustomLink href={link} >Haz una reserva</CustomLink>
      </div>
      <figure>
        <Image src={image.src} height={image.height} width={image.width} alt={image.alt} />
      </figure>
    </div>
  )
}

export default Servicio