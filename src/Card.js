import React from "react";
import "./styles.css";

const Card = ({ image, title, content }) => {
  return (
    <div className="card-wrap">
      <div className="card">
        <div
          className="card-bg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-info">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
