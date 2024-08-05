import { useState, useEffect } from 'react';

function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
      };
  
      updateScreenWidth();
  
      window.addEventListener('resize', updateScreenWidth);

      return () => {
        window.removeEventListener('resize', updateScreenWidth);
      };
    }, []);
  return screenWidth;
}

export default useScreenWidth;
