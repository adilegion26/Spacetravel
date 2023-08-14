import React from 'react'
import './Footerstyles.css'
import { FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>
                    <div>
                        <p>456 JP NAGAR</p>
                        <h4>Bengaluru,Karnataka</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/> 9993332231</h4>
                </div>
                <div className='email'>
                <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>TourSpace@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>We at Adi Travels want you to experience this once in a lifetime moment.Subscribe to our latest plans to know more!!</p>
              <div className='social'>
                    <FaFacebook  size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                    <FaTwitter  size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                    <FaLinkedin  size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer