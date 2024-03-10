import React from 'react'
import { motion } from "framer-motion"

import './hero.css'

import { FilledButton, OutlinedButton } from './common/buttons'

import heroImg from '../../assets/images/gym3.png'

function Hero() {
  return (
    <div className='section'>
      <div className='navigtionBar'>
        <nav>
          <a href="#" >Coaches</a>
          <a href="#">About Us</a>
          <a href='#'>Features</a>
          <a href='#'>Pricing</a>
        </nav>
        <FilledButton mr={5} mt={5} link={'https://zengym.netlify.app/'}  text={'Join Now'} />
      </div>
      <div className='context'>
        <div className='leftArea'>

          <div className='textArea'>
            <span className='miniTextPrimed'>
              Sweat Today, Shine Tomorrow
            </span>
            <span className='displaySolid'>
              STRONGER
            </span>
            <span className='displayOutline'>
              EVERY DAY
            </span>
            <span className='displaySolid'>
              FITTER
            </span>
            <span className='displayOutline'>
              FOREVER
            </span>
            <span className='miniTextSimple'>
              Some text quotes
            </span>
          </div>

            <div className='buttons_wrapper'>
              <FilledButton text={'Get Started'} link={'https://zengym.netlify.app/'} />
              <OutlinedButton text={'How it Works'} />
            </div>
          
        </div>

          <div className='heroImage'>
            <motion.img 
            initial={{opacity: 0}} 
            whileInView={{opacity: 1}} 
            transition={{ease: 'easeIn', duration: 0.5}}
            src={heroImg} alt='image' />
            <div className='heroShader front'/>
            <div className='heroShader inverted'/>
          </div>
       
      </div>

    </div>
  )
}

export default Hero