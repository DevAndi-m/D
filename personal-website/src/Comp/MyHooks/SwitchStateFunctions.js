export const switchStateOne = (pageOneStatus, setPageOneStatus, setPageTwoStatus, setPageThreeStatus) => {
    if (pageOneStatus === 0) {
      setPageOneStatus(1);
      setPageTwoStatus(0);
      setPageThreeStatus(0);
    } else {
      setPageOneStatus(0);
    }
  };
  
  export const switchStateTwo = (pageTwoStatus, setPageOneStatus, setPageTwoStatus, setPageThreeStatus) => {
    if (pageTwoStatus === 0) {
      setPageOneStatus(0);
      setPageTwoStatus(1);
      setPageThreeStatus(0);
    } else {
      setPageTwoStatus(0);
    }
  };
  
  export const switchStateThree = (pageThreeStatus, setPageOneStatus, setPageTwoStatus, setPageThreeStatus) => {
    if (pageThreeStatus === 0) {
      setPageOneStatus(0);
      setPageTwoStatus(0);
      setPageThreeStatus(1);
    } else {
      setPageThreeStatus(0);
    }
  };
  