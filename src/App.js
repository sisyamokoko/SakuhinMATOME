import React from "react";
import "./styles.css";
import Card from "./Card";
import cardData from "./data";

function App() {
  return (
    <div>
      <h1 className="title">Hover over the cards</h1>
      <div className="container">
        {cardData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
