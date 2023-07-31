import React, { useRef, useState } from 'react'
import redbus from '../assets/bigredbus.png'



function Home() {
    
    return (
        <div style={{textAlign: 'center'}}>
            <div className='home-image'>
                <div className='book-head'>
                    <h1>BOOK YOUR BUSES WITH REDBUS</h1>
                </div>
                <img className='busimg' src={redbus} />
            </div>
        </div>
    )
}


export default Home