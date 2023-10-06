import { useState } from 'react';
import CoachFeedbackForm from './CoachFeedbackForm';

const CoachFeedback = () => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };

    if (showForm) {
        return <CoachFeedbackForm />;
    }

    return (
        <div className=' text-center'>
            <button className='btn bg-indigo-700 mt-5' onClick={handleShowForm}>Give a Feedback</button>
        </div>
    );
};

export default CoachFeedback;
