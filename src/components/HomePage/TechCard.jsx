import React from 'react'

export default function TechCard({ logo, name}) {
  return (
    <div className='w-[10rem] h-auto  p-5 rounded-md flex items-center justify-center border-2 shadow-lg'>
        <img src={logo} alt={name} />
    </div>
  )
}
