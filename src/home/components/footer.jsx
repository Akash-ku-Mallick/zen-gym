import React from 'react'

import './footer.css'

import { FilledButton2 } from './common/buttons'
import { Icon } from '@iconify/react'

function Footer() {
  return (
    <div className='section footer'>
      <div>
        <span className='miniTextSimple'>Our Community</span>
      </div>
      <div className='input_box'>
        <span className='displaySolid'>JOIN OUR COMMUNITY TODAY</span>
        <span className='miniTextSimple'>
          Where fitness meets 
        </span>
        <div className='input_wraper'>
          <input type="text" placeholder='Enter Your Email'/>
          <FilledButton2 text="Get Started" />
        </div>
      </div>
      <div className='reff_wraper'>
        <div className='content_wraper'>
          <div>logo</div>
          <div className='icon_wraper'>
            <Icon icon="ic:round-facebook" />
            <Icon icon="entypo-social:instagram-with-circle" />
            <Icon icon="ic:twotone-telegram" />
          </div>
        </div>
        <div className='content_wraper'>
          <span>Quick Links</span>
          <div className='links_wraper'>
            <a>Coaches</a>
            <a>About</a>
            <a>Pricing</a>
          </div>
        </div>
        <div className='content_wraper'>
          <span>Terms & Conditions</span>
          <a>Privacy Policy</a>
        </div>
      </div>
        <span className='rights_text'>
          Copyright &copy; all rights reserved
        </span>
    </div>
  )
}

export default Footer

