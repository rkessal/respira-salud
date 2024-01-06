import React from 'react'

const Unwrap = ({ id, title, toggled, toggle, children }) => {
  return (
    <div
      className='flex flex-col max-w-[34.1875rem] py-[1.56rem] w-full border-b-2 border-black'
      onClick={() => toggle(
        toggled === id ? null : id
      )}
    >
      <div className='flex flex-row items-center justify-between w-full py-4'>
        <div className='font-mono opacity-60'>{title}</div>
        <svg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path opacity='0.6' d='M4.63747 0H6.36253V4.74949H11V6.25051H6.36253V11H4.63747V6.25051H0V4.74949H4.63747V0Z' fill='black' />
        </svg>
      </div>
      {toggled === id && (
        <>{children}</>
      )}
    </div>
  )
}

export default Unwrap