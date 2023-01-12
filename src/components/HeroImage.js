import "./HeroImageStyles.css";
import React from 'react'
import IntroImage from "../assets/img7.avif"
import { Link } from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImage} alt="IntroImage"/>
        </div>
        <div className="content">
            <p>HI, I'M ANUGYA BANSAL.</p>
            <h1>MERN Stack Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage