import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const CoachFeedbackform = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [TextArea, setTextArea] = useState("");

    const handleSubmitArea = async e => {
        e.preventDefault();
        console.log(TextArea);
    }


    return (
        <form action="">
            <div>
                <h3 className=' text-black  text-[16px] leading-6  font-semibold mb-4 mt-0'>How would you rate the overall experience?</h3>
                <div>
                    {[...Array(5).keys()].map((index) => {
                        index += 1;
                        return (
                            <button
                                key={index}
                                type='button'
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={() => {
                                    setRating(0);
                                    setHover(0);
                                }}
                                className={`${index <= ((rating && hover) || hover)
                                    ? 'text-yellow-300'
                                    : 'text-gray-500'
                                    } bg-transparent border-none outline-none text-2xl cursor-pointer`}
                            >
                                <span><AiFillStar /></span>
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className=' mt-8'>
                <h3 className=' text-black  text-[16px] leading-6  font-semibold mb-4 mt-0'>Do you have any recommendations or feedback ?</h3>
                <textarea className=' border  border-solid  bg-white text-black  border-y-blue-950  focus:outline outline-primaryColor w-full  px-4 py-3 rounded-md' rows="6" placeholder='Write your message...' onClick={(e) => setTextArea(e.target.value)}></textarea>
            </div>
            <button onClick={handleSubmitArea} type='submit' className='btn'>Submit Feedback</button>
        </form>
    );
}

export default CoachFeedbackform;
