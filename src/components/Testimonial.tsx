import React, { createRef, useEffect } from 'react';
import { defaultColors } from '../constants/Colors';
import { TestimonialData } from '../interfaces/TestimonialData'
import Quote from "../svg/quote.svg"

interface Props {
  data: TestimonialData;
  image: any;
}

export default function Testimonial(props: Props) {
  const containerRef = createRef<HTMLDivElement>();
  const cardRef = createRef<HTMLDivElement>();


  useEffect(() => {
    const listenToMouseMove = (e: MouseEvent) => {

      const cref = cardRef.current;
      const effectPowerX = 190;
      const effectPowerY = 280;

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

  const renderTitles = () => {
    return props.data.titles.map(title => {
      return <p key={title} style={{ fontSize: "0.8rem", paddingLeft: 25, paddingRight: 25 }}>{title}</p>
    })
  }



  return (
    <div ref={containerRef} style={{
      transformStyle: "preserve-3d", paddingTop: 60, paddingBottom: 60, position: "relative", perspective: "1000px"
    }}>
      <div
        ref={cardRef}
        className="col-md-8 col-sm-10 col-md-offset-2 col-xs-12"
        style={{
          filter: "drop-shadow( 9px 9px 8px rgba(0, 0, 0, .4))",
          backgroundColor: defaultColors.DEFAULT_FONT_COLOR,
          borderRadius: "80px 20px 80px 20px",
          overflow: "hidden",
          minHeight: "400px"
        }}>
        <div className="row" style={{ zIndex: 2, position: "relative" }}>
          <div className="col-sm-5 col-xs-12" style={{ overflow: "hidden", padding: 0, marginBottom: -4, zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <img src={props.image} alt="" style={{ maxHeight: "120px", borderRadius: "50%", border: `4px solid ${defaultColors.DEFAULT_BACKGROUND_COLOR}`, marginTop: 20 }} />
            <h3 style={{ paddingTop: 10, paddingBottom: 10, color: defaultColors.DEFAULT_BACKGROUND_COLOR, textAlign: "center" }}>{props.data.name}</h3>
            <div style={{ paddingBottom: 20, color: defaultColors.SECONDARY_FONT_COLOR, textAlign: "center" }}>
              {renderTitles()}
            </div>
          </div>
          <div className="col-sm-7 col-xs-12 anim-icon" style={{ padding: 50, zIndex: 2, display: "flex", alignItems: "center", color: defaultColors.SECONDARY_FONT_COLOR, flexDirection: "column", justifyContent: "center" }}>
            <img src={Quote} width={80} alt="" style={{ padding: 20 }} />
            {props.data.description}
          </div>
        </div>
      </div>
    </div >
  )
}
