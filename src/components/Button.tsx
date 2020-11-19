import React from 'react'
import { defaultColors } from '../constants/Colors'

export default function Button() {
  return (
    <div style={{
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: defaultColors.DEFAULT_BACKGROUND_COLOR,
      color: defaultColors.DEFAULT_FONT_COLOR,
      fontWeight: "normal",
      display: "inline-block",
      borderRadius: "20px 5px 20px 5px",
      filter: `drop-shadow( 4px 4px 4px ${defaultColors.DEFAULT_BACKGROUND_COLOR})`, cursor: "pointer"
    }}
    >
      Read More
    </div>
  )
}
