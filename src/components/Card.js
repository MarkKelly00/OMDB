import React from "react";

function Card(props) {
  return (
    <div className="card text-center" style={{marginBottom: "15px"}}>
      <div className="card-header" style={{backgroundColor: '#959595'}}>
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
