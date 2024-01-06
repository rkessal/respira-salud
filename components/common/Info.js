import { opacity } from '@/animations/opacity';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

const Info = ({ left, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const p = ref?.current

    ScrollTrigger.create({
      trigger: p,
      start: 'top bottom',
      onEnter: () => opacity(p),
    })

    return () => ScrollTrigger.removeEventListener(p)
  }, [])
  return (
    <div className='flex justify-center w-full'>
      <p ref={ref} className={`max-w-[55.375rem] text-[2.5rem] w-full my-32 ${left ? 'text-left' : 'text-center '}`}>{children}</p>
    </div>
  )
}

export default Info