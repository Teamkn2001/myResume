import React from 'react'
import MyProfile from '../../components/HomePage/MyProfile'
import Project from '../../components/HomePage/Project'
import Ending from '../../components/HomePage/Ending'
import SingleNavigation from '../../components/Header/SingleNavigation'
import { breakpoints, useMediaQuery } from '../../hooks/useMediaQuery'
import ProjectTop from '../../components/HomePage/ProjectTop'
import Project2 from '../../components/HomePage/Project2'
import Cargowidt from '../../components/HomePage/Cargowidt'
import Certificates from '../../components/HomePage/Certificates'

export default function LandingPage() {
  const isMobile = useMediaQuery(breakpoints.mobile)

  return (
    <div className='overflow-x-hidden'>
      <SingleNavigation isMobile={isMobile}/>
      <div></div>
      <div id="profile"><MyProfile isMobile={isMobile}/></div>
      <div id="Certificate"><Certificates isMobile={isMobile}/></div>
      <div id="projects"><ProjectTop isMobile={isMobile}/></div>
      <div id="project2"><Project2 isMobile={isMobile}/></div>
      <div id="projectCargowidt"><Cargowidt isMobile={isMobile}/></div>
      <div id="projects2"><Project isMobile={isMobile}/></div>
      <div id="ending"><Ending isMobile={isMobile}/></div>
    </div>
  )
}
