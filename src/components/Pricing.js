import React from 'react'
import './Pricingstyles.css'
import { Link } from 'react-router-dom'
const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 Days -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>

            <div className='card'>
                <h3>- Suite -</h3>
                <span className='bar'></span>
                <p className='btc'>3 BTC</p>
                <p>- 5 Days -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>

            <div className='card'>
                <h3>- Excecutive -</h3>
                <span className='bar'></span>
                <p className='btc'>5 BTC</p>
                <p>- 7 Days -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing