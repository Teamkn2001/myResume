import React from 'react'
import ProfileBG from '/japanBG.webp'

export default function TechCard({ logo, name}) {
  return (
    <div className='w-[10rem] h-auto p-5 rounded-md flex items-center justify-center border-2 shadow-lg hover:border-red-500 duration-500'>
        <img src={logo} alt={name} />
    </div>
  )
}
