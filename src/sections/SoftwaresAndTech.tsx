import React from 'react'
import IconComponent from '../components/IconComponent'
import { defaultColors } from '../constants/Colors'
import { ICON_TYPES } from '../interfaces/IconTypes'
import "../scss/icon.scss"
export default function SoftwaresAndTech() {
  const renderIcon = (icon: ICON_TYPES) => {
    return <div id={icon} className="col-sm-2 ">
      <IconComponent
        containerStyles={{ padding: 10 }}
        animations
        icon={icon}
        color="yellow"
        title
        style={{ maxWidth: "100px" }}
      />
    </div>
  }

  const renderIcons = (icons: ICON_TYPES[]) => {
    return icons.map((ele) => {
      return renderIcon(ele)
    })
  }

  return (
    <div className="container-fluid" style={{ padding: 40 }}>
      <div style={{ paddingBottom: 120 }}>
        <h1 style={{ fontSize: "1.5em", color: defaultColors.DEFAULT_FONT_COLOR, paddingBottom: 20, textAlign: "center" }}>Programming Languages I Use</h1>
        <div className="row center-xs">
          {renderIcons(["blender", "unreal engine", "unity", "substance designer", "substance painter", "gamemaker"])}
        </div>
      </div>
      <div style={{ paddingBottom: 120 }}>
        <h1 style={{ fontSize: "1.5em", color: defaultColors.DEFAULT_FONT_COLOR, paddingBottom: 20, textAlign: "center" }}>Game Development & 3D Rendering Softwares I Work With</h1>
        <div className="row center-xs">
          {renderIcons(["cpp", "opengl", "typescript", "python", "java", "vulkan", "javascript", "webgl"])}
        </div>
      </div>
      <div style={{ paddingBottom: 120 }}>
        <h1 style={{ fontSize: "1.5em", color: defaultColors.DEFAULT_FONT_COLOR, paddingBottom: 20, textAlign: "center" }}>Graphic Designing Softwares I use</h1>
        <div className="row center-xs">
          {renderIcons(["photoshop", "illustrator", "after effects", "xd", "figma", "premiere"])}
        </div>
      </div>
      <div style={{ paddingBottom: 120 }}>
        <h1 style={{ fontSize: "1.5em", color: defaultColors.DEFAULT_FONT_COLOR, paddingBottom: 20, textAlign: "center" }}>Libraries & Technologies</h1>
        <div className="row center-xs">
          {renderIcons(["react", "electron", "docker", "nodejs", "react native", "firebase", "angular", "graphql", "mongodb", "mysql", "redis", "tensorflow", "threejs", "keras"])}
        </div>
      </div>
    </div>
  )
}
