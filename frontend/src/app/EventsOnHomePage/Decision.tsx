import { useEffect, useState } from 'react';
import { CarouselMy } from './Carosel';
import EventsSection from './EventeSection';

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
          {/* carouselMy might be broken */}
          <CarouselMy />

        </div>

      )}
    </div>
  );
}

export default Decision;
