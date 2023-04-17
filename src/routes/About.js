import React from 'react'
import Navbar from '../components/navbar'
import HeroimgAbout from '../components/HeroimgAbout'

import Footer from '../components/Footer'
import Aboucontent from '../components/Aboucontent'


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroimgAbout classname="AboutHead" heading1 = "About" text1 = "Welcome ! Here, you'll find a collection of my work and projects in various fields, ranging from design to programming to writing" />
      <Aboucontent />
      <Footer />
    </div>
  )
}

export default About;