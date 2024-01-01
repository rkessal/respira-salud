import React from 'react'

const Title = ({children, className}) => {
  return (
    <h1 className={`relative text-[15.5625rem] -tracking-[2.1rem] z-40 ${!!className ? className : ''}`}>{children}</h1>
  )
}

export default Title