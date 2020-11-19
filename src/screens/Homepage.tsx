import React from 'react'
import LandingComponent from '../sections/LandingComponent'
import ProjectSection from '../sections/ProjectSection'
import SoftwaresAndTech from '../sections/SoftwaresAndTech'
import ThingsIDoSection from '../sections/ThingsIDoSection'

export default function Homepage() {
  return (
    <div>
      <LandingComponent />
      <ThingsIDoSection />
      <ProjectSection />
      <SoftwaresAndTech />
    </div>
  )
}
