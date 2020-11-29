import React, { useEffect, useState } from 'react'
import ProjectPreviewComponent from '../components/ProjectPreviewComponent'
import { defaultColors } from '../constants/Colors'

const data = require.context("../data/project_data");
let projects = new Set<string>();

export default function ProjectSection() {
  const [posts, setPosts] = useState<any[]>([]);
  const getAllProjects = () => {
    data.keys().forEach(e => {
      const data = e.split("/")[1];
      projects.add(data);
    })
  }

  getAllProjects();

  const readData = (projectName: string) => {
    return data(`./${projectName}/data.json`);
  }

  const renderProjectPreview = () => {
    projects.forEach(e => {
      const projectData = readData(e);

      const projectName = projectData.name;
      const previewPicture = data(`./${e}/${projectData.image}`).default;

      const post = <div key={e}>
        <ProjectPreviewComponent
          id={e}
          title={projectName}
          description={projectData.preview}
          icons={projectData.icons}
          isVideo={projectData.isVideo}
          image={previewPicture}
        />

      </div>

      setPosts(prevState => {
        return [...prevState, post]
      })
    })
  }

  useEffect(renderProjectPreview, [])

  return (
    <>
      <h1 style={{ fontSize: "3em", fontWeight: "bolder", color: defaultColors.DEFAULT_FONT_COLOR, textAlign: "center", paddingTop: 120 }}>MY PROJECTS</h1>
      {posts}
    </>
  )
}
