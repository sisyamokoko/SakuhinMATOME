import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import GraphicHome from "./Graphic/GraphicHome";
import CardDetail from "./components/CardDetails"; // 大文字小文字に注意
import "./styles.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphic" element={<GraphicHome />} />
        <Route path="/graphic/:id" element={<CardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
