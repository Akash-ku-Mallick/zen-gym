import React, { useState } from 'react'

import './style.css'
import { motion } from 'framer-motion';

const MINIMUM_WIDTH = 240;


function Carousel() {
    const [windowWidth, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })


  return (
    <div className='carousel'>
        <div className='carousel_wrapper'>
            {data.map((item)=>{
                return (
                    <Object key={item.id} name={item.name}/>
                )
            })}
        </div>
    </div>
  )
}

export default Carousel

const Object = (item) => {
    return (
    <div className='box'>
        <img src='https://picsum.photos/200/300' />
        <span className='vis'>{item.name}</span>
        <span className='invi'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </span>
    </div>);
}


const data = [
    {
        id: 1,
        name: 'Gym',
        image: './assets/gym1.png',
        description: 'name',
    },
    {
        id: 2,
        name: 'Yoga',
        image: 'images',
        description: 'name',
    },
    {
        id: 3,
        name: 'Zumba',
        image: 'images',
        description: 'name',
    },
    {
        id: 4,
        name: 'name',
        image: 'images',
        description: 'name',
    },
    {
        id: 5,
        name: 'name',
        image: 'images',
        description: 'name',
    },
    {
        id: 6,
        name: 'name',
        image: 'images',
        description: 'name',
    }
]