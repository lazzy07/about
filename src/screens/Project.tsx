import React from 'react'
import { defaultColors } from '../constants/Colors'

export default function Project() {
  return (
    <div style={{
      // position: "absolute",
      // top: 100,
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: defaultColors.DEFAULT_FONT_COLOR,
      zIndex: 10000
    }}>
      <div>
        Hello
      </div>
    </div>
  )
}
