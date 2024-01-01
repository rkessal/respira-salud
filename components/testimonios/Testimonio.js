import React from 'react'
import Info from '../common/Info'

const Testimonio = ({ name, age, children }) => {
  return (
    <div className='flex flex-col'>
      <Info left={true}>{children}</Info>
      <div className='pb-24 -mt-24 font-mono opacity-60'>
        <span className='font-bold'>{name}</span>, {age} años
      </div>
    </div>
  )
}

export default Testimonio