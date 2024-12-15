import React, { useState } from "react";
import Card from "../components/Card";
import CGData from "./CGData";
import "../styles.scss";

function CGHome() {
  const [popupData, setPopupData] = useState(null); // ポップアップデータの状態管理

  const handleCardClick = (id) => {
    const selectedCard = CGData.find((card) => card.id === id); // idに基づいてカードを検索
    setPopupData(selectedCard); // カードがクリックされたときにポップアップデータを設定
  };

  const closePopup = () => {
    setPopupData(null); // ポップアップを閉じる
  };

  return (
    <div className="Graphic-container">
      <h1 className="title">3DCG</h1>
      <p className="description">
        3DCG作品をまとめたページです。
        <br />
        基本的にBlenderを使用しており、１つのテーマを設定して制作していることが多いです。
      </p>

      <div className="home-card-wrapper">
        <div className="home-card-container">
          {CGData.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)} // カードクリック時にhandleCardClickを実行
              style={{ cursor: "pointer" }}
            >
              <Card
                category={card.category}
                title={card.title}
                content={card.content}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ポップアップ */}
      {popupData && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{popupData.title}</h2>
            <p>{popupData.tools}</p>
            <p>{popupData.content}</p>
            {/* 画像を表示 */}
            {popupData.image && (
              <img
                src={popupData.image}
                alt={popupData.title}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            )}
            <br />
            <button onClick={closePopup}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CGHome;
