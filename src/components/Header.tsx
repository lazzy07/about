import React from 'react'
import { HEADER_HEIGHT } from '../constants'
import { defaultColors } from '../constants/Colors'

function renderLink(title: string) {
  return <h3 style={{ color: defaultColors.DEFAULT_FONT_COLOR, padding: 5, marginRight: 10, marginLeft: 10, cursor: "pointer", fontSize: 15 }}>{title}</h3>
}

function renderLinks() {
  return <div style={{ display: "flex" }}>
    {renderLink("Home")}
    {renderLink("Projects")}
    {renderLink("About Me")}
  </div>
}

export default function Header() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      height: HEADER_HEIGHT,
      width: "100%",
      backgroundColor: defaultColors.DEFAULT_BACKGROUND_COLOR,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: `1px solid ${defaultColors.DEFAULT_BACKGROUND_COLOR}`
    }}>
      <h3 style={{ color: defaultColors.DEFAULT_FONT_COLOR, paddingLeft: 20, paddingRight: 20, fontSize: 20 }}>@lazzy07</h3>
      {renderLinks()}
    </div>
  )
}
