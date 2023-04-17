import React from 'react'
import Navbar from '../components/navbar'
import HeroimgAbout from '../components/HeroimgAbout'

import Footer from '../components/Footer'
import Aboucontent from '../components/Aboucontent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroimgAbout heading1 = "About" text1 = "jdfkghdfkj" />
      <Aboucontent />
      <Footer />
    </div>
  )
}

export default About;