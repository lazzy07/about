import React, { useEffect, useState } from 'react'
import Achievement from '../components/Achievement';
import { defaultColors } from '../constants/Colors'
import { AchievementFile } from '../interfaces/AchievementFile';

const data = require.context("../data/achievements");
let achievements = new Set<string>();

export default function AchievementsSection() {
  const [achievementElements, setAchievementElements] = useState<any[]>([])

  const getAllAchievements = () => {
    data.keys().forEach(e => {
      const data = e.split("/")[1];
      achievements.add(data);
    })
  }

  getAllAchievements();

  const readData = (testimonialName: string): AchievementFile => {
    return data(`./${testimonialName}/data.json`);
  }

  const renderAchievements = () => {
    achievements.forEach(e => {
      const data = readData(e);
      const newVal = renderAchievement(data, e);
      setAchievementElements((prev) => {
        return [...prev, newVal]
      });
    })
  }


  const renderAchievement = (aData: AchievementFile, project: string) => {
    const images = aData.images.map(e => data(`./${project}/${e}`).default);
    return <Achievement type={parseInt(project) % 2} key={project} data={aData} images={images} />
  }

  useEffect(renderAchievements, []);

  return (
    <div style={{ width: "100%", paddingTop: 60, paddingBottom: 60, marginTop: 10, marginBottom: 50, backgroundColor: defaultColors.DEFAULT_FONT_COLOR }}>
      <h1 style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontSize: "3em", textAlign: "center" }}>MY ACHIEVEMENTS</h1>
      <div style={{ paddingTop: 50, paddingBottom: 50 }}>
        {achievementElements}
      </div>
    </div>
  )
}
