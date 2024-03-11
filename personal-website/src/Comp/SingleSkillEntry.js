import React from 'react';
import './Comp-css/SkillSection.css';
import PlaceHolderImage from './images/logo192.png';
import useReveal from './MyHooks/useReveal';

function SingleSkillEntry() {

  useReveal('.skillEntry', 'showedEntry');
  useReveal('.hiddenBar', 'visibleBar');

  return (
    <div className='skillList'>
      <div className='skillEntry'>
        <img src={PlaceHolderImage} alt='Placeholder'></img>
        <div className='skillInfo'>
          <h2>React</h2>
          <p>doiwajdipapdkpawkdpowakdpoawpodkpawpdapwkpdkawpdadddddddddddddddddddddo.</p>
          <div className='skillStats'>
            <div className='skillBar'>
              <div className='hiddenBar'></div>
            </div>
            <p>Excellent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSkillEntry;