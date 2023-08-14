import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import Footer from '../components/Footer'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>   
    <Navbar/>
    <Heroimage heading='CONTACT' text='Contact ADI Travels ' />
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact