import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ProjectBackground from '../components/ProjectBackground.jsx'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ProjectBackground heading ="Contact" text="Let's connect with me"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact