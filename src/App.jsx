import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from "./pages/Banner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} /> {/* Rota para a página do Banner */}
      </Routes>
    </Router>
  );
}

export default App;

