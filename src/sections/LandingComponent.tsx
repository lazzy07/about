import React, { useEffect } from 'react'
import { defaultColors } from '../constants/Colors'
import lottie from "lottie-web";
import MyAvatar from "../animations/human.json";

export default function LandingComponent() {
  const renderAnimation = () => {
    lottie.loadAnimation({
      container: document.querySelector("#avatar-container")!,
      animationData: MyAvatar,
      autoplay: true,
      renderer: "svg",
      loop: true,
    })
  }

  useEffect(renderAnimation, [])

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <div>
        <div style={{ height: "100vh", zIndex: 50 }} id="avatar-container"></div>
      </div>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%" }}>
        <h1 style={{ fontSize: "2em", color: defaultColors.DEFAULT_FONT_COLOR, textAlign: "center", zIndex: 100, fontWeight: "normal", paddingBottom: 30, marginBottom: 0 }}>
          Hello, I'm
        </h1>
        <div style={{ fontFamily: "signature", fontWeight: "bolder", fontSize: "6em", textAlign: "center", color: defaultColors.DEFAULT_FONT_COLOR }}>Lasantha Madushan</div>
      </div>
    </div>
  )
}
