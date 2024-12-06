import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

function Home() {
  return (
    <div className="home-page">
      <h1>ホームページ</h1>
      <p>こちらは簡易的なホームページです。</p>
      <Link to="/graphic" className="link-button">
        グラフィックページへ
      </Link>
    </div>
  );
}

export default Home;
