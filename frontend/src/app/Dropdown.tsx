import React, { useState, FC } from 'react';
import * as FaIcons from 'react-icons/fa';
import SocialIcons from './SocialIcons';
import NavButton from './NavButton';
import { useRouter } from "next/navigation";
import { useAppDispatch } from "./hooks/hooks";
import { SetCurrentPage, selectCurrentPage } from "./slices/pageSlice";
import { useSelector } from "react-redux";
import { AppDispatch } from "./stores/store";

interface DropdownProps
{
    Buttons: Any[]
}

export default function Dropdown({ Buttons } : DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const router = useRouter();
    const mainDispatch = useAppDispatch();
    const currentPage = useSelector(selectCurrentPage);
    const [page, setPage] = useState(currentPage); 

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onClickHandler  = (url: string) => {
        router.push(url);    
        mainDispatch(SetCurrentPage(url));
        setPage(currentPage);
    };

    const navButtons: Array<JSX.Element> = new Array<JSX.Element>();

  return (
    <div className="relative">
        <button onClick={toggleDropdown} className="p-3 flex items-center justify-between text-white rounded-md tracking-wider border-2 border-orange-500 hover:bg-opacity-50 hover:bg-orange-500 focus:bg-opacity-50 focus:bg-orange-500 transition duration-300">
            <FaIcons.FaBars className="text-2xl text-lang-orange" />
        </button>
            <div className={`fixed inset-0 z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center justify-center h-full">
                <div className="absolute inset-0 bg-black" onClick={toggleDropdown}></div>
                <div className="flex flex-col gap-3 items-center relative right-0 w-full max-w-md text-white p-5 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-3">
                        {Buttons}
                    </div>
                    <button onClick={toggleDropdown} className="mt-4 py-3 px-6 bg-lang-orange text-white font-bold text-lg rounded hover:scale-110 transition duration-300 ease-in-out">
                        Close
                    </button>

                </div>      
            </div>
            <div className="fixed bottom-0 w-full flex justify-center pb-10">
                <SocialIcons gap={3}/>
            </div>
        </div>
    </div>
  );
}
 