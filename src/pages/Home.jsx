import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroImg from '../components/HeroImg.jsx'
import Footer from '../components/Footer.jsx'
import Work from '../components/Work.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home