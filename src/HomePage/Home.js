import React from "react";
import "./Home.scss";

const Card = ({ title, cardType }) => {
  return (
    <div className={`content-box ${cardType ? cardType : ""}`}>
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

const App = () => {
  return (
    <div className="main-wrapper">
      <h1 className="main-title">TanakaShoudai Portfolio</h1>
      <p className="Slogan">
        ターゲットのために様々なスタイル・ツールを
        <br />
        使い分ける事が出来るデザイナーです
      </p>
      <p className="description">
        グラフィック作品をまとめたページです。
        <br />
        主にポスター・パッケージ・タイポグラフィなどがあります。
      </p>
      <h1 className="main-title">Contents</h1>
      <Card title="Graphic" cardType="content-box" />
      <Card title="3DCG" cardType="content-box2" />
      <Card title="Other" cardType="content-box3" />
      <Card title="Profile" cardType="content-box4" />
    </div>
  );
};

export default App;
