// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TopologicalSuperconductors from "./pages/TopologicalSuperconductors";
import SmellsLikeScience from "./pages/SmellsLikeScience";
import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Individual blog post routes */}
          <Route
            path="/topologicalsuperconductors"
            element={<TopologicalSuperconductors />}
          />
          <Route
            path="/smellslikescience"
            element={<SmellsLikeScience />}
          />
        </Routes>
      </main>
      {/* You can create and add a <Footer /> component here too */}
    </div>
  );
}

export default App;
