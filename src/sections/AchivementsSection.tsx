import React from 'react'
import { defaultColors } from '../constants/Colors'

export default function AchivementsSection() {
  return (
    <div style={{ width: "100%", paddingTop: 60, paddingBottom: 60, marginTop: 10, marginBottom: 50, backgroundColor: defaultColors.DEFAULT_FONT_COLOR }}>
      <h1 style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontSize: "3em", textAlign: "center" }}>MY ACHIVEMENTS</h1>
    </div>
  )
}
