import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HomePage from "./HomePage/Home";
import GraphicHome from "./Graphic/GraphicHome";
import "./styles.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graphic" element={<GraphicHome />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
