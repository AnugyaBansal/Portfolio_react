//type rafce for format

import "./NavbarStyles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"  // category name is Fa and icons name is Bars
const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>  {/* use header here this is a parent class*/}
        <Link to="/">  {/* link is use to when we click on name of page then it will redirected to that page ex- portfolio name */}
        <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li>
            <Link to="/">Home</Link>      {/* link is used to create a path */}
            </li> 
            <li>
            <Link to="/project">Project</Link>
            </li> 
            <li>
            <Link to="/about">About</Link>
            </li> 
            <li>
            <Link to="/contact">Contact</Link>
            </li> 
        </ul>    
        <div className="hamburger" onClick={handleClick}>  {/* hamburger is the icon */}
          {click ? (
          <FaTimes size={20} style={{color: "#fff"}}/>
          ) : (
          <FaBars size={20} style={{color: "#fff"}}/>
          )}
        </div>
    </div>
  )
}

export default Navbar