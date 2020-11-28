import React from 'react'
import AchivementsSection from '../sections/AchivementsSection'
import CustomerTestimonials from '../sections/CustomerTestimonials'
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
      <AchivementsSection />
      <SoftwaresAndTech />
      <CustomerTestimonials />
    </div>
  )
}
