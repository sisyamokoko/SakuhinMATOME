// src/components/CardDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import cardData from "../data"; // カードデータをインポート

const CardDetail = () => {
  const { id } = useParams(); // URLのidパラメーターを取得
  const card = cardData.find((card) => card.id === parseInt(id)); // idに一致するカードを検索

  if (!card) {
    return <div>カードが見つかりません</div>; // カードが見つからない場合
  }

  return (
    <div className="card-detail">
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} />
      <p>{card.content}</p>
    </div>
  );
};

export default CardDetail;
