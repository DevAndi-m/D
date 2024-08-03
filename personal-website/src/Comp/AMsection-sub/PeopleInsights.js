import React from 'react'
import './AMcss/PeopleInsights.css';
import smiler from '../images/smiling-man_1098-15443.jpg';
import { StarIcon } from './AboutIcons';

function PeopleInsights() {

  const starSize = 30

  return (
    <div className='cardMain'>
      <div className='rpd'>
        <p>Relation: Friend</p>
          <img className="rpdImg" src={smiler}></img>
        <p>Date: 26/10/2024</p>
      </div>
      <p className='piName'>Filan Baba</p>
      <hr></hr>
      <p className='piDescription'>
        If a ParallaxLayer with the sticky property passed is wrapped in a div or fragment, the element disappears for the time it should be "sticking" on screen. Removing any enclosing div/fragments returns to correct behavior. This is a problem on a larger site I'm developing where I would like to split some of the layers up into subcomponents, which necessitates being able to include extra divs/fragments. To Reproduce Put a fragment around a ParallaxLayer w sticky property set. It can enclose more than just that one ParallaxLayer but the problem shows up w just the one enclosed. The sticky element is visible before and after its designated sticky phase, but disappears during.
      </p>
      <div className='starHolder'>
        <p><StarIcon size={starSize} /></p>
        <p><StarIcon size={starSize} /></p>
        <p><StarIcon size={starSize} /></p>
        <p><StarIcon size={starSize} /></p>
        <p><StarIcon size={starSize} /></p>
      </div>
    </div>
  )
}

export default PeopleInsights
