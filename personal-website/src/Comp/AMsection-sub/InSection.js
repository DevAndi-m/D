import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from '../Header';
import Insights from './Insights'
import FooterReverse from '../FooterReverse';
import imgOne from '../images/Adobe images/IMG_one.png';
import imgTwo from '../images/Adobe images/IMG_two.png';
import imgThree from '../images/Adobe images/IMG_three.png';
import imgFour from '../images/Adobe images/IMG_four.png';
import imgGroup from '../images/Adobe images/Full_image.png';
import './AMcss/InSection.css';
import PeopleInsights from './PeopleInsights';

function InSection() {

    useEffect(() => {
        const timer = setTimeout(() => {
          document.querySelector('.inTitle').classList.add('visible');
        }, 500);
    
        return () => clearTimeout(timer);
      }, []);

      const alignCenter = { display: 'flex', alignItems: 'center' }
    return (
    <div>
        <Parallax pages={3.5}>
            <ParallaxLayer 
                offset={.1}
                speed={.2}>
                <h1 className='inTitle'>From the beautiful city of Prizren</h1>
            </ParallaxLayer>
            
            <ParallaxLayer
                speed={0.2}
                config={{ tension: 0, friction: 0 }}
                style={{
                    backgroundImage: `url(${imgOne})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <ParallaxLayer
                speed={0.6}
                config={{ tension: 0, friction: 0 }}
                style={{
                    backgroundImage: `url(${imgTwo})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <ParallaxLayer
                speed={1}
                config={{ tension: 0, friction: 0 }}
                style={{
                    backgroundImage: `url(${imgThree})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <ParallaxLayer
                offset={0.39}
                config={{ tension: 0, friction: 0 }}
                speed={1.4}
                style={{
                    backgroundImage: `url(${imgFour})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat'
                }} 
            />
            {/* Last */}
            <ParallaxLayer 
                className='nextContainer'
                offset={.999}
                factor={5}
                speed={1}
            >  
            <h1 className='insightsTitle'>About Andi...</h1>
            </ParallaxLayer>
            <ParallaxLayer 
                offset={1.28}
                config={{
                    tension: 170,
                    friction: 5,
                    mass: 1
                }}
                speed={50}
                style={{ ...alignCenter, justifyContent: 'flex-start' }}
                sticky={{ start: 1.2, end: 1.8}}
            > 
            <div className='card insightsImage'>
                <img src='https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE3MjEzNTQ5OTR8MA&ixlib=rb-4.0.3'></img>
            </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={1.1}
            >
            <Insights />
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={3}
                style={{ pointerEvents: 'auto' }}
                >
                <Header />
            </ParallaxLayer>
            <ParallaxLayer
                offset={3}
                speed={1}
                style={{ pointerEvents: 'auto' }}
            >
                <PeopleInsights />
            </ParallaxLayer>

            <ParallaxLayer
                offset={3.1}
                style={{ pointerEvents: 'auto' }}
                config={{
                    tension: 0,
                    friction: 5,
                    mass: 1
                }}
                >
                <FooterReverse />
            </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default InSection
