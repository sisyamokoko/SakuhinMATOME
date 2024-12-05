// src/components/Card.js
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; // Linkをインポート
import "../styles.scss";

function Card({ id, title, content, image }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // マウス位置 (x)
    const y = e.clientY - rect.top; // マウス位置 (y)

    setMousePosition({
      x: (x / rect.width - 0.5) * 20, // -10～10の範囲に変換
      y: (0.5 - y / rect.height) * 20, // 上下反転して -10～10 の範囲に変換
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 }); // カーソルが外れたらリセット
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <Link to={`/card/${id}`} className="card-link">
        {" "}
        {/* Linkで遷移 */}
        <div
          className="card"
          style={{
            transform: `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`,
          }}
        >
          <div
            className="card-bg"
            style={{
              backgroundImage: `url(${image})`,
              transform: `translate(${mousePosition.x * -2}px, ${
                mousePosition.y * -0.5
              }px)`, // 背景画像の移動
            }}
          ></div>
          <div className="card-info">
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
