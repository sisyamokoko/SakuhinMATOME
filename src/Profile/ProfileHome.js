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
          <h4>
            2004/01/08 生まれ
          </h4>
          <p>
            　私は、デザインを学びたすぎて高専を自主退学し情報デザイン学科に入学した異例の経歴を持ちます。
            <br />
            　人のためを想い、独りよがりにならないデザインをすることをモットーに日々積極的にデザインの勉強に取り組んでいます！
            <br />
            　そのモットーを体現するための活動の一環としてＸ（旧Twitter）にて
            <b>楽曲のタイトルをデザインする活動</b>を行っています。
            <br />
            　それぞれの楽曲に合わせて様々なスタイルを試行錯誤しており、結果として多くの作曲者様に反応を頂いているため細々とした活動ですがやり甲斐を感じています。
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
              href="https://www.instagram.com/syamomomon/profilecard/?igsh=ZndjNm5vc3k2bXI3"
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
      {/* 新しいデザインソフトのボックス */}
      <div className="design-tools">
        <h2>Software Skills</h2>
        <div className="tools-grid">
          <img
            src="https://i.postimg.cc/FH9g7FMS/Ai.png"
            alt="Illustrator"
            className="tool-img"
          />
          <img
            src="https://i.postimg.cc/4N1pkkYx/ps.png"
            alt="Photoshop"
            className="tool-img"
          />
          <img
            src="https://i.postimg.cc/VsqCnQBW/AE.png"
            alt="AfterEffects"
            className="tool-img"
          />
          <img
            src="https://i.postimg.cc/65HTf97n/Pr.png"
            alt="PremierPro"
            className="tool-img"
          />
          <img
            src="https://i.postimg.cc/25nzMm5H/blender.png"
            alt="Blender"
            className="tool-img"
          />
          <img
            src="https://i.postimg.cc/hGcw4qrZ/maya.png"
            alt="Maya"
            className="tool-img"
          />
          <img
            src="https://i.postimg.cc/L41rVvnT/html.png"
            alt="html"
            className="tool-img"
          />
          <img
            src="https://i.postimg.cc/jj1FHJTm/react.png"
            alt="React"
            className="tool-img"
          />
        </div>
      </div>
      <div className="self-promotion">
        <h2>About Me</h2>
        <p>
          　私は
          <strong className="highlight">
            「困難に対して結果・成果を出す力」
          </strong>
          と
          <strong className="highlight">
            「決まった枠組みに囚われない思考力」
          </strong>
          を持って、課題解決に向けて全力を出すことができる人間です。
          <span className="spaced">
            　高専で機械工学を学んでいた際、自分が本当に学びたい分野がデザインであることに気付き、進路変更を決意しました。そのため、まずは学びたい大学と分野を明確にし、1か月かけて親を説得しました。
          </span>
          <span className="spaced">
            そして半年という限られた時間の中で、高専では学んでいなかった「数学」や「国語」の一部内容、加えて「地理B」「歴史B」「生物」を一から学び直し、高等学校卒業程度認定試験を取得し、無事大学に合格することが出来ました。
          </span>
          <span className="spaced">
            　デザイン分野への転向後は、自身が創り出したい作品を生み出すために必要な知識を学べることの喜びと、それに伴う自信を得ました。
          </span>
          <span className="spaced">
            　また、現在の進路に満足せず、自分が本当に進みたい道に向かって進路変更するという今までの常識の枠組みを壊すような行動を経て、
            <strong className="highlight">
              「決まった枠組みに囚われない思考力」
            </strong>
            や、それを用いて困難を解決するスキルを得ました。
          </span>
          <span className="spaced">
            　今後のキャリアを築く上でも、私はこの
            <strong className="highlight">
              「困難に対して結果・成果を出す力」
            </strong>
            と
            <strong className="highlight">
              「決まった枠組みに囚われない思考力」
            </strong>
            を活かし、クライアントの課題を解決できる提案をしていきたいと考えています。
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
