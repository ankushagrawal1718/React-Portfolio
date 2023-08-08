import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ProjectBackground from '../components/ProjectBackground.jsx';
import Work from '../components/Work.jsx';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectBackground heading ="PROJECTS" text="Some of my recent Works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project