import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigateをインポート
import Card from "../components/Card";
import GraphicData from "./GraphicData";
import "../styles.scss";

function GraphicHome() {
  const [popupData, setPopupData] = useState(null); // ポップアップデータの状態管理
  const navigate = useNavigate(); // navigate関数を使ってページ遷移

  const handleCardClick = (id) => {
    const selectedCard = GraphicData.find((card) => card.id === id); // idに基づいてカードを検索

    // id=1はSensyaページへ遷移
    if (id === 1) {
      navigate("/sensya"); // Sensya.jsページに遷移
    } else {
      setPopupData(selectedCard); // id=1以外はポップアップを表示
    }
  };

  const closePopup = () => {
    setPopupData(null); // ポップアップを閉じる
  };

  return (
    <div className="Graphic-container">
      <h1 className="title">Graphic</h1>
      <p className="description">
        グラフィック作品をまとめたページです。
        <br />
        主にポスター・パッケージ・タイポグラフィなどがあります。
      </p>

      <div className="home-card-wrapper">
        <div className="home-card-container">
          {GraphicData.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)} // カードクリック時にhandleCardClickを実行
              style={{ cursor: "pointer" }}
            >
              <Card
                id={card.id}
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
                style={{ width: "100%", height: "auto", borderRadius: "8px" }} // スタイルで画像を整える
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

export default GraphicHome;
