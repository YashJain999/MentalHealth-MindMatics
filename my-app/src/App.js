import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import Login from './pages/Login';
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
