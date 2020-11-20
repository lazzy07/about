import React, { createRef, useEffect } from 'react'
import { defaultColors } from '../constants/Colors';
import { ICON_TYPES } from '../interfaces/IconTypes';
import IconComponent from './IconComponent';
import Girl01 from "../img/projects/girl/girl01.png";
import Girl01Depth from "../img/projects/girl/girl01_disp.jpg";
import Button from './Button';
import { Application, filters, Sprite } from "pixi.js";

interface Props {

}

const depthMap = Sprite.from(Girl01Depth);
const displaceFilter = new filters.DisplacementFilter(depthMap);

export default function ProjectPreviewComponent(props: Props) {
  const containerRef = createRef<HTMLDivElement>();
  const cardRef = createRef<HTMLDivElement>();
  const imageRef = createRef<HTMLDivElement>();
  const rendererRef = createRef<HTMLDivElement>();
  const img = Sprite.from(Girl01);

  const imgRes = img.width / img.height;

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

      if (displaceFilter) {
        displaceFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 100;
        displaceFilter.scale.y = (window.innerWidth / 2 - e.clientY) / 100;
      }

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
  }, [containerRef, cardRef, imageRef]);

  useEffect(() => {
    const app = new Application({ width: rendererRef.current!.clientWidth, height: rendererRef.current!.clientHeight });
    rendererRef.current?.appendChild(app.renderer.view);

    app.stage.addChild(depthMap);

    displaceFilter.scale.x = 0;
    displaceFilter.scale.y = 0;
    img.height = app.renderer.height;
    img.width = img.height * imgRes;



    app.stage.filters = [displaceFilter];
    app.stage.addChild(img);

    const onResizeRenderer = (_: UIEvent) => {
      setTimeout(() => {
        app.renderer.resize(rendererRef.current!.clientWidth, imageRef.current!.clientHeight)
      }, 500)
    }

    window.addEventListener("resize", onResizeRenderer)

    return () => {
      window.removeEventListener("resize", onResizeRenderer);
    }
  }, [rendererRef, img, imageRef, imgRes])

  return (
    <div ref={containerRef} className="container" style={{
      transformStyle: "preserve-3d", paddingTop: 60, paddingBottom: 60, position: "relative"
    }}>
      <div
        ref={cardRef}
        className="col-md-8 col-sm-10 col-xs-12 col-md-offset-2 col-sm-offset-1"
        style={{
          filter: "drop-shadow( 9px 9px 8px rgba(0, 0, 0, .4))",
          backgroundColor: defaultColors.DEFAULT_FONT_COLOR,
          borderRadius: "80px 20px 80px 20px",
          overflow: "hidden"
        }}>
        <div className="row" style={{ zIndex: 2, position: "relative", transformStyle: "preserve-3d", perspective: "1000px" }}>
          <div ref={imageRef} className="col-sm-6 col-xs-12" style={{ overflow: "hidden", padding: 0, marginBottom: -4, zIndex: 1 }}>
            {/* <img src={Girl01} alt="" width="100%" /> */}
            <div ref={rendererRef} style={{ width: "100%", height: 480, backgroundColor: "khaki" }}></div>
          </div>
          <div className="col-sm-6 col-xs-12" style={{ padding: 50, zIndex: 2 }}>
            <h1
              style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontWeight: "bolder", fontSize: "2.1rem", filter: `drop-shadow(3px 3px 2px ${defaultColors.DEFAULT_BACKGROUND_COLOR}45` }}
            >
              Girl Protrait
            </h1>
            <p style={{ paddingTop: 10, paddingBottom: 20, color: defaultColors.SECONDARY_FONT_COLOR }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium dicta est repudiandae alias at! Obcaecati voluptatum nihil ad incidunt ullam praesentium laudantium
            </p>
            <div className="row">
              {renderIcons(["blender", "substance designer", "substance painter"])}
            </div>
            <div style={{ paddingTop: 30 }}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
