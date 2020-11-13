import React from 'react'
import { defaultColors } from '../constants/Colors'

export default function LandingComponent() {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%" }}>
        <h1 style={{ fontSize: "5vw", color: defaultColors.DEFAULT_FONT_COLOR, textAlign: "center" }}>
          Hello, I'm Lasantha Madushan
        </h1>
      </div>
    </div>
  )
}
