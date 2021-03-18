import React from "react";

function Container(props) {
  console.log('props children ', props.children);
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
    </div>;


}

export default Container;
