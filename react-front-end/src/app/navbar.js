import React from 'react';
import useWindowDimensions from './windowDimensions';

const NavBar = () => {
    //Get the window dimensions
    const {width, height} = useWindowDimensions();
    if(width > 700)
    {
        return(
            <nav className='flex flex-row h-20 bg-slate-800 items-center w-screen shadow-lg fixed'>
                <h1 className='font-extrabold text-2xl ml-16 lg:ml-36 text-gray-300 font-serif'>AnswerPro</h1>
                <ul className='flex flex-row items-center flex-wrap justify-between md:ml-10 lg:ml-16 sm:ml-2 sm:w-60 md:w-72 lg:w-80 text-gray-200'>
                    {/* Add hyperlinks to go to other pages here <a href=""></a> */}
                    <li className='mx-1'>View Questions</li>|
                    <li className='mx-1'>Ask Questions</li>
                </ul>
                <button className=' text-gray-300 mr-16 lg:mr-36 ml-auto border-4 p-2 px-4 rounded-full border-slate-300 hover:bg-slate-300 hover:text-black active:bg-slate-400'>
                    Sign In | Sign Up
                </button>
            </nav>
        );
    }
    else{
        return(
            <nav className='flex flex-row h-20 bg-slate-800 items-center w-screen shadow-lg fixed text-gray-300'>
                <button className='font-extrabol text-3xl ml-6 pb-1'>☰</button>
                <h1 className='font-extrabold text-xl ml-8 font-serif'>AnswerPro</h1>
                <button className='mr-8 text-sm ml-auto border-4 p-0.25 px-4 rounded-full border-slate-300 active:text-black active:bg-slate-400'>
                    Sign In
                </button>
            </nav>
        );
    }
};
export default NavBar;