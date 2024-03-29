import React from "react";
// import { BrowserRouter as  Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resources from "./pages/Resources";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/resources" element={<Resources />} />
    </Routes> 
  );
}

export default App;