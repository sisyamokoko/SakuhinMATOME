import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HomePage from "./HomePage/Home";
import GraphicHome from "./Graphic/GraphicHome";
import CGHome from "./3DCG/CGHome";
import OtherHome from "./Other/OtherHome";
import Profile from "./Profile/ProfileHome";
import SoundArt from "./Other/SoundArt"; // SoundArtページをインポート
import Portsite from "./Other/Portsite"; // Portsiteページをインポート
import Sensya from "./Graphic/Sensya";
import GraphicData from "./Graphic/GraphicData"; // グラフィックの画像データ
import OtherData from "./Other/OtherData"; // その他の画像データ
import CGData from "./3DCG/CGData"; // その他の画像データ
import "./styles.scss";

// useScrollToTop フック
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ページ遷移時にトップにスクロール
    window.scrollTo(0, 0);
  }, [pathname]); // pathname が変わるたびに実行
};

// 画像プリロード用コンポーネント
const PreloadImages = () => {
  useEffect(() => {
    const preloadImages = () => {
      // GraphicData の画像をプリロード
      GraphicData.forEach((card) => {
        const img = new Image();
        img.src = card.image;
      });

      // OtherData の画像をプリロード
      OtherData.forEach((card) => {
        const img = new Image();
        img.src = card.image;
      });

      CGData.forEach((card) => {
        const img = new Image();
        img.src = card.image;
      });
    };

    preloadImages(); // 画像をプリロード
  }, []);

  return null; // UIには何も表示しない
};

const App = () => {
  return (
    <Router>
      <ScrollToTopHandler />
      <PreloadImages /> {/* プリロードコンポーネントを追加 */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graphic" element={<GraphicHome />} />
          <Route path="/3dcg" element={<CGHome />} />
          <Route path="/other" element={<OtherHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/soundart" element={<SoundArt />} />
          <Route path="/portsite" element={<Portsite />} />{" "}
          <Route path="/sensya" element={<Sensya />} />
          {/* 新しいルートを追加 */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

// useScrollToTopフックを呼び出す専用コンポーネント
const ScrollToTopHandler = () => {
  useScrollToTop(); // ページ遷移ごとにスクロール
  return null; // 何も表示しない
};

export default App;
