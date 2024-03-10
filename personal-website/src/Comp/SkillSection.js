import React from 'react'
import './Comp-css/SkillSection.css';
import SkillEntry from './SkillEntry';

function SkillSection() {
  return (
    <div className='skillsection'>
        <h1>My Skills & Experience</h1>
        <SkillEntry />
        <SkillEntry />
        <SkillEntry />
        <SkillEntry />
    </div>
  )
}

export default SkillSection
