import React from "react";
import Card from "../components/Card";
import GraphicData from "./GraphicData";
import "../styles.scss";

function GraphicHome() {
  return (
    <div className="container">
      <h1 className="title">グラフィック</h1>
      <div className="card-container">
        {GraphicData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default GraphicHome;
