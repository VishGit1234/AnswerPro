import React, {useRef, useState} from 'react';
import useWindowDimensions from './windowDimensions';

const QuestionBox = () => {
    const ref = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const {width, height} = useWindowDimensions();

    const handleClick = (e) => {
        //Prevent refresh
        e.preventDefault()
        // 👇️ access textarea value
        console.log(ref.current.value);
    };

    const handleFileInput = (e) => {
        if(e != null)
        {
            // handle validations (check if exceeds 1MB)
            const file = e.target.files[0];
            if (file.size > 1000000)
            {
                alert("File size cannot exceed more than 1MB");
                console.log("File size cannot exceed more than 1MB" + `${file.size}`);   
            }
            else
            {
                setSelectedFile(e.target.files[0]);
            } 
        }
    };
    
    return(
        <div className='flex flex-col place-self-center mt-32 w-auto h-auto text-gray-300'>
            <label className='mb-2'>Type your question (or upload an image)</label>
            <textarea ref={ref} rows={9} cols={Math.round(width/10)} className='bg-slate-800 text-gray-300 border-2'></textarea>
            <div className='flex flex-row'>
                <input type='file' accept='image/png, image/jpeg' onChange={handleFileInput} className={`${width < 400 ? "hidden" : ""}`}></input>
                <button className='ml-auto border-x-2 border-b-2 px-3 rounded-b-lg text-lg bg-slate-100 text-black active:bg-slate-300 hover:bg-slate-200' onClick={handleClick}>{width > 500 ? "Post Question" : "Post"}</button>
            </div>
        </div>
    );
};

export default QuestionBox; 