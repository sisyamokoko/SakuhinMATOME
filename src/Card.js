import React, { useState } from "react";
import "./styles.scss";

function Card({ title, content, image }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;
    setMouseX((offsetX / offsetWidth) * 100);
    setMouseY((offsetY / offsetHeight) * 100);
  };

  const handleMouseLeave = () => {
    setMouseX(50);
    setMouseY(50);
  };

  const cardStyle = {
    transform: `rotateY(${(mouseX - 50) / 3}deg) rotateX(${
      (50 - mouseY) / 5
    }deg)`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card" style={cardStyle}>
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
}

export default Card;
