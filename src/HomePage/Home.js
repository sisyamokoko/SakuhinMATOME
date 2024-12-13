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
      <p className="Slogan">
        ターゲットのために様々なスタイル・ツールを
        <br />
        使い分ける事が出来るデザイナーです
      </p>
      <p className="description">
        私は課題制作でも自主制作でも<b>「人のためのデザイン」</b>
        モットーに、ターゲット目線でデザインをしています。
        <br />
        大学では<b>映像制作</b>
        を専攻しており、この分野を中心に学んでいます。また、自主制作では
        <b>グラフィックデザイン</b>や<b>3DCG</b>
        にも取り組んでおり、これらのスキルを活かした作品制作を行っています。さらに、
        <b>プログラミング</b>
        にも少しですが挑戦しており、幅広い分野でのスキル向上を目指しています。
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
      <Card title="Profile" cardType="content-box4" />
    </div>
  );
};

export default Home;
