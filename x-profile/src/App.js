import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import NavBar from "./components/NavBar/NavBar";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <div style={{ padding: "20px" }}>
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
