import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ProjectBackground from '../components/ProjectBackground.jsx'
import AboutContent from '../components/AboutContent.jsx'
const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjectBackground heading ="About" text="I am software and web developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About