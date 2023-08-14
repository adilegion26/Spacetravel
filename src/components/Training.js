import React from 'react'
import './Trainingstyles.css'
import Astronaut from '../assets/astronaut.jpg'
import Satellite from '../assets/satellite.jpg'
import { Link } from 'react-router-dom'

const Training = () => {
  return (
    <div className='training'>
     <div className='left'>
        <h1>Training</h1>
        <p>Thorough training is a necessity when travelling to space .We Offer top notch training </p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
     </div>
    <div className='right'>
        <div className='img-container'>
            <div className='image-stack top'>
                <img src={Astronaut} className='img' alt=''/>
            </div>
            <div className='image-stack bottom'>
                <img src={Satellite} className='img' alt=''/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Training