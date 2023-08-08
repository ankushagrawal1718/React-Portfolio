import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import ReactImg1 from "../assets/ReactImg1.jpg"
import ReactImg2 from "../assets/ReactImg2.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>I am a software developer</h1>
            <p>I'm Ankush Agrawal.I have completed B.Tech from National Institute of Technology, Kurukshetra.I'm a passionate software, fullstack developer, having experience in building Web applications with JavaScript, NodeJS, ExpressJS, MongoDB ReactJS and some other cool libraries and frameworks.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={ReactImg1} alt="ReactImage" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={ReactImg2} alt="ReactImage" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent