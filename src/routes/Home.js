//type rafce for format of react function it will get filename also
import React from 'react'
import Navbar from '../components/Navbar' 
import HeroImage from '../components/HeroImage'
import Work from '../components/Work'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>      {/* call  imported Navbar here */}
        <HeroImage/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home