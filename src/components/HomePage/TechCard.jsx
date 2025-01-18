import React from 'react'

export default function TechCard({ logo, name, w, h }) {
  if (!w) {
    w = 'w-[10rem]';
  } else if (!h) {
    h = 'h-auto';
  }
  return (
    <div className={`${w} ${h} p-5 rounded-md flex items-center justify-center border-2 shadow-lg hover:border-red-500 duration-500`}>
      <img src={logo} alt={name} />
    </div>
  )
}
