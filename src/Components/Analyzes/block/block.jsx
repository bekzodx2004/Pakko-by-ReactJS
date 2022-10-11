import React from "react";
import "./block.scss";

const analyze = (props) => {
  return (
    <div className="analyzes__block">
      <div className="analyzes__block__text">
        <h5>{props.h5}</h5>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        <a href="https://www.figma.com/file/Gwnf3ZR62GzXBViu2grCJa/Pakko">
          En savoir plus
        </a>
      </div>

      <img src={props.card_img} alt="" />
    </div>
  );
};

export default analyze;
