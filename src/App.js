import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // LinkとRoutes, Routeをインポート
import Card from "./components/Card";
import DummyPage from "./components/DummyPage"; // ダミーページをインポート
import cardData from "./data"; // ダミーデータをインポート

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Graphic</h1>
        <div className="container">
          {cardData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </div>

      {/* ダミーページへのリンクを設定 */}
      <Routes>
        <Route path="/" element={<h2>ホームページ</h2>} /> {/* ホームページ */}
        <Route path="/dummy" element={<DummyPage />} /> {/* ダミーページ */}
      </Routes>
    </Router>
  );
}

export default App;
