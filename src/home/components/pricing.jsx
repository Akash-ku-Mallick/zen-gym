import React from 'react'


import './pricing.css'

import { OutlinedButton2 } from './common/buttons'
import { Icon } from '@iconify/react'

function Pricing() {
  return (
    <>
    <div className='section pricing'>
      <span className='miniTextPrimed'>Why Choose Us</span>
      <div>
        <span className='displayOutline'>FUEL YOUR</span>
        <span className='displaySolid'> AMBITION </span>
        
      </div>
      <div>
        <span className='displaySolid'>IGNITE YOUR </span>
        <span className='displayOutline'>PASSION</span>
      </div>
      <div className='wrapper'>
        {info.map((i)=>{
          return <Item2 key={i.id} icon={i.icon}/>
        })}
      </div>
    </div>
    <div className='section pricing'>
      <span className='miniTextPrimed'>Pricing</span>
      <div>
        <span className='displaySolid'>CHOOSE</span>
        <span className='displayOutline'> YOUR PERFECT </span>
        <span className='displaySolid'>PLAN</span>
      </div>
      <div className='wrapper'>
        {options.map((option) => {
          return <Item key={option.id} plan={option.name} price={option.price} features={option.features} desc={option.description} />
        })}
      </div>
    </div>
    </>
  )
}

export default Pricing

const Item = (item) => {
  return (
    <div className='price_box'>
      <span className='displaySolid' style={{fontSize: '40px'}}>
        {`${item.plan?item.price:''}`} <span style={{fontSize: '35px'}}>₹</span>
      </span>
      <span className='displaySolid' 
      style={{fontSize: '20px', textTransform: 'uppercase'}}>
        {`${item.plan?item.plan:''}`} package
      </span>
      {
        item.desc ? <span className='miniTextSimple desc'>{item.desc}</span>
        : <span className='miniTextSimple desc'>decription</span>
      }
      <OutlinedButton2 text='View More'/>
    </div>
  )
}

const Item2 = (i) => {
  return (
    <div className='price_box'>
      <div className='iconWraper'>
        {i.icon}
      </div>
      <span>Header</span>
      <span>Description</span>
    </div>
  )
}


const options = [
  {
    id: 1,
    name: 'daily',
    price: 49.00,
    discount: null,
    features: [ 'feture 1', 'feture 2', 'feture 3', 'feture 4' ],
    description: 'Take daily pass to access our gym on the days you wish to'
  },
  {
    id: 2,
    name: 'monthly',
    price: 149.00,
    discount: null,
    features: [ 'feture 1', 'feture 2', 'feture 3', 'feture 4' ],
    description: 'Monthly pass are the best sailers and can be perfect for your fitness journey'
  },
  /* {
    id: 3,
    name: 'quarterly',
    price: 399.00,
    discount: null,
    features: [ 'feture 1', 'feture 2', 'feture 3', 'feture 4' ],
    description: ''
  },
  */
  {
    id: 4,
    name: 'yearly',
    price: 1399.00,
    discount: null,
    features: [ 'feture 1', 'feture 2', 'feture 3', 'feture 4' ],
    description: 'Take a yearly pass if you prefer haedcore workout'
  }
]

const info = [
  {
    id: 1,
    icon: <Icon icon="mdi:gym" />,
    title: '',
    description: ''
  },
  {
    id: 2,
    icon: <Icon icon="solar:treadmill-round-bold" />,
    title: '',
    description: ''
  },
  {
    id: 3,
    icon: <Icon icon="mingcute:fitness-fill" />,
    title: '',
    description: ''
  },
  {
    id: 4,
    icon: <Icon icon="arcticons:home-workouts" />,
    title: '',
    description: ''
  }
]