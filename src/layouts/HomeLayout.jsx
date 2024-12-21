import React from 'react'
import Header from '../components/HomePage/Header'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <div className='overflow-x-hidden'>
        <Header />
        <Outlet />
    </div>
  )
}
