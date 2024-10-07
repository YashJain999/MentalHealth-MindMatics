import React from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from "./pages/ForgetPassword";
import Home from './pages/Home'
import Questionnaire from "./pages/Questionnnaire";

function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/questionnaire" element={<Questionnaire/>}/>
      </Routes>
    </div>
  );
}

export default App;
