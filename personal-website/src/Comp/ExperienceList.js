import React from 'react';
import ExperienceEntry from './ExperienceEntry';
import useRevealRec from './MyHooks/useRevealRec';

function ExperienceList() {

  useRevealRec('.elT', 'elTVisible');

  return (
    <div>
      <h1 className='elT'>My Work Experience</h1>
      <ExperienceEntry />
    </div>
  )
}

export default ExperienceList
