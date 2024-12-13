import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>My Profile</h1>
      </header>
      <div className="profile-content">
        <div className="profile-picture">
          <img
            src="https://i.postimg.cc/tTfw7hXc/ABC.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
        <div className="profile-details">
          <h2>田中翔大</h2>
          <h3>
            大同大学情報学部情報デザイン学科
            <br />
            メディアデザイン専攻
          </h3>
          <p>
            Hello! I am a web developer passionate about creating beautiful and
            functional websites. Welcome to my portfolio!
          </p>
          {/* ソーシャルリンクをここに配置 */}
          <div className="social-links">
            <a
              href="https://x.com/cqramail_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
