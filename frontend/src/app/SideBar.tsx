// Sidebar.js
import React from 'react';

function Sidebar({ isOpen, toggleSidebar }: any) {
    return (
        <div className={`flex bg-transparent w-full h-full content-center items-center z-10 ${isOpen ? 'absolute' : 'hidden'}`} >

            <div className={` bg-transparent ${isOpen ? 'absolute' : 'hidden'} transition-all duration-300 ease-in-out w-screen h-screen z-10`}>

                <button onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            </div>


        </div>

    );
}

export default Sidebar;
