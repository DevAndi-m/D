import React from 'react'
import './Comp-css/SkillSection.css';
import PlaceHolderImage from './images/logo192.png'

function SkillSection() {
  return (
    <div className='skillsection'>
        <h1>My Skills & Experience</h1>
        <div className='skillList'>
            <div className='skillEntry'>
                <img src={PlaceHolderImage}></img>
                <div className='skillInfo'>
                    <h2>React</h2>
                    <p>doiwajdipapdkpawkdpowakdpoawpodkpawpdapwkpdkawpdadddddddddddddddddddddo.</p>
                    <div className='skillStats'>
                        <div className='skillBar'><div></div></div>
                        <p>Exellent</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillSection
