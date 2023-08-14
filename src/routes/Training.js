import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import Footer from '../components/Footer'
import TrainingSection from '../components/Training'
const Training = () => {
  return (
    <div>  
    <Navbar/>
    <Heroimage heading='TRAINING' text='Pre-Flight & In-Flight Training.'/>
    <TrainingSection/>
    <Footer/>
    </div>
  )
}

export default Training