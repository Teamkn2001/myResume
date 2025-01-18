import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/HomePage/Footer'
import { Scroll } from 'lucide-react'
import ScrollTop from '../components/HomePage/ScrollTop'
import { breakpoints, useMediaQuery } from '../hooks/useMediaQuery'
import { use } from 'react'
import Header from '../components/Header'

export default function HomeLayout() {

  return (
    <div className='min-h-screen flex flex-col overflow-x-hidden'>
      <ScrollTop />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

// this for hamburger menu
// return (
//   <div className='min-h-screen flex flex-col overflow-x-hidden'>
//     <Header isMobile={isMobile} isDesktop={isDesktop}/>
//     <main className='flex-grow'>
//     <Outlet />
//     </main>
//     <ScrollTop />
//     <Footer />
//   </div>
// )