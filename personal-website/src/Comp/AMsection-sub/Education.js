import React from 'react';
import ubtLogo from '../images/Ubtlogo.png';
import './AMcss/EducationCss.css';

function Education() {
  return (
    <div className='eduMain'>
        <div className='eduTitle'>
            <img src={ubtLogo}></img>
            <h2>University of Business and Technology</h2>
        </div>
        <div className='eduPara'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
    </div>
  )
}

export default Education
