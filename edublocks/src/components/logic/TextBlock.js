import React from "react";
import "../styles/textBlock.css";

function TextBlock(props) {
  return (
    <div className='textBlock' style={{ backgroundColor: props.bgColor }}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <img
          src={props.img}
          height={props.imgHeight}
          style={{ borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}

export default TextBlock;
