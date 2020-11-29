import React from 'react'
import { defaultColors } from '../constants/Colors'
import { AchievementFile } from '../interfaces/AchievementFile'

interface Props {
  data: AchievementFile;
  images: any[];
  type: number;
}

export default function Achievement(props: Props) {
  const renderImages = () => {
    return <div style={{ position: "relative", marginTop: 20 }}>
      {props.images[1] && <div style={{ position: "absolute", top: 40, left: 40, zIndex: 1 }}>
        <img height="350px" src={props.images[1]} alt="" style={{
          filter: "drop-shadow( 9px 9px 8px rgba(0, 0, 0, .4))",
          borderRadius: "80px 20px 80px 20px",
        }} />
      </div>}
      <img height="350px" src={props.images[0]} alt="" style={{
        filter: "drop-shadow( 9px 9px 8px rgba(0, 0, 0, .4))",
        borderRadius: "80px 20px 80px 20px",
      }} />
    </div>
  }

  const renderText = () => {
    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
      <h1 style={{ color: defaultColors.DEFAULT_BACKGROUND_COLOR, fontSize: "2em" }}>{props.data.title}</h1>
      <p style={{ paddingTop: 30, color: defaultColors.SECONDARY_FONT_COLOR }} dangerouslySetInnerHTML={{ __html: props.data.description }}></p>
    </div>
  }

  if (props.type) {
    return (
      <div className="row" style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 40, paddingRight: 40 }}>
        <div className="col-xs-12 col-sm-6">
          {renderText()}
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", width: "100%" }} className="col-xs-12 col-sm-6">
          {renderImages()}
        </div>
      </div>
    )
  } else {
    return (
      <div className="row" style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 40, paddingRight: 40 }}>
        <div className="col-xs-12 col-sm-6">
          {renderImages()}
        </div>
        <div className="col-xs-12 col-sm-6">
          {renderText()}
        </div>
      </div>
    )
  }

}
