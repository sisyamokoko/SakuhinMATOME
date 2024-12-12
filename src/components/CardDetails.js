import React from "react";
import { useParams, Link } from "react-router-dom";
import cardData from "../Graphic/GraphicData";

function CardDetail() {
  const { id } = useParams(); // URLのパラメータから id を取得
  const card = cardData.find((card) => card.id === parseInt(id)); // id に一致するカードデータを検索

  if (!card) {
    return <p>カードが見つかりません</p>;
  }

  return (
    <div className="card-detail">
      <p className="card-detail-category">{card.category}</p>
      <h1>{card.title}</h1>
      <div className="card-detail-content">
        <img src={card.image} alt={card.title} />
        <p>{card.content}</p>
      </div>
      <Link to="/" className="back-button">
        戻る
      </Link>
    </div>
  );
}

export default CardDetail;
