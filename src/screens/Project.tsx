import React, { useEffect, useState } from 'react'
import { defaultColors } from '../constants/Colors'
import { useLocation } from 'react-router-dom';
import { DataFile } from '../interfaces/DataFile';
import IconComponent from '../components/IconComponent';
import { ICON_TYPES } from '../interfaces/IconTypes';

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
    const projectPath = "./" + currentProject + "/";
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
        paddingBottom: "200px",
      }}>
      <div>
        <img src={previewPicture} alt="" width="100%" />
      </div>
      <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 40 }}>
        <div>
          <h1 style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontSize: "3em", padding: 10 }}>{projectData.name}</h1>
        </div>
        <div style={{ color: defaultColors.SECONDARY_FONT_COLOR, paddingTop: "30px" }}>
          <div className="row">
            <div className="col-sm-12 col-md-8" style={{ paddingBottom: 40 }}>
              <p dangerouslySetInnerHTML={{ __html: projectData.description }}></p>
            </div>
            <div className="col-sm-12 col-md-4">
              <div style={{ display: "flex", justifyContent: "center" }} className="row">
                {renderIcons(projectData.icons)}
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  )
}
