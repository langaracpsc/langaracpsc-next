import React, { useState, useEffect } from 'react';
import EventsSection from './EventeSection';
import { CarouselMy } from './Carosel';

function Decision() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 1024); // Adjust the breakpoint as needed
    }

    handleResize(); // Set initial state

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=' bg-body-gray'>
      {isWideScreen ? (
        
        <EventsSection />
        
        
      ) : (

        <div className='flex w-full items-center justify-center h-96 '>
          <CarouselMy />
        </div>
       
      )}
    </div>
  );
}

export default Decision;
