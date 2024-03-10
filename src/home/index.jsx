import React from 'react'

import './styles.css'

import Hero from './components/hero'
import Footer from './components/footer'
import Pricing from './components/pricing'
import Features from './components/features'
import About from './components/about'

function Home() {
  return (
    <div className='mainContainer'>
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home