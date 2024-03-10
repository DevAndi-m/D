import React from 'react'
import './Comp-css/SkillSection.css';
import PlaceHolderImage from './images/logo192.png'

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('showedEntry');
        } else {
            entry.target.classList.remove('showedEntry');
        }
    });
});

const barObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('visibleBar');
        } else {
            entry.target.classList.remove('visibleBar');
        }
    });
});

// FIX THIS SHIT, IT WONT STOP THE ANIMMATION. IT WONT STOP

const hiddenElements = document.querySelectorAll('.skillEntry');
hiddenElements.forEach((el) => observer.observe(el))

const hiddenBar = document.querySelectorAll('.hiddenBar');
hiddenBar.forEach((el) => barObserver.observe(el))

function SkillEntry() {
  return (
    <div className='skillList'>
            <div className='skillEntry'>
                <img src={PlaceHolderImage}></img>
                <div className='skillInfo'>
                    <h2>React</h2>
                    <p>doiwajdipapdkpawkdpowakdpoawpodkpawpdapwkpdkawpdadddddddddddddddddddddo.</p>
                    <div className='skillStats'>
                        <div className='skillBar'><div className='hiddenBar'></div></div>
                        <p>Exellent</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SkillEntry
