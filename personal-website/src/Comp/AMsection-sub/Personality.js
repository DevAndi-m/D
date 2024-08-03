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
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
        </div>
    </div>
  )
}

export default Personality
