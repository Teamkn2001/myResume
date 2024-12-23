import React from 'react'
import Landing1 from '../../components/HomePage/Landing1'
import MyProfile from '../../components/HomePage/MyProfile'
import Education from '../../components/HomePage/Education'

export default function LandingPage() {
  
  return (
    <div className='overflow-x-hidden'>
        <MyProfile /> 
        <Landing1 />
        {/* <Education /> */}
    </div>
  )
}
