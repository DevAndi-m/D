import React from 'react';
import ubtLogo from '../images/Ubtlogo.png';
import gjBLogo from '../images/gjb.png';
import './AMcss/EducationCss.css';

function Education() {
  return (
    <div className='eduMain'>
      <h1 className='jtnTtl'>Education</h1>
        <div className='eduTitleMain'>
            <img src={ubtLogo}></img>
            <div className='eduTitle'>
              <h2>University of Business and Technology</h2>
              <p>Computer Science & Engineering</p>
            </div>
        </div>
        <div className='eduPara'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className='colInfo'>
          <div className='colData'>
            <ul>
              <li><p>Bachelor's Degree</p></li>
              <li><p>Prizren</p></li>
            </ul>
          </div>
          <div className='bgnEnd'>
            <p>September 2021 - Current</p>
          </div>
        </div> 
        <div className='secondaryEducation'>
          <hr className='sehr'></hr>
          <div className='secondaryEducationMain'>
              <div className='seTitle'>
                <img src={gjBLogo}></img>
                <div className='settl'>
                  <h2>Gjimnazi Gjon Buzuku</h2>
                  <p>Shkenca Natyrore</p>
                </div>
              </div>
              <p className='seDuration'>September 2018 - June 2021</p>
          </div>
        </div>
    </div>
  )
}

export default Education
