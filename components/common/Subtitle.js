import React from 'react'

const Subtitle = ({number, children}) => {
  return (
    <div className='flex flex-col'>
      <div className='font-light text-[3.125rem]'>{number}</div>
      <div className='font-medium text-[4.375rem] -tracking-[0.2625rem] leading-[3.875rem]'>{children}</div>
    </div>
  )
}

export default Subtitle