import React, { useEffect } from 'react'
import { defaultColors } from '../constants/Colors'
import lottie from "lottie-web";
import gameBoy from "../animations/gameboy.json"

export default function ThingsIDoSection() {


  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#gameboy-container")!,
      animationData: gameBoy,
      autoplay: true,
      renderer: "svg",
      loop: true,
    })
  }, [])

  const renderSkillItem = (id: string, title: string, text: string) => {
    return <div>
      <div id={id}></div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  }

  const renderSkillsSection = () => {
    return <div>
      {renderSkillItem("gameboy-container", "Game Development", "I'm a game developer which is my passion and what I love the most")}
    </div>
  }

  return (
    <div style={{ backgroundColor: defaultColors.DEFAULT_FONT_COLOR, minHeight: "200px", padding: 30 }}>
      <h1 style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontSize: "3em" }}>What I do,</h1>
      {renderSkillsSection()}
    </div>
  )
}
