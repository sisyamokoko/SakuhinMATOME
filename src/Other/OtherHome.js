import React from "react";
import Card from "../components/Card";
import OtherData from "./OtherData";
import "../styles.scss";

function OtherHome() {
  // コンポーネント名をCGHomeに修正
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
            <Card
              key={card.id}
              category={card.category}
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherHome; // エクスポートもCGHomeに
