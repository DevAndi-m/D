import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import useReveal from '../MyHooks/useReveal';
import Header from '../Header';
import imgOne from '../images/Adobe images/IMG_one.png';
import imgTwo from '../images/Adobe images/IMG_two.png';
import imgThree from '../images/Adobe images/IMG_three.png';
import imgFour from '../images/Adobe images/IMG_four.png';
import imgGroup from '../images/Adobe images/Full_image.png';
import Education from './Education';
import './AMcss/InSection.css';

function InSection() {

    useReveal('.inTitle', 'inTitleVisible');

    useEffect(() => {
        const timer = setTimeout(() => {
          document.querySelector('.inTitle').classList.add('visible');
        }, 500);
    
        return () => clearTimeout(timer);
      }, []);

  return (
    <div>
        <Parallax pages={2}>
            <ParallaxLayer 
                offset={.1}
                speed={.01}>
                <h1 className='inTitle'>Born in Prizren</h1>
            </ParallaxLayer>
            <ParallaxLayer
            speed={0.2}
            config={{ tension: 100, friction: 0 }}
            style={{
                backgroundImage: `url(${imgOne})`,
                backgroundSize: 'cover', 
            }}
    
            />
            <ParallaxLayer
            speed={0.6}
            config={{ tension: 100, friction: 0 }}
            style={{
                backgroundImage: `url(${imgTwo})`,
                backgroundSize: 'cover', 
            }}
            />
            <ParallaxLayer
            speed={1}
            config={{ tension: 100, friction: 0 }}
            style={{
                backgroundImage: `url(${imgThree})`,
                backgroundSize: 'cover', 
            }}
            />
            <ParallaxLayer
            offset={0.35}
            config={{ tension: 100, friction: 0 }}
            speed={1.8}
            style={{
                backgroundImage: `url(${imgFour})`,
                backgroundSize: 'cover', 
            }} 
            />

            {/* Last */}
            <ParallaxLayer 
            className='nextContainer'
            offset={.999}
            config={{ tension: 100, friction: 0 }}
            speed={1.2}
            factor={2}
            style={{
                width: '100%',
                height: '250vh',
                backgroundColor: '#0b241b', 
            }} 
            >
            <Education />    
            </ParallaxLayer>  

            <ParallaxLayer
                offset={0}
                speed={3}
                config={{ tension: 100, friction: 0 }}
                style={{ pointerEvents: 'auto' }}
                >
                <Header />
            </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default InSection
