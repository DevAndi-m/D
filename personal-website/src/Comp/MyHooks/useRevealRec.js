import { useEffect } from 'react';

//Hooki useReveal, e ki qet selektor edhe className. selektori esht classa invisible, edhe className esht klasa
//qe ka mu shfaq kur shifet n'ekran.

const useRevealRec = (selector, className) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
            entry.target.classList.remove(className);
        }
      });
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, className]);
};

export default useRevealRec;