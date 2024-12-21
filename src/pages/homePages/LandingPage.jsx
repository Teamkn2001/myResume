import React from 'react'
import Landing1 from '../../components/HomePage/Landing1'
import MyProfile from '../../components/HomePage/MyProfile'
import Education from '../../components/HomePage/Education'

export default function LandingPage() {
  
  return (
    <div className='overflow-x-hidden'>
        <Landing1 />
        <MyProfile /> 
        <Education />
        <MyProfile /> 
    </div>
  )
}
