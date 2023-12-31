import React from "react";
import './index.css';
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes,Route } from "react-router-dom";
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    document.title = "My Portfolio"
  },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/project" element={<Project/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
      </Routes>
    </>
  );
}

export default App;
