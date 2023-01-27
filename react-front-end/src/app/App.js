import React from 'react';
import NavBar from './navbar.js';
import QuestionBox from './PostQuestion.js';

const App = () => {
    return(
        <div className='bg-slate-600 h-screen w-screen flex flex-col overflow-hidden'>
            <NavBar/>
            <QuestionBox/>
        </div>
    );
};

export default App;