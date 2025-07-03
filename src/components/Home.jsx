import React from 'react'
import Products from './Products'
import ContactUs from './ContactUs';
import Hero from './Hero';
import Featured from './Featured';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Products />
      <Testimonials/>
      <ContactUs />
    </div>
  )
}

export default Home