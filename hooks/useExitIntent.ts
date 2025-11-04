import { useEffect, useState } from 'react';

const useExitIntent = (onExitIntent: () => void) => {
  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        onExitIntent();
      }
    };

    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [onExitIntent]);
};

export default useExitIntent;
