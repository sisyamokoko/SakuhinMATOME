import React from "react";
import Card from "./components/Card"; // Card コンポーネントをインポート
import cardData from "./data"; // ダミーデータ（カードの内容）をインポート

function App() {
  return (
    <div className="container">
      {/* グラフィックのタイトル */}
      <h1 className="title">グラフィック</h1>

      {/* カードを表示するコンテナ */}
      <div className="card-container">
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
