import React from 'react'
import './AMcss/Personality.css';
import profile from '../images/profilepic.png';
import signature from '../images/sugnature.png';

function Personality() {
  return (
    <div className='persoMain'>
        <div className='persoMainContent'>
            <div className='imgSigHolder'>
                <div className='profilePictureHolder'>
                    <img className='profilePicture' src={profile}></img>
                </div>
                <img className='signature' src={signature}></img>
            </div>
            <div className='p1'>

            </div>
            <div className='p2'>

            </div>
        </div>
    </div>
  )
}

export default Personality
