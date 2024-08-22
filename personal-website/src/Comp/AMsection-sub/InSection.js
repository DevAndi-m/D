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
import GoToHeaderBtn from './GoToHeaderBtn';

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

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateScreenWidth = () => {
          setScreenWidth(window.innerWidth);
        };
    
        updateScreenWidth();
    
        window.addEventListener('resize', updateScreenWidth);
  
        return () => {
          window.removeEventListener('resize', updateScreenWidth);
        };
      }, []);

    // reel variable
    const [reelWidth, setRWidth] = useState('18em')
    const [reelDisp, setRDisp] = useState('inline');

    useEffect(() => {
        if (screenWidth < 1660 && screenWidth >= 1540) {
            setRWidth('16em')
            setRDisp('inline')
        } 
        if (screenWidth < 1540 && screenWidth >= 1430) {
            setRWidth('15em')
            setRDisp('inline')
        } 
        if (screenWidth < 1430 && screenWidth >= 1300) {
            setRWidth('13em')
            setRDisp('inline')
        }
        if (screenWidth < 1300 && screenWidth >= 1200) {
            setRWidth('12em')
            setRDisp('inline')
        }

        if (screenWidth < 1200 && screenWidth >= 1000) {
            setRWidth('11em')
            setRDisp('inline')
        }

        if (screenWidth < 1000 && screenWidth >= 0) {
            setRWidth('0')
            setRDisp('none')
        }

        if(screenWidth > 1660) {
            setRWidth('18em')
            setRDisp('inline')
        }
    }, [screenWidth])


    //footer offset 
    const [footerOffset, setFooterOffset] = useState('0');

    useEffect(() => {
        if (screenWidth <= 750 && screenWidth > 0) {
            setFooterOffset('-30em')
        } else {
            setFooterOffset('0')
        }
    }, [screenWidth])

    return (
    <div>
        <Parallax pages={6} ref={parallaxRef}>
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
            /> 
          

            {/* Education Layer */}
            <ParallaxLayer 
                offset={1}
            >
                <Education />
            </ParallaxLayer>

            {/* Personality Layer */}
            <ParallaxLayer 
                offset={2.3}
            >
                <Personality />
            </ParallaxLayer>

            {/* Image reel Layer */}
            <ParallaxLayer 
                speed={1}
                offset={2.5}
                style={{
                    display: `${reelDisp}`,
                    backgroundColor: 'rgb(10, 16, 13)',
                    width: `${reelWidth}`, 
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


            {/* Scroll Buttons */}
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
                    <button onClick={() => scrollTo(4)}>
                        <div className='jtn com'>
                            <CommentIcon size={iconsize}/>
                            <h2>Insight</h2>
                        </div>
                        <div className='scto'>
                            <p className='sctoP'>Scroll to</p>
                            <ScrollDown size={20}/>
                        </div>
                    </button>
                    {/* <button>
                        <div className='jtn pei'>
                            <PersonalInfoIcon size={iconsize} />
                            <h2>Personal Info</h2>
                        </div>
                        <div className='scto'>
                            <p className='sctoP'>Scroll to</p>
                            <ScrollDown size={20}/>
                        </div>
                    </button> */}
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={5.5}
                speed={5}
            >
                <GoToHeaderBtn scrollTo={scrollTo}/>
            </ParallaxLayer>

            {/* Header */}
            <ParallaxLayer
                offset={0}
                speed={3}
                style={{ pointerEvents: 'auto' }}
                >
                <Header />
            </ParallaxLayer>

            {/* Footer */}
            <ParallaxLayer
                offset={5.6}
                style={{ 
                    pointerEvents: 'auto',
                    position: 'relative',
                    top: `${footerOffset}`,
                }}
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

// Fix footer responsiveness
// Fix personality resp 
