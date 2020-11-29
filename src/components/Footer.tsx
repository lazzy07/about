import React from 'react'
import "../scss/footer.scss"
import Img from "../img/footer/pattern.png";
import { defaultColors } from '../constants/Colors';

export default function Footer() {
  const renderIcon = (className: string, url: string) => {
    return <i onClick={() => window.open(url)} className={className} aria-hidden="true" style={{ fontSize: "3.2rem", padding: 8, cursor: "pointer" }}></i>
  }

  return (
    <div
      className="footer"
      style={{ minHeight: "400px", overflow: "hidden", position: "relative" }}
    >
      <div className="row" style={{ minHeight: "400px", paddingTop: "50px" }}>
        <div className="col-xs-12 col-sm-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", color: defaultColors.DEFAULT_BACKGROUND_COLOR }}>
          <div>
            <h3 style={{ fontSize: "1.2rem" }}>Contact Me</h3>
            <div style={{ paddingTop: 10 }}>
              {renderIcon("fa fa-linkedin-square", "https://www.linkedin.com/in/lazzy07")}
              {renderIcon("fa fa-github-square", "https://github.com/lazzy07")}
              {renderIcon("fa fa-gitlab", "https://gitlab.com/lazzy07")}
              {renderIcon("fa fa-facebook-square", "https://www.facebook.com/lazanthams/")}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", color: defaultColors.DEFAULT_BACKGROUND_COLOR }}>
          <div>
            <h1 style={{ fontSize: "1.5rem" }}>Lasantha M Senanayake</h1>
            <h3 style={{ fontSize: "1rem" }}>No 92,<br />Kulugammana,<br /> Kandy,<br /> Sri Lanka</h3>
            <p style={{ fontSize: "1rem", paddingTop: 20 }}>Undergraduate, Bsc.(Hons) Computer Science</p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "60px",
          bottom: 0,
          left: 0,
          backgroundImage: `url(${Img})`
        }}
      ></div>
    </div>
  )
}
