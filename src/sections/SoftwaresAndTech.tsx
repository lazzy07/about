import React from 'react'
import IconComponent from '../components/IconComponent'
import { defaultColors } from '../constants/Colors'

export default function SoftwaresAndTech() {
  return (
    <div className="container" style={{ paddingTop: 30, paddingBottom: 30 }}>
      <h1 style={{ fontSize: "2em", color: defaultColors.DEFAULT_FONT_COLOR }}>Softwares and technologies I use</h1>
      <div>
        <IconComponent icon="blender" color="yellow" title style={{ maxWidth: "100px" }} />
        <IconComponent icon="photoshop" color="yellow" title style={{ maxWidth: "100px" }} />
        <IconComponent icon="after effects" color="yellow" title style={{ maxWidth: "100px" }} />
        <IconComponent icon="illustrator" color="yellow" title style={{ maxWidth: "100px" }} />
        <IconComponent icon="opengl" color="yellow" title style={{ maxWidth: "100px" }} />
      </div>
    </div>
  )
}
