
import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-5 right-5 bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl z-20 border-2 border-black"
          aria-label="Go to top"
        >
          &uarr;
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
