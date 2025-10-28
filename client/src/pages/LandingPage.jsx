import React from 'react'
import Navbar from "../components/layout/Navbar"; 
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonial from '../components/landing/Testimonial';

const LandingPage = () => {
  return (
    <div className='mb-[100vh]'>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
    </div>
  )
}

export default LandingPage