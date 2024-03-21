import React from 'react'
import './Comp-css/CommentPost.css';
import useReveal from './MyHooks/useReveal';

function CommentAdd() {
 
  useReveal('.formHolder', 'formHolderVisible');

  return (
    <div className='formHolder'>
        <div className='contDiv'>
            <p className='contTitle'>Have we met?</p>
            <p className='contPara'>If yes, I would highly appreciate if you posted about our interaction, or just in general what you think as it would greatly help. First, you need to log in or sign up and you should be good to go.</p>
        </div>
        <button className='commentLogSign'>Log in or Sign up</button>
        
    </div>
  )
}

export default CommentAdd
