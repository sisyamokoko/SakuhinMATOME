import React from "react";
import "./Layout.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Tanaka Shoudai Portfolio</p>
        <div className="social-icons">
          <span className="material-icons">instagram</span>
          <span className="material-icons">twitter</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
