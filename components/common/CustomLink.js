import Link from 'next/link'
import React from 'react'

const CustomLink = ({ href, children }) => {
  return (
    <Link href={href} className='mt-[5.13rem] max-w-[27.0625rem] w-full bg-black p-4 text-white text-center' >{children}</Link>
  )
}

export default CustomLink