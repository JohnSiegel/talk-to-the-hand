import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import VPlayer from "./Player";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/player" element={<VPlayer />} />
      </Routes>
    </div>
  </BrowserRouter>
);
