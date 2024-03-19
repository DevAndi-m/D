import React from 'react'
import './Comp-css/CommentData.css';

export default function CommentData() {

    const bigStarSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      );

    const starSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      );

  return (
    <div className='dataMain'>
        <div className='avr'>
            <div className='bigstr'>
                {bigStarSVG}
            </div>
            <p className='avgNum'>
                4.7/5
            </p>
        </div>
        <div className='strContainer'>
            <div className='con oneStr'>
                <p className='noRatings'>21,000</p>
                <div className='sholder'>{starSVG}</div>
                <div className='bar barOneE'><div className='barOneF'></div></div>
            </div>
            <div className='con twoStr'>
                <p className='noRatings'>21,000</p>
                <div className='sholder'>
                    {starSVG}
                    {starSVG}
                </div>
                <div className='bar barTwoE'><div className='barTwoF'></div></div>
            </div>
            <div className='con threeStr'>
                <p className='noRatings'>21,000</p>
                <div className='sholder'>
                    {starSVG}
                    {starSVG}
                    {starSVG}
                </div>
                <div className='bar barThreeE'><div className='barThreeF'></div></div>
            </div>
            <div className='con fourStr'>
                <p className='noRatings'>21,000</p>
                <div className='sholder'>
                    {starSVG}
                    {starSVG}
                    {starSVG}
                    {starSVG}
                </div>
                <div className='bar barFourE'><div className='barFourF'></div></div>
            </div>
            <div className='con fiveStr'>
                <p className='noRatings'>21,000</p>
                <div className='sholder'>
                    {starSVG}
                    {starSVG}
                    {starSVG}
                    {starSVG}
                    {starSVG}
                </div>
                <div className='bar barFiveE'><div className='barFiveF'></div></div>  
            </div>
        </div>
    </div>
  )
}