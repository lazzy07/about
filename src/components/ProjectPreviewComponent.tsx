import React, { createRef, useEffect } from 'react'
import { defaultColors } from '../constants/Colors';
import { ICON_TYPES } from '../interfaces/IconTypes';
import IconComponent from './IconComponent';
import Button from './Button';
import { useHistory } from "react-router";
import { ROOT } from '../routes';

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  icons: ICON_TYPES[];
  isVideo?: boolean;
}

export default function ProjectPreviewComponent(props: Props) {
  const containerRef = createRef<HTMLDivElement>();
  const cardRef = createRef<HTMLDivElement>();
  const history = useHistory();
  const renderIcon = (icon: ICON_TYPES) => {
    return <div key={icon} className="col-xs-3">
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

    const onMouseEnter = (_: MouseEvent) => {
      const cref = cardRef.current;
      if (cref)
        cref.style.transition = "none";
    }

    const onMouseLeave = (_: MouseEvent) => {
      const cref = cardRef.current;
      if (cref) {
        cref.style.transition = "all 0.5s ease";
        cref.style.transform = `rotateY(0deg) rotateX(0deg)`;
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
  }, [containerRef, cardRef]);



  return (
    <div ref={containerRef} className="container" style={{
      transformStyle: "preserve-3d", paddingTop: 60, paddingBottom: 60, position: "relative", perspective: "1000px"
    }}>
      <div
        ref={cardRef}
        className="col-md-10 col-sm-10 col-xs-12 col-md-offset-1 col-sm-offset-1"
        style={{
          filter: "drop-shadow( 9px 9px 8px rgba(0, 0, 0, .4))",
          backgroundColor: defaultColors.DEFAULT_FONT_COLOR,
          borderRadius: "80px 20px 80px 20px",
          overflow: "hidden"
        }}>
        <div className="row" style={{ zIndex: 2, position: "relative", transformStyle: "preserve-3d", perspective: "1000px" }}>
          <div className="col-sm-6 col-md-7 col-xs-12" style={{ overflow: "hidden", padding: 0, marginBottom: -4, zIndex: 1, display: "flex", justifyContent: "center" }}>
            {!props.isVideo ? <img src={props.image} alt="" height="480px" style={{ transform: "translate(-10%,0)" }} /> :
              <video height="480px" loop muted autoPlay><source src={props.image} type="video/mp4" /></video>}
          </div>
          <div className="col-sm-6 col-md-5 col-xs-12" style={{ padding: 50, zIndex: 2 }}>
            <h1
              style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontWeight: "bolder", fontSize: "2.1rem", filter: `drop-shadow(3px 3px 2px ${defaultColors.DEFAULT_BACKGROUND_COLOR}45` }}
            >
              {props.title}
            </h1>
            <p style={{ paddingTop: 10, paddingBottom: 20, color: defaultColors.SECONDARY_FONT_COLOR }}>
              {props.description}
            </p>
            <div className="row">
              {renderIcons(props.icons)}
            </div>
            <div style={{ paddingTop: 30 }}>
              <Button title={"Read More"} onClick={() => history.push(ROOT + "/project/" + props.id)} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
