import React from 'react'
import './Comp-css/SkillSection.css';
import SkillEntries from './SkillEntries';
import ExperienceMain from './ExperienceMain';

function SkillExpSection() {
  return (
    <div className='skillsection'>
        <SkillEntries />
        <ExperienceMain />
    </div>
  )
}

export default SkillExpSection
