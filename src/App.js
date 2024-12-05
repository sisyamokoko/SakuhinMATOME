import React from "react";
import "./styles.scss";
import Card from "./Card";
import cardData from "./data";

function App() {
  return (
    <div>
      <h1 className="title">Hover over the cards</h1>
      <div className="container">
        {cardData.map((card) => (
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

export default App;
