import React from 'react'

import './features.css'
import Carousel from './carousel/index'

function Features() {
  return (
    <div className='section Features'>
      <span className='miniTextPrimed'>Our Featured</span>
      <div>
      <span className='displaySolid'>TRANSFORM </span><span className='displayOutline'>YOUR BODY</span>
      </div>
      <div>
      <span className='displayOutline'>TRANSFORM </span><span className='displaySolid'>YOUR LIFE</span>
      </div>
      <Carousel />
    </div>
  )
}

export default Features