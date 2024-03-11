import React from 'react';
import './Comp-css/ExperienceEntry.css';
import jcodersLogo from './images/JcodersLogo.png';

function ExperienceEntry() {
  return (
    <div className='bigParent'>
        <h2 className='bigparentHOne'>Jcoders Academy</h2>
        <div className='experience-parent'>
        <div className='exp-image'>
            <img src={jcodersLogo}></img>
        </div>
        <div className='exp-info'>
            <p className='empDesc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className='empInfo'>
                <div>
                    <h2>
                        Duration:
                    </h2>
                    <p>
                        September 2022 to September 2023
                    </p>
                    <p>
                        (1 year)
                    </p>
                </div>
                <hr></hr>
                <div>
                    <h2>
                        Employment Type:
                    </h2>
                    <p>
                        Hybrid
                    </p>
                </div>
            </div>
            <div className='empDandA'>
                <div className='assigmentList'>
                    <div className='assig'>
                        <h2>Programming Instructior/Trainer</h2>
                        <p>Instructed and mentored students aged 8-16 in foundational programming languages such as HTML, CSS, and JavaScript. Visualised different complex problems in order for them to have a perfect understanding of the subject.</p>
                    </div>
                    <div className='assig'>
                        <h2>TOT - Training Of Trainers</h2>
                        <p>Mentored and guided fellow novice instructors in effective teaching methodologies and programming concepts. Provided ongoing support to fellow instructors, addressing coding challenges, debugging issues, and encouragment in order for them to effectively teach programming concepts to the students.</p>
                    </div>
                    <div className='assig'>
                        <h2>Creating and Modifying Curriculums</h2>
                        <p>Adapted and personalized curriculum content to meet the diverse learning needs of students, promoting an inclusive and accessible approach to programming education and at the same time identifying areas for improvement and innovation, actively participating in the evolution of course materials to stay at the ready of industry trends and educational best practices.</p>
                    </div>
                </div>
                <div className='assigmentButtons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='exp-btn'>
            <button>My Experience</button>
            <button>Employment Info</button>
            <button>Duties & Assigments</button>
        </div>
    </div>
    </div>
  )
}

export default ExperienceEntry
