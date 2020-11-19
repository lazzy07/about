import React from 'react'
import ProjectPreviewComponent from '../components/ProjectPreviewComponent'
import { defaultColors } from '../constants/Colors'

export default function ProjectSection() {
  return (
    <div className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bolder", color: defaultColors.DEFAULT_FONT_COLOR }}>Projects</h1>
      <ProjectPreviewComponent />
    </div>
  )
}
