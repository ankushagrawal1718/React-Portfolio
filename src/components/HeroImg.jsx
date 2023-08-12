import "./HeroImgStyle.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
import ResumePdf from "../assets/Ankush_resume.pdf"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I am Ankush Agrawal</p>
            <h1>Software Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                {/* <Link to="https://drive.google.com/file/d/1dywNpsA3pKX3pwF2RlrN-4f2mw863UVA/view?usp=sharing" className="btn btn-light" target="_blank"> View Resume</Link> */}
                <a href={ResumePdf} className="btn btn-light" rel="noreferrer" target="_blank">View Resume</a>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;