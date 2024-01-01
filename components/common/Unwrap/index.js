import React, { useState } from 'react'
import Unwrap from './Unwrap'

const UnwrapContainer = ({ unwraps }) => {
  const [toggled, toggle] = useState(null)
  return (
    <div>{
      unwraps.map(({
        id,
        title,
        children
      }) => (
        <Unwrap
          key={`unw-${id}`}
          id={id}
          title={title}
          toggle={toggle}
          toggled={toggled}
        >
          <div className='max-w-[27.0625rem] flex flex-col w-full ml-6'>
            {children}
          </div>
        </Unwrap>
      ))
    }</div>
  )
}

export default UnwrapContainer