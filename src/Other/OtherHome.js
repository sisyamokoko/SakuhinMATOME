import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import OtherData from "./OtherData";
import "../styles.scss";

function OtherHome() {
  const [popupData, setPopupData] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    const selectedCard = OtherData.find((card) => card.id === id);

    // id=2はSoundArtページへ遷移
    if (id === 2) {
      navigate("/soundart");
    }
    // id=1はPortsiteページへ遷移
    else if (id === 1) {
      navigate("/portsite");
    } else {
      setPopupData(selectedCard); // id=3などはポップアップで表示
    }
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="Graphic-container">
      <h1 className="title">Other</h1>
      <p className="description">
        3DCG作品をまとめたページです。
        <br />
        基本的にBlenderを使用しており、１つのテーマを設定して制作していることが多いです。{" "}
      </p>

      <div className="home-card-wrapper">
        <div className="home-card-container">
          {OtherData.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)} // カードクリック時の処理
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
            <p>{popupData.content}</p>
            {popupData.video && (
              <iframe
                width="560"
                height="315"
                src={popupData.video}
                title={popupData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <button onClick={closePopup}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtherHome;
