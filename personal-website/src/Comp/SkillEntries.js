import React from 'react'
import SingleSkillEntry from './SingleSkillEntry';

function SkillEntries() {
    return (
        <div className='skillContainer'>
              <h1 className='psL'>My Personal Skills</h1>
            <SingleSkillEntry />
            <SingleSkillEntry />
            <SingleSkillEntry />
            <SingleSkillEntry />
            <SingleSkillEntry />
        </div>  
    )
}

export default SkillEntries
