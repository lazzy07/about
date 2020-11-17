import React from 'react'
import { defaultColors } from '../constants/Colors'

export default function ThingsIDoSection() {
  return (
    <div style={{ backgroundColor: defaultColors.DEFAULT_FONT_COLOR, minHeight: "200px", padding: 30 }}>
      <h1 style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontSize: "3em" }}>What I do,</h1>
    </div>
  )
}
