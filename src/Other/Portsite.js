import React from "react";
import "./OtherContents.scss";

const Portsite = () => {
  return (
    <div className="other-container">
      {/* 作品紹介ページのヘッダー */}
      <header className="other-header">
        <h1>Myポートフォリオサイト</h1>
        <p>ポートフォリオサイトを作成する大学課題</p>
      </header>

      {/* 作品のメインコンテンツ */}
      <div className="other-content">
        {/* 作品の画像 */}
        <div className="other-picture">
          <img
            src="https://i.postimg.cc/V6dGHYRp/foliosamune.jpg" // ダミー画像
            alt="Site"
            className="other-img"
          />
        </div>

        {/* 作品の詳細情報 */}
        <div className="other-details">
          <h3>概要</h3>
          <p>ポートフォリオサイトをHTML+CSSで作成する個人制作課題。</p>
          <h2>使用ツール</h2>
          <div className="tools-icons">
            <div className="tool-icon">
              <img
                src="https://i.postimg.cc/PqSynPrK/vscode-256.png" // 画像のパスを指定
                alt="VScode"
                className="tool-img"
              />
            </div>
            <div className="tool-icon">
              <img
                src="https://i.postimg.cc/FH9g7FMS/Ai.png" // 画像のパスを指定
                alt="Adobe Illustrator"
                className="tool-img"
              />
            </div>
            <div className="tool-icon">
              <img
                src="https://i.postimg.cc/1zBm9KDw/figgma.png" // 画像のパスを指定
                alt="Figma"
                className="tool-img"
              />
            </div>
          </div>
          <h2>期間</h2>
          <p>2023.11 ~ 2023.2（約３ヶ月）</p>
          <h2>担当</h2>
          <p>個人制作</p>
          <h2>種別</h2>
          <p>大学課題</p>
        </div>
      </div>

      {/* 課題とコンセプト */}
      <div className="other-details">
        <h2>課題</h2>
        <h3>ポートフォリオサイトをHTML+CSSで作成する</h3>

        <h2>コンセプト</h2>
        <p>
          <b>作品が１番目立つWebサイト</b>
          <br />
          自分の作品を１番見てほしいため、作品が大きく目立つようなシンプルなつくりにした。
          また、シンプルながら自身の好きなデザイン様式などもサイト自体に埋め込むなどのこだわりもある。
        </p>
      </div>
      <div className="other-details">
        <h2>こだわり１</h2>
        <div className="other-content">
          <div className="other-picture">
            <img
              src="https://i.postimg.cc/TPWDP1RT/folioK1.jpg"
              alt="こだわり１"
              className="other-img"
            />
          </div>

          <div className="other-details">
            <h4>
              ・全体的にシンプルで落ち着いたデザインにしている。
              <span className="spaced">
                ・全体を通して大好きなニューモーフィズムデザインを採用しており、ボタンを押した感を感じることが出来るサイトデザインとしている。
              </span>
            </h4>
          </div>
        </div>

        {/* 改善策のテキストと新しい画像 */}
        <h2>こだわり２</h2>
        <div className="other-content">
          <div className="other-picture">
            <img
              src="https://i.postimg.cc/J4G6Q3xx/folioK2.jpg" // 別の画像を指定
              alt="こだわり２"
              className="other-img"
            />
          </div>

          <div className="other-details">
            <h4>
              ・サイト上のボタンを押すことで見たいカテゴリにすぐ遷移出来るようにしている。
              <span className="spaced">
                ・また、一番上にも戻りやすいようにTOPボタンを配置している。
              </span>
              <span className="spaced">
                ・全ての遷移ボタン共通で、押したあと一瞬で遷移するのではなく、アニメーションで遷移するようにしている。
              </span>
            </h4>
          </div>
        </div>

        <h2>こだわり３</h2>
        <div className="other-content">
          <div className="other-picture">
            <img
              src="https://i.postimg.cc/t4m2nsWf/ikomiki.png" // 別の画像を指定
              alt="こだわり３"
              className="other-img"
            />
          </div>

          <div className="other-details">
            <h4>
              ・作品をクリックすることでその作品がポップアップされ、作品のタイトルと簡易的な説明を確認することが出来る。
              <span className="spaced">
                ・映像作品はクリックすることで、映像を作成することが出来る。
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="other-details">
        <h2>完成したサイト</h2>
        <a
          href="https://portfolio2-three-sigma.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="link-button">ポートフォリオサイトを見る</button>
        </a>
      </div>
    </div>
  );
};

export default Portsite;
