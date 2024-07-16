import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import imgOne from '../Comp/images/Adobe images/IMG_one.png';
import imgTwo from '../Comp/images/Adobe images/IMG_two.png';
import imgThree from '../Comp/images/Adobe images/IMG_three.png';
import imgFour from '../Comp/images/Adobe images/IMG_four.png';

function TestPage() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.2}
          style={{
            backgroundImage: `url(${imgOne})`,
            backgroundSize: 'cover', 
          }}
        />
        <ParallaxLayer
          speed={0.6}
          style={{
            backgroundImage: `url(${imgTwo})`,
            backgroundSize: 'cover', 
          }}
        />
        <ParallaxLayer
          speed={1}
          style={{
            backgroundImage: `url(${imgThree})`,
            backgroundSize: 'cover', 
          }}
        />
        <ParallaxLayer
          offset={0.8}
          speed={0.9}
          style={{
            width: '100%',
            height: '100vh',
            backgroundColor: '#274639',
          }}
        />
        <ParallaxLayer
          offset={0.5}
          speed={2}
          style={{
            backgroundImage: `url(${imgFour})`,
            backgroundSize: 'cover', 
          }} 
        />
        <ParallaxLayer
          offset={1}
          speed={0.9}
          style={{
            width: '100%',
            height: '100vh',
            backgroundColor: '#0b241b', 
          }} 
        />

      </Parallax>
    </div>
  )
}

export default TestPage
