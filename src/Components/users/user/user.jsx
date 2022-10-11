import React from "react";
import "./user.scss";
const user = (props) => {
  return (
    <div className="users__user">
      <div>
        <div>
          <img src={props.avatar} alt="" />

          <div>
            <h3>{props.name}</h3>
            <h4>{props.username}</h4>
          </div>
        </div>

        <i className="fa-brands fa-twitter"></i>
      </div>

      <p>{props.text}</p>
      <a href="">{props.a}</a>
    </div>
  );
};

export default user;
