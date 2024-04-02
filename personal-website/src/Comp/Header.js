import React, { useEffect, useState } from 'react';
import './Comp-css/Header.css';

const threeDots = (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  </svg>
);

const back = (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
  </svg>
);

function Header() {
  const [navVisible, setNavVisible] = useState(true);
  const [pWidth, setPWidth] = useState(window.innerWidth);
  const dots = document.getElementsByClassName('toggleOn');
  const lCont = document.getElementsByClassName('visibleLinkContainer');
  
  const calculatePositions = () => {
    const widthHalf = pWidth / 3.25;
    const linkHalf = pWidth / 7.4;

    for (let i = 0; i < dots.length; i++) {
      dots[i].style.left = widthHalf + "px";
    }

    for (let i = 0; i < lCont.length; i++) {
      lCont[i].style.right = linkHalf + "px";
    }
  };

  const toggleNav = () => {
    calculatePositions();
    setNavVisible(!navVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setPWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    calculatePositions();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    calculatePositions();
  }, [pWidth, dots, lCont]);

  return (
    <div className='header'>
      <div className='linkContainer'>
        <h3><a>Home</a></h3>
        <h3><a>About Me</a></h3>
        <h3><a>My Work</a></h3>
        <h3><a>Gallery</a></h3>
      </div>

      <div className={navVisible ? 'toggleOn' : 'toggleOff'}>
        <h3><a>Home</a></h3>
      </div>

      <div className={navVisible ? 'hiddenLinkContainer' : 'visibleLinkContainer'}>
        <h3><a>About Me</a></h3>
        <h3><a>My Work</a></h3>
        <h3><a>Gallery</a></h3>
      </div>

      <p className='navDots' onClick={toggleNav} style={{ opacity: navVisible ? 1 : 0, width: navVisible ? 'fit-content' : 0 }}>{threeDots}</p>
      <p className='navReturn' onClick={toggleNav} style={{ opacity: navVisible ? 0 : 1, width: navVisible ? 'fit-content' : 0 }}>{back}</p>
    </div>
  )
}

export default Header;
