import React, { useEffect } from 'react'
import './Banner.css'

function Banner() {
  useEffect(() => {
   
  }, [])
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
