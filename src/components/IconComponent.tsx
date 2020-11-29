import React from 'react'
import { colors } from '../constants/Colors';
import { ICON_TYPES } from '../interfaces/IconTypes'

interface Props {
  icon: ICON_TYPES;
  color: "pink" | "white" | "yellow";
  title?: boolean;
  animations?: boolean;
  style?: React.CSSProperties;
  textStyles?: React.CSSProperties;
  containerStyles?: React.CSSProperties;
}

export default function IconComponent(
  props: Props
) {
  const images = require.context("../img/icons", true);

  const titleCase = (str: string) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  return (
    <div className={props.animations ? "anim-icon" : ""} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", ...props.containerStyles }}>
      <img alt="" src={images(`./${props.icon}.png`).default} style={{
        filter: props.color === "pink" ? "invert(33%) sepia(72%) saturate(4948%) hue-rotate(332deg) brightness(98%) contrast(100%)" : props.color === "yellow" ? "invert(94%) sepia(48%) saturate(834%) hue-rotate(335deg) brightness(111%) contrast(96%)" :
          "invert(100%) sepia(100%) saturate(2%) hue-rotate(329deg) brightness(102%) contrast(101%)",
        ...props.style
      }}
      />
      {props.title ? <p style={{ textAlign: "center", color: props.color === "white" ? colors.WHITE : props.color === "pink" ? colors.PINK : colors.YELLOW, ...props.textStyles }}>{titleCase(props.icon)}</p> : null}
    </div>
  )
}
