import React, { useEffect, useState } from 'react';
import './Comp-css/FinalSection.css';
import { switchStateOne, switchStateTwo, switchStateThree } from './MyHooks/SwitchStateFunctions';
import NyanCat from './images/NyanCat.gif';

export default function FinalisingSection() {

  const arrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
    </svg>
  );

  const [pageOneStatus, setPageOneStatus] = useState(0);
  const [pageTwoStatus, setPageTwoStatus] = useState(0);
  const [pageThreeStatus, setPageThreeStatus] = useState(0);

  useEffect(() => {
    const el = document.querySelector('.selOneBox');
    if (pageOneStatus === 1) {
      el.classList.add('selOneBoxActive');
    } else {
      el.classList.remove('selOneBoxActive');
    }
  }, [pageOneStatus]);

  useEffect(() => {
    const el = document.querySelector('.selTwoBox');
    if (pageTwoStatus === 1) {
      el.classList.add('selTwoBoxActive');
    } else {
      el.classList.remove('selTwoBoxActive');
    }
  }, [pageTwoStatus]);

  useEffect(() => {
    const el = document.querySelector('.selThreeBox');
    if (pageThreeStatus === 1) {
      el.classList.add('selThreeBoxActive');
    } else {
      el.classList.remove('selThreeBoxActive');
    }
  }, [pageThreeStatus]);

  return (
    <div className='fsParent'>
      <h1 className='fsTitle'>Also check out:</h1>
        <div className='partsContainer'>
          <div className='imagePart'>
            <img src={NyanCat}></img>
          </div>
          <div className='selectorPart'>

            <div className='selOneAll'>
              <div className='selBtn selectorOne' onClick={() => switchStateOne(pageOneStatus, setPageOneStatus, setPageTwoStatus, setPageThreeStatus)}>
                <p className='selTitle'>About me</p>
                <p className={`arrowOne ${pageOneStatus === 1 ? 'rotate180' : ''}`}>{arrow}</p>
              </div>
              <div className='selOneBox'>
                <p className='selOneTxt'>If you haven't already, I highly recommend checking out my "About Me" page. It's a glimpse into who I am beyond the surface. There, you'll find more than just a basic bio. It's a deeper dive into my world and about the things that shape me as an individual.</p>
                <button className='selectorBtn selOneBtn'>More About Me</button>
              </div>
            </div>
            <div className='selTwoAll'>
              <div className='selBtn selectorTwo' onClick={() => switchStateTwo(pageTwoStatus, setPageOneStatus, setPageTwoStatus, setPageThreeStatus)}>
                <p className='selTitle'>My Work</p>
                <p className={`arrowTwo ${pageTwoStatus === 1 ? 'rotate180' : ''}`}>{arrow}</p>
              </div>
              <div className='selTwoBox'>
                <p className='selOneTxt'>If you haven't already, I highly recommend checking out my "About Me" page. It's a glimpse into who I am beyond the surface. There, you'll find more than just a basic bio. It's a deeper dive into my world and about the things that shape me as an individual.</p>
                <button className='selectorBtn selOneBtn'>More About Me</button>
              </div>
            </div>
            <div className='selThreeAll'>
              <div className='selBtn selectorThree' onClick={() => switchStateThree(pageThreeStatus, setPageOneStatus, setPageTwoStatus, setPageThreeStatus)}>
                <p className='selTitle'>Documentation & Contact</p>
                <p className={`arrowThree ${pageThreeStatus === 1 ? 'rotate180' : ''}`}>{arrow}</p>
              </div>
              <div className='selThreeBox'>
                <p className='selOneTxt'>If you haven't already, I highly recommend checking out my "About Me" page. It's a glimpse into who I am beyond the surface. There, you'll find more than just a basic bio. It's a deeper dive into my world and about the things that shape me as an individual.</p>
                <button className='selectorBtn selOneBtn'>More About Me</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
