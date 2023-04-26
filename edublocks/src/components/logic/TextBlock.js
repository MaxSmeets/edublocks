import React from "react";
import "../styles/textBlock.css";

function TextBlock(props) {
  return (
    <div className='textBlock' style={{ backgroundColor: props.bgColor }}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <img src={props.img} />
    </div>
  );
}

export default TextBlock;
