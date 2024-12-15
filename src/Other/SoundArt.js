import React from "react";
import "./OtherContents.scss";

const SoundArt = () => {
  return (
    <div className="other-container">
      {/* 作品紹介ページのヘッダー */}
      <header className="other-header">
        <h1>サウンド・アートコンサート</h1>
        <p>大同大学イベントサイトのデザインリメイク課題</p>
      </header>

      {/* 作品のメインコンテンツ */}
      <div className="other-content">
        {/* 作品の画像 */}
        <div className="other-picture">
          <img
            src="https://i.postimg.cc/Bn1YbLTv/soundartpage.jpg" // ダミー画像
            alt="Sound Art Event"
            className="other-img"
          />
        </div>

        {/* 作品の詳細情報 */}
        <div className="other-details">
          <h3>概要</h3>
          <p>
            大同大学情報デザイン学科と建築学科の学生が一丸となって開くイベント「サウンド・アートコンサート」の公式Webサイトをリメイクする個人制作課題。
          </p>
          <h2>使用ツール</h2>
          <div className="tools-icons">
            <div className="tool-icon">
              <img
                src="https://i.postimg.cc/FH9g7FMS/Ai.png" // 画像のパスを指定
                alt="Adobe Illustrator"
                className="tool-img"
              />
            </div>
            <div className="tool-icon">
              <img
                src="https://i.postimg.cc/4N1pkkYx/ps.png" // 画像のパスを指定
                alt="Adobe Photoshop"
                className="tool-img"
              />
            </div>
          </div>
          <h2>期間</h2>
          <p>2023年9月 ～ 2023年11月（約2ヶ月）</p>
          <h2>担当</h2>
          <p>個人制作</p>
          <h2>種別</h2>
          <p>大学課題</p>
        </div>
      </div>

      {/* 課題とコンセプト */}
      <div className="other-details">
        <h2>課題</h2>
        <h2>
          分かりにくく、シンプルすぎるサイトを見て楽しめて見やすいサイトにリメイクする
        </h2>

        <h2>コンセプト</h2>
        <p>
          <b>学生らしさ</b>
          を表現したWebサイトデザインを目指しました。
          <br />
          グラフィック・プロダクト・サウンド・建築といった様々な分野を専攻する学生の活発さをモチーフに、
          <b>カラフルでポップなサイトデザイン</b>を考案し、制作しました。
        </p>
      </div>

      {/* 課題の改善点と解決策 */}
      {/* ここがダメを洗い出す */}
      {/* ここがダメを洗い出す */}
      <div className="other-details">
        <h2>ここがダメを洗い出す</h2>
        <p>
          始めにリメイク前のサイト（
          <a
            href="https://x4design-sac5.tumblr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://x4design-sac5.tumblr.com
          </a>
          ）を調査し、以下の問題点洗い出しました。
        </p>

        {/* 最初の画像と問題点のテキスト */}
        <h2>問題点</h2>
        <div className="other-content">
          <div className="other-picture">
            <img
              src="https://i.postimg.cc/26D2HhHK/sound-Mondai.jpg"
              alt="Sound Art Event"
              className="other-img"
            />
          </div>

          <div className="other-details">
            <h4>
              ・文字に強弱がなく、優先度が分かりにくい
              <span className="spaced">・全体的に文字が小さい</span>
              <span className="spaced">
                ・ハイパーリンクが目立たないデザイン
              </span>
              <span className="spaced">・地図が細長すぎる</span>
            </h4>
          </div>
        </div>

        {/* 改善策のテキストと新しい画像 */}
        <h2>改善後</h2>
        <div className="other-content">
          <div className="other-picture">
            <img
              src="https://i.postimg.cc/Bn1YbLTv/soundartpage.jpg" // 別の画像を指定
              alt="改善策"
              className="other-img"
            />
          </div>

          <div className="other-details">
            <h4>
              ・文字に強弱をつけ、重要な情報を強調
              <span className="spaced">
                ・スマートフォン・PC別にデザインを変更
              </span>
              <span className="spaced">
                ・ハイパーリンクをボタン形式に変更し、押したくなるデザインに
              </span>
              <span className="spaced">
                ・専攻ごとの開催期間を別途記載し、内容の確認をしやすく
              </span>
            </h4>
          </div>
        </div>
      </div>

      {/* イベントらしさのデザイン */}
      <div className="other-details">
        <h2>イベントらしさのデザイン</h2>
        <p>
          様々な分野を専攻する学生の活発さをモチーフに、カラフルな背景を使用して、学生らしさを表現しました。複数の専攻が協力する様子はアメーバを配置することで表現しています。
        </p>
        <div className="other-picture-yoko">
          <img
            src="https://i.postimg.cc/25XdLtMm/soundkodawari.jpg" // 別の画像を指定
            alt="こだわり"
            className="other-img"
          />
        </div>
      </div>

      {/* 完成したサイトのイメージ */}
      <div className="other-details">
        <h2>完成したサイト</h2>
        <div className="image-row">
          {" "}
          {/* クラス名変更 */}
          <div className="img-box">
            <h2>スマートフォン用</h2>
            <img
              src="https://i.postimg.cc/4xvHT0sw/sumaho.png" // ダミー画像
              alt="スマートフォン用サイト"
            />
          </div>
          <div className="img-box">
            <h2>PC用</h2>
            <img
              src="https://i.postimg.cc/05c8B8f2/D22073-1.png" // ダミー画像
              alt="PC用サイト"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundArt;
