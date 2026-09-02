import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Booking from '../components/Booking'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='text-black'>
      <Hero/>
      <About/>
      <Booking/>
      <FaqSection/>
      <Footer/>
    </div>
  )
}

export default Home
