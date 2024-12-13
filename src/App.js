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
import "./styles.scss";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ページ遷移時にトップにスクロール
    window.scrollTo(0, 0);
  }, [pathname]); // pathnameが変わるたびに実行
};

const App = () => {
  return (
    <Router>
      <ScrollToTopHandler />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graphic" element={<GraphicHome />} />
          <Route path="/3dcg" element={<CGHome />} />
          <Route path="/other" element={<OtherHome />} />
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
