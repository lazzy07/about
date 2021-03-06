import React, { useEffect, useState } from 'react'
import { defaultColors } from '../constants/Colors'
import { useLocation } from 'react-router-dom';
import { DataFile } from '../interfaces/DataFile';
import IconComponent from '../components/IconComponent';
import { ICON_TYPES } from '../interfaces/IconTypes';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const data = require.context("../data/project_data");

const readData = (projectName: string): DataFile => {
  return data(`./${projectName}/data.json`);
}

export default function Project() {
  const location = useLocation();
  const currentProject = location.pathname.split("/")[3];
  // const [files, setFiles] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);


  const renderIcon = (icon: ICON_TYPES) => {
    return <div key={icon} className="col-xs-3">
      <IconComponent
        containerStyles={{ padding: 10 }}
        animations
        icon={icon}
        color="pink"
        title
        style={{ maxWidth: "60px" }}
        textStyles={{ fontSize: "0.9rem" }}
      />
    </div>
  }

  const renderIcons = (icons: ICON_TYPES[]) => {
    return icons.map((ele) => {
      return renderIcon(ele)
    })
  }

  useEffect(() => {
    const projectPath = "./" + currentProject;

    const imagesPath = projectPath + "/preview/";

    data.keys().forEach(e => {
      // if (e.includes(projectPath)) {
      //   setFiles(prev => {
      //     return [...prev, e]
      //   })
      // }

      if (e.includes(imagesPath)) {
        setImages(prev => {
          return [...prev, e]
        })
      }
    })

  }, [location, currentProject]);

  const projectData = readData(currentProject);
  const previewPicture = data(`./${currentProject}/${projectData.image}`).default;

  const onClickLink = (link: string) => {
    window.open(link);
  }

  const renderLinks = () => {
    return projectData.links.map(e => {
      return <div style={{ padding: 10 }}><Button title={e.title} onClick={() => onClickLink(e.url)} /></div>
    })
  }

  const renderPreviewImg = () => {
    return projectData.isVideo ? <><video width="100%" loop autoPlay muted><source src={previewPicture} type="video/mp4" /></video></> : <><img src={previewPicture} alt="" /></>
  }

  const renderImages = (): any => {
    return images.map((e, index) => {
      return <><img key={index} src={data(e).default} alt="" /></>
    })
  }

  const renderCarousel = () => {
    return <Carousel infiniteLoop autoPlay={projectData.autoPlay} swipeable width="100%" showArrows={true}>
      {renderPreviewImg()}
      {renderImages()}
    </Carousel>
  }

  return (
    <div
      style={{
        // position: "absolute",
        // top: 100,
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: defaultColors.DEFAULT_FONT_COLOR,
        zIndex: 10000,
      }}>
      <div>

        {renderCarousel()}
      </div>
      <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 40, paddingBottom: 70 }}>
        <div>
          <h1 style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontSize: "3em", padding: 10 }}>{projectData.name}</h1>
        </div>
        <div style={{ color: defaultColors.SECONDARY_FONT_COLOR, paddingTop: "30px" }}>
          <div className="row">
            <div className="col-sm-12 col-md-8" style={{ paddingBottom: 40, paddingLeft: 30 }}>
              <p dangerouslySetInnerHTML={{ __html: projectData.description }}></p>
            </div>
            <div className="col-sm-12 col-md-4">
              <div style={{ display: "flex", justifyContent: "center" }} className="row">
                {renderIcons(projectData.icons)}
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: 30, paddingTop: 30, display: "flex" }}>
            {renderLinks()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
