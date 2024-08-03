import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BackpackIcon, PersonIcon, CommentIcon, PersonalInfoIcon, ScrollDown } from './AboutIcons';
import Header from '../Header';
import Footer from '../Footer';
import imgOne from '../images/Adobe images/IMG_one.png';
import imgTwo from '../images/Adobe images/IMG_two.png';
import imgThree from '../images/Adobe images/IMG_three.png';
import imgFour from '../images/Adobe images/IMG_four.png';
import imgReel from '../images/imgReel.png';
import './AMcss/InSection.css';
import Education from './Education';
import Personality from './Personality';
import PeopleInsights from './PeopleInsights';

function InSection() {
    const parallaxRef = useRef(null);
    const iconsize = 25

    useEffect(() => {
        const timer = setTimeout(() => {
          document.querySelector('.inTitle').classList.add('visible');
        }, 500);
    
        return () => clearTimeout(timer);
    }, []);

    const scrollTo = (offset) => {
    if (parallaxRef.current) {
        parallaxRef.current.scrollTo(offset);
    }
    };
    
    return (
    <div>
        <Parallax pages={7.5} ref={parallaxRef}>
            <ParallaxLayer 
                offset={.1}
                speed={.2}>
                <h1 className='inTitle'>From beautiful Prizren</h1>
            </ParallaxLayer>
            
            {/* layer 1 */}
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
            
            {/* layer 2 */}
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

            {/* layer 3 */}
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

            {/* support layer (Mush hapsiren) */}
            <ParallaxLayer 
                className='supportLayer'
                offset={.999}
                factor={5}
                speed={1}
            />  
            
            {/* layer 4 */}
            <ParallaxLayer
                offset={0.5}
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
                factor={15}
                speed={1}
            > 
            </ParallaxLayer>

            <ParallaxLayer 
                offset={1}
            >
                <Education />
            </ParallaxLayer>

            <ParallaxLayer 
                offset={2.3}
            >
                <Personality />
            </ParallaxLayer>

            <ParallaxLayer 
                speed={1}
                offset={2.5}
                style={{
                    backgroundColor: 'rgb(10, 16, 13)',
                    width: '18em', 
                    height: '0',
                    paddingBottom: '100%', 
                    backgroundImage: `url(${imgReel})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat', 
                    position: 'absolute', 
                    left: '80%', 
                    top: '0',
                    zIndex: 2, 
                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
                }}
            />

            <ParallaxLayer
                offset={4}
            >
                <PeopleInsights />
            </ParallaxLayer>

            <ParallaxLayer 
                offset={1}
                speed={0.01}
                sticky={
                    {
                        start: 1,
                        end: 4
                    }
                }
            >
                <div className='jumpToNav'>
                    <button onClick={() => scrollTo(1)}>
                        <div className='jtn edu'>
                            <BackpackIcon size={iconsize} />
                            <h2>Education</h2>
                        </div>
                        <div className='scto'>
                            <p className='sctoP'>Scroll to</p>
                            <ScrollDown size={20}/>
                        </div>
                    </button>
                    <button onClick={() => scrollTo(2.3)}>
                        <div className='jtn pers'>
                            <PersonIcon size={iconsize}/>
                            <h2>Personality</h2>
                        </div>
                        <div className='scto'>
                            <p className='sctoP'>Scroll to</p>
                            <ScrollDown size={20}/>
                        </div>
                    </button>
                    <button onClick={() => scrollTo(3.8)}>
                        <div className='jtn com'>
                            <CommentIcon size={iconsize}/>
                            <h2>Insights</h2>
                        </div>
                        <div className='scto'>
                            <p className='sctoP'>Scroll to</p>
                            <ScrollDown size={20}/>
                        </div>
                    </button>
                    <button>
                        <div className='jtn pei'>
                            <PersonalInfoIcon size={iconsize} />
                            <h2>Personal Info</h2>
                        </div>
                        <div className='scto'>
                            <p className='sctoP'>Scroll to</p>
                            <ScrollDown size={20}/>
                        </div>
                    </button>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={3}
                style={{ pointerEvents: 'auto' }}
                >
                <Header />
            </ParallaxLayer>

            <ParallaxLayer
                offset={7.1}
                style={{ pointerEvents: 'auto' }}
                config={{
                    tension: 0,
                    friction: 5,
                    mass: 1
                }}
                >
                <Footer />
            </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default InSection


// TASKS responsivenes

// Education.js
