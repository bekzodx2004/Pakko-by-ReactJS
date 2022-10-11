import React from "react";
import "./card.scss";
const service = (props) => {
  return (
    <div className="services__card">
      <img src={props.img} alt="" />
      <h5>{props.text}</h5>
    </div>
  );
};

export default service;
