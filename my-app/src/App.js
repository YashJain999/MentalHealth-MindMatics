import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
