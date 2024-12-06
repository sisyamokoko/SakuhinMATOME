import React from "react";
import "./Home.scss";

const Card = ({ title, cardType }) => {
  return (
    <div className={`content-box ${cardType ? cardType : ""}`}>
      <h2>{title}</h2>
      <p>a lonely trip.</p>
      <div className="photo-area"></div>
      <ul>
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
      <Card title="North" cardType="content-box" />
      <Card title="Vauxhall" cardType="content-box2" />
      <Card title="Eden" cardType="content-box3" />
      <Card title="Clifton" cardType="content-box4" />
    </div>
  );
};

export default App;
