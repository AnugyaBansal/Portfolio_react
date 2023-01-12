//App.js is the parent file of project thats why call/import all the file here like
//create routes here
import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom"; //import file and folder here
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
    {/* call routers here using react router Dom */}
    <Route exact path="/" element={<Home/>} />   {/* call router here this path is shown url with this name in search bar of page when we click on that page and for home use only / for part */}
    <Route path="/project" element={<Project/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    
    </>
  );
}

export default App;
