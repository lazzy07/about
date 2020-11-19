import React from 'react'
import { defaultColors } from '../constants/Colors';
import { ICON_TYPES } from '../interfaces/IconTypes';
import IconComponent from './IconComponent';

interface Props {

}

export default function ProjectPreviewComponent(props: Props) {
  const renderIcon = (icon: ICON_TYPES) => {
    return <div id={icon} className="col-xs-2">
      <IconComponent
        containerStyles={{ padding: 10 }}
        animations
        icon={icon}
        color="pink"
        title
        style={{ maxWidth: "40px" }}
        textStyles={{ fontSize: "0.7rem" }}
      />
    </div>
  }

  const renderIcons = (icons: ICON_TYPES[]) => {
    return icons.map((ele) => {
      return renderIcon(ele)
    })
  }

  return (
    <div className="container" style={{ marginTop: 20, marginBottom: 40, position: "relative" }}>
      <div style={{ padding: 10, minHeight: 500, filter: "drop-shadow( 9px 9px 8px rgba(0, 0, 0, .4))", backgroundColor: defaultColors.DEFAULT_FONT_COLOR, borderRadius: "80px 20px 80px 20px" }}>
        <div className="row" style={{ zIndex: 2, position: "relative" }}>
          <div className="col-sm-6 col-xs-12">

          </div>
          <div className="col-sm-6 col-xs-12" style={{ padding: 50 }}>
            <h1
              style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontWeight: "bolder", fontSize: "2.1rem" }}
            >
              Girl Protrait
            </h1>
            <p style={{ paddingTop: 10, paddingBottom: 20, color: defaultColors.SECONDARY_FONT_COLOR }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium dicta est repudiandae alias at! Obcaecati voluptatum nihil ad incidunt ullam praesentium laudantium accusantium consequatur hic cumque debitis, blanditiis magni!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas corrupti alias quam cupiditate ad perferendis, harum molestiae. Reiciendis quo autem quod libero doloribus neque consequatur vitae in officia maxime!
            </p>
            <div className="row">
              {renderIcons(["blender", "substance designer", "substance painter"])}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
