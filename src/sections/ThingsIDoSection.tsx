import React, { useEffect } from 'react'
import { defaultColors } from '../constants/Colors'
import lottie from "lottie-web";
import gameBoy from "../animations/gameboy.json"
import laptop from "../animations/laptop.json"
import graphicDesigning from "../animations/graphic_design.json"

export default function ThingsIDoSection() {


  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#gameboy-container")!,
      animationData: gameBoy,
      autoplay: true,
      renderer: "svg",
      loop: true,
    })

    lottie.loadAnimation({
      container: document.querySelector("#laptop-container")!,
      animationData: laptop,
      autoplay: true,
      renderer: "svg",
      loop: true,
    })

    lottie.loadAnimation({
      container: document.querySelector("#graphic-design-container")!,
      animationData: graphicDesigning,
      autoplay: true,
      renderer: "svg",
      loop: true,
    })
  }, [])

  const renderSkillItem = (id: string, title: string, text: string) => {
    return <div className="col-md-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <div style={{ maxWidth: 250 }} id={id}></div>
      <div style={{ fontWeight: "bolder", fontSize: "2em", color: defaultColors.DEFAULT_BACKGROUND_COLOR, paddingTop: 10, paddingBottom: 20 }}>
        <h3>{title}</h3>
      </div>
      <div style={{ color: defaultColors.SECONDARY_FONT_COLOR }}>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div >
  }

  const renderSkillsSection = () => {
    return <div className="row">
      {renderSkillItem("gameboy-container", "Game Development", "<b>I'm a game developer</b>, which is my passion and what I love the most")}
      {renderSkillItem("laptop-container", "Programming", "I love programming! <b>full stack web developement, mobile app development using react native</b> and using <b>C++</b> to create performance heavy libraries are also something I do!")}
      {renderSkillItem("graphic-design-container", "Graphic Designing", "<b>I'm one of the best 3D graphics artsist in Sri Lanka!</b>, other than that I can work on <b>UI/UX designing</b>, <b>video editing</b> and other <b>vector and raster graphic designing</b> projects")}
    </div>
  }

  return (
    <div className="container-fluid" style={{ backgroundColor: defaultColors.DEFAULT_FONT_COLOR, minHeight: "200px", paddingTop: 30, paddingBottom: 30 }}>
      <h1 style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontSize: "3em", paddingLeft: 30 }}>What I do,</h1>
      <div style={{ paddingTop: 40, paddingBottom: 40 }}>
        {renderSkillsSection()}
      </div>
    </div>
  )
}
