import React, { useState } from 'react'
import { Icon } from '@iconify/react';

import './about.css'

import poster from '../../assets/images/gym4.jpg'

function About() {
  const [playback, setPlayback] = useState(0);
  // 0 => loading, 1 => paused, 2 => playing, 3 => replay

  const handleClick = () => {
    
  }

  const videoUrl = "https://www.youtube-nocookie.com/embed/0eQEykstZOc?si=vCnyqLFMXumq6L4G&amp;"
  return (
    <div className='section about'>
      <div className='informations'>
        <div>
          <span className='miniTextPrimed'>Who We Are</span>
          <div>
            <span className='displayOutline'>ELEVATE YOUR </span>
            <span className='displaySolid'>FITNESS</span>
          </div>
          <span className='displaySolid'>JOURNEY WITH US</span>
        </div>
        <div>
          <span className='miniTextSimple rightText'>Right text</span>
        </div>
      </div>
      <div className='video_wraper'>
        <video src={videoUrl} 
        poster={poster} 
        className='video'  />
        <button className='playbtn'>
          {
            playback == 0 ? <Icon icon="line-md:loading-loop" />
            : playback == 1 ? <Icon icon="solar:play-bold" />
            : playback == 2 ? <Icon icon="carbon:pause-filled" />
            : <Icon icon="material-symbols:replay-rounded" />
          }
        </button>
      </div>
    </div>
  )
}

export default About