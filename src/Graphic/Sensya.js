import React from "react";
import "./GraphicContents.scss";

const Sensya = () => {
  return (
    <div className="graphic-container">
      {/* 作品紹介ページのヘッダー */}
      <header className="graphic-header">
        <h1>洗車機ラッピングデザイン</h1>
        <p>洗車機前面のラッピングデザインをする産学連携プロジェクト</p>
      </header>

      {/* 作品のメインコンテンツ */}
      <div className="graphic-content">
        {/* 作品の画像 */}
        <div className="graphic-picture">
          <img
            src="https://i.postimg.cc/L8kM2GXC/sensya-Eraba.jpg" // ダミー画像
            alt="Sensya Graphic"
            className="graphic-img"
          />
        </div>

        {/* 作品の詳細情報 */}
        <div className="graphic-details">
          <h3>概要</h3>
          <p>
            タケウチビユーテー株式会社様との協力で行われた産学連携プロジェクト。
            <br />
            今までに無い、新しい洗車機のラッピングデザインを提案して欲しいという課題。
            <br />
            「シンプル」「スタイリッシュ」なデザインという大雑把な指定の下、タケウチビユーテー様の欲しいデザインを掘り下げていった。
          </p>
          <h2>使用ツール</h2>
          <div className="tools-icons">
            <div className="tool-icon">
              <img
                src="https://i.postimg.cc/FH9g7FMS/Ai.png" // Adobe Illustrator の画像
                alt="Adobe Illustrator"
                className="tool-img"
              />
            </div>
          </div>
          <h2>期間</h2>
          <p>2024.02 ~ 2025.3に終了予定（約1年間）</p>
          <h2>担当</h2>
          <p>コンセプト立案・プレゼン資料作成・洗車機最終デザイン作成</p>
          <h2>種別</h2>
          <p>産学連携</p>
        </div>
      </div>

      {/* 作品のこだわり */}
      <div className="graphic-details">
        <h2>コンセプト</h2>
        <p>
          <b>風景に溶け込まない洗車機デザイン</b>
          <br />
          様々な人へのインタビューやタケウチビユーテー様のフィードバックなどを受けて、「風景に溶け込まないデザイン」をコンセプトとして、そこに+αのキーワードを追加することで様々なデザイン案を考案。
        </p>
        <h2>インタビュー・コンセプトプレゼン</h2>
        <div className="graphic-content">
          <div className="graphic-picture">
            <img
              src="https://i.postimg.cc/XvFQyBmQ/konseputopure.jpg" // ダミー画像
              alt="こだわり１"
              className="graphic-img"
            />
          </div>
          <div className="graphic-details">
            <p>
              ・洗車機を利用する人たちに洗車機を利用するタイミングや理由など様々なインタビューをしました。
              <span className="spaced">
                ・スタッフ洗車機を利用して洗車をするスタッフの方々にもインタビューをして、洗車機に対する思いを聞きました。
              </span>
              <span className="spaced">
                ・それらの情報から、洗車機の問題点として「色が単色や２色の物が多く、ガソリンスタンドの壁に溶け込んでしまう」というものを得ました。
              </span>
              <span className="spaced">
                ・スタッフの方々の年齢層のデータや「操作盤の周りは静かな方が良い」という意見を頂くことができ、これらの情報から作成したコンセプトを企業の方々にプレゼンしました。
              </span>
            </p>
          </div>
        </div>

        <h2>完成した洗車機デザイン案</h2>
        <div className="graphic-content">
          <div className="graphic-picture">
            <img
              src="https://i.postimg.cc/FFpz49G6/colorbari.jpg" // ダミー画像
              alt="完成した洗車機デザイン案"
              className="graphic-img"
            />
          </div>
          <div className="graphic-details">
            <p>
              ・決定したコンセプトである「風景に溶け込まない洗車機デザイン」をもとに、３案のデザインを作成しました。
              <span className="spaced">
                ・３案それぞれはコンセプトに沿いながら、+αのキーワードを追加することで違いを持たせています。
              </span>
              <span className="spaced">
                ・また、それぞれの案にカラーバリエーションを６案用意することで、クライアントの理想に近いものを選んでもらえる形としました。
              </span>
            </p>
          </div>
        </div>
        <h2>実寸台の洗車機を作成</h2>
        <div className="graphic-content">
          <div className="graphic-picture">
            <img
              src="https://i.postimg.cc/qMYCPJvT/IMG-2078.jpg" // ダミー画像
              alt="実寸台"
              className="graphic-img"
            />
          </div>
          <div className="graphic-details">
            <p>
              ・全18パターンから選ばれた２パターンを実寸台にしてクライアントに確認してもらい、最終的な決定の参考にしてもらいました。
            </p>
          </div>
        </div>
      </div>

      <div className="graphic-details">
        <h2>選ばれたデザイン案</h2>
        <div className="graphic-picture-eraba">
          <img
            src="https://i.postimg.cc/1X6ChC10/Kan.jpg" // ダミー画像
            alt="選ばれ"
            className="graphic-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Sensya;
