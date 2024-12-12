import React from "react";
import Card from "../components/Card";
import GraphicData from "./GraphicData";
import "../styles.scss";

function GraphicHome() {
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

export default GraphicHome;
