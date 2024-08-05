import React from 'react'
import { UpIcon } from './AboutIcons';
import './AMcss/GoToHead.css';

function GoToHeaderBtn({ scrollTo }) {
  return (
    <button className='topBtn' onClick={() => scrollTo(0)}>
        <UpIcon size={20}/>
            <h2>Jump to Top</h2>
        <UpIcon size={20}/>
    </button>
  )
}

export default GoToHeaderBtn
