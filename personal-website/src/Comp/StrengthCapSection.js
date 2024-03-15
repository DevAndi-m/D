import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Comp-css/SCSection.modules.css';
import Section from './Section';

export default function StrengthCapSection() {

  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div className='background'>
       <Parallax pages={6}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className='scrollText'>So basically</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className='card sticky'>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='card parallax purple'>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='card parallax blue'>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 4, end: 5.5}} speed={1.5} style={{ ...alignCenter }}>
          <Section />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

