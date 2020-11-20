import React from 'react'
import ProjectPreviewComponent from '../components/ProjectPreviewComponent'
import { defaultColors } from '../constants/Colors'
import R8remake from "../img/projects/carnew/r8remake.png";

export default function ProjectSection() {
  return (
    <div className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bolder", color: defaultColors.DEFAULT_FONT_COLOR }}>Projects</h1>
      <ProjectPreviewComponent
        title={"Audi R8 LMS Remake"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, magnam voluptatem quidem"}
        icons={["blender", "substance designer", "substance painter", "photoshop"]}
        image={R8remake}
      />

    </div>
  )
}
