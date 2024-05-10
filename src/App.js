import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourLibrary from "./pages/YourLibrary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/YourLibrary" element={<YourLibrary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
