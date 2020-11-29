import React, { useEffect, useState } from 'react'
import Particles from 'react-particles-js';

export default function BubblesBackground() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);


  const changeHeight = () => {
    document.addEventListener("resize", () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    })
  }

  useEffect(changeHeight, [])

  return (
    <div style={{ height, width, position: "fixed", top: 0, zIndex: -100, transform: "translate3d(0,0,0)" }}>
      <Particles

        style={{ zIndex: 0 }}
        height={"100vh"}
        width={"100%"}
        params={{
          "particles": {
            "number": {
              "value": 160,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "speed": 4,
                "size_min": 0.3
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              }
            },
            "modes": {
              "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
              },
              "repulse": {
                "distance": 400,
                "duration": 4
              }
            }
          }
        }} />
    </div>
  )
}
