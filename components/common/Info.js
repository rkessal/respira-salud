import React from 'react'

const Info = ({ left, children }) => {
  return (
    <div className='flex justify-center w-full'>
      <p className={`max-w-[55.375rem] text-[2.5rem] w-full my-32 ${left ? 'text-left' : 'text-center '}`}>{children}</p>
    </div>
  )
}

export default Info