import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import imgOne from '../Comp/images/Adobe images/IMG_one.png';
import imgTwo from '../Comp/images/Adobe images/IMG_two.png';
import imgThree from '../Comp/images/Adobe images/IMG_three.png';
import imgFour from '../Comp/images/Adobe images/IMG_four.png';
import Header from '../Comp/Header';
import '../Comp/Comp-css/TestPage.css'; 

function TestPage() {
  return (
    <div>
      
      <Parallax pages={2} >
        <ParallaxLayer
          config={{ tension: 100, friction: 0 }}
          speed={1}
        >
          <Header />
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
          config={{ tension: 100, friction: 0}}
          speed={1.2}
          factor={2}
          style={{
            
          }} 
        />

      </Parallax>
    </div>
  )
}

export default TestPage
