import React, { createRef, useEffect } from 'react'
import { defaultColors } from '../constants/Colors';
import { ICON_TYPES } from '../interfaces/IconTypes';
import IconComponent from './IconComponent';
import Girl01 from "../img/projects/girl01.png";
import Button from './Button';
interface Props {

}

export default function ProjectPreviewComponent(props: Props) {
  const containerRef = createRef<HTMLDivElement>();
  const cardRef = createRef<HTMLDivElement>();
  const imageRef = createRef<HTMLDivElement>();
  const titleRef = createRef<HTMLDivElement>();
  const descRef = createRef<HTMLDivElement>();
  const iconContainerRef = createRef<HTMLDivElement>();
  const buttonRef = createRef<HTMLDivElement>();

  const renderIcon = (icon: ICON_TYPES) => {
    return <div key={icon} className="col-xs-2">
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

  useEffect(() => {
    const listenToMouseMove = (e: MouseEvent) => {

      const cref = cardRef.current;
      const effectPowerX = 90;
      const effectPowerY = 180;

      const xAxis = (window.innerWidth / 2 - e.pageX) / effectPowerX;
      const yAxis = (window.innerHeight / 2 - e.pageY) / effectPowerY;

      if (cref) {
        cref.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    }

    const onMouseEnter = (e: MouseEvent) => {
      const cref = cardRef.current;
      if (cref)
        cref.style.transition = "none";

      //popouts
      if (imageRef.current) {
        imageRef.current.style.transform = "translateZ(150px)"
      }
    }

    const onMouseLeave = (e: MouseEvent) => {
      const cref = cardRef.current;
      if (cref) {
        cref.style.transition = "all 0.5s ease";
        cref.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //popouts
        if (titleRef.current) {
          titleRef.current.style.transform = "translateZ(0px)"
        }
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", listenToMouseMove);
      containerRef.current.addEventListener("mouseleave", onMouseLeave);
      containerRef.current.addEventListener("mouseenter", onMouseEnter);
    }
    const ref = containerRef.current;
    return () => {
      if (ref) {
        ref.addEventListener("mousemove", listenToMouseMove);
        ref.addEventListener("mouseleave", onMouseLeave);
        ref.addEventListener("mouseenter", onMouseEnter);
      }

    }
  }, [containerRef, cardRef, imageRef])

  return (
    <div ref={containerRef} className="container" style={{
      transformStyle: "preserve-3d", paddingTop: 60, paddingBottom: 60, position: "relative"
    }}>
      <div
        ref={cardRef}
        className="col-md-8 col-sm-10 col-sm-12 col-md-offset-2"
        style={{
          minHeight: 400,
          filter: "drop-shadow( 9px 9px 8px rgba(0, 0, 0, .4))",
          backgroundColor: defaultColors.DEFAULT_FONT_COLOR,
          borderRadius: "80px 20px 80px 20px",
          overflow: "hidden"
        }}>
        <div className="row" style={{ zIndex: 2, position: "relative" }}>
          <div ref={imageRef} className="col-sm-6 col-xs-12" style={{ overflow: "hidden", padding: 0, marginBottom: -4 }}>
            <img src={Girl01} alt="" width="100%" />
          </div>
          <div className="col-sm-6 col-xs-12" style={{ padding: 50, transformStyle: "preserve-3d" }}>
            <div ref={titleRef}>
              <h1
                style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontWeight: "bolder", fontSize: "2.1rem" }}
              >
                Girl Protrait
              </h1>
            </div>
            <div ref={descRef}>
              <p style={{ paddingTop: 10, paddingBottom: 20, color: defaultColors.SECONDARY_FONT_COLOR }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium dicta est repudiandae alias at! Obcaecati voluptatum nihil ad incidunt ullam praesentium laudantium accusantium consequatur hic cumque debitis, blanditiis magni!
              </p>
            </div>
            <div ref={iconContainerRef} className="row">
              {renderIcons(["blender", "substance designer", "substance painter"])}
            </div>
            <div ref={buttonRef} style={{ paddingTop: 30 }}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
