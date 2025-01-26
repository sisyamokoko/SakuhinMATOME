import React from "react";
import { useNavigate } from "react-router-dom"; // ページ遷移用のhook
import "./Home.scss";

const Card = ({ title, cardType, onClick }) => {
  return (
    <div
      className={`content-box ${cardType ? cardType : ""}`}
      onClick={onClick} // カードクリック時の処理
    >
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">Contents...</p>
      <div className="photo-area"></div>
      <ul className="vertical-dots">
        {Array(22)
          .fill(null)
          .map((_, index) => (
            <li key={index}></li>
          ))}
      </ul>
      <div className="network-icons"></div>
      <button className="click-button"></button>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate(); // ページ遷移用のフック

  return (
    <div className="main-wrapper">
      <h1 className="main-title">TanakaShoudai Portfolio</h1>
      <p className="description">
        今までに作ったものをまとめていたり、まとめていなかったりしてみました。
        <br />
        気になるものがあれば見てみてください。
        <br />
        もっと気になったらTwitterかInstagramでも見てください。
      </p>
      <h1 className="main-title">Contents</h1>
      <Card
        title="Graphic"
        cardType="content-box"
        onClick={() => navigate("/graphic")} // クリックで`/graphic`に遷移
      />
      <Card
        title="3DCG"
        cardType="content-box2"
        onClick={() => navigate("/3dcg")}
      />
      <Card
        title="Other"
        cardType="content-box3"
        onClick={() => navigate("/other")}
      />
    </div>
  );
};

export default Home;
