import React from 'react'
import { defaultColors } from '../constants/Colors'

interface Props {
  title: string;
  onClick: () => void;
}

export default function Button(props: Props) {
  return (
    <div onClick={props.onClick} style={{
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: defaultColors.DEFAULT_BACKGROUND_COLOR,
      color: defaultColors.DEFAULT_FONT_COLOR,
      fontSize: 16,
      fontWeight: "normal",
      display: "inline-block",
      borderRadius: "20px 5px 20px 5px",
      filter: `drop-shadow( 4px 4px 4px ${defaultColors.DEFAULT_BACKGROUND_COLOR})`, cursor: "pointer"
    }}
    >
      {props.title}
    </div>
  )
}
