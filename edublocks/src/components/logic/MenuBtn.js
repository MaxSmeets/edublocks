import React from "react";

function MenuBtn(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor,
        width: "100%",
        height: "50px",
        borderRadius: "8px",
        border: "0px",
      }}
    >
      {props.title}
    </button>
  );
}

export default MenuBtn;
