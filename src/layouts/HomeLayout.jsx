import React from 'react'
import Header from '../components/HomePage/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/HomePage/Footer'
import { Scroll } from 'lucide-react'
import ScrollTop from '../components/HomePage/ScrollTop'

export default function HomeLayout() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <ScrollTop />
      <Outlet />
      <Footer />
    </div>
  )
}
