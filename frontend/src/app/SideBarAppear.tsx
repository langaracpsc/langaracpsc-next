// ParentComponent.js
import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar';

function SideBarDisplay() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 600);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen bg-transparent w-screen content-end flex-row z-10">
            {/* Sidebar */}
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <header className= "w-fit text-white p-4 '${isOpen ? 'hidden' : 'block'}'">
                    <button onClick={toggleSidebar} className={`${isOpen? "hidden": "block"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>

 
                </header>

                <div className="p-4">
                    {/* Main content */}
                </div>
            </div>
        </div>
    );
}

export default SideBarDisplay;