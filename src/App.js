// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import CardDetail from "./components/CardDetail";
import cardData from "./data";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Graphic</h1>
        <div className="container">
          {cardData.map((card) => (
            <Card
              key={card.id}
              id={card.id} // idをCardコンポーネントに渡す
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </div>

      {/* ルーティング設定 */}
      <Routes>
        <Route path="/card/:id" element={<CardDetail />} />{" "}
        {/* カード詳細ページ */}
      </Routes>
    </Router>
  );
}

export default App;
