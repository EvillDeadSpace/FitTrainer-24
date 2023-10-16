import React from 'react'

const SidePanel = () => {
    return (
        <div className=' panelShadow bg-gray-700 p-3 lg:p-5  rounded-md ' >
            <div className="flex items-center  justify-between">
                <p className='text_paragraph mt-0  font-semibold '>Price per session</p>
                <span className='text-[16px] leading-6 lg:text-[22px] lg:leading-8 text-heading'> 10$ </span>
            </div>
            <div className=' mt-7 '>
                <p className=' text_paragraph mt-0 font-semibold  text-heading'>
                    Currently available appointments:
                </p>
                <ul className=' mt-3 '>
                    <li className=' flex items-center  justify-between mb-2'>
                        <p className='text-[15px] left-6 text-textColor font-semibold'>Monday</p>
                    </li>
                    <li className=' flex items-center  justify-between mb-2'>
                        <p className='text-[15px] left-6 text-textColor font-semibold'>6:00 PM -- 10:00 PM</p>
                    </li>
                    <li className=' flex items-center  justify-between mb-2'>
                        <p className='text-[15px] left-6 text-textColor font-semibold'>Wednesday</p>
                    </li>
                    <li className=' flex items-center  justify-between mb-2'>
                        <p className='text-[15px] left-6 text-textColor font-semibold'>10:00 AM -- 2:00 PM</p>
                    </li>
                    <li className=' flex items-center  justify-between mb-2'>
                        <p className='text-[15px] left-6 text-textColor font-semibold'>Thursday</p>
                    </li>
                    <li className=' flex items-center  justify-between mb-2'>
                        <p className='text-[15px] left-6 text-textColor font-semibold'>6:00 PM -- 10:00 PM</p>
                    </li>
                    <li className=' flex items-center  justify-between mb-2'>
                        <p className='text-[15px] left-6 text-textColor font-semibold'>Saturday</p>
                    </li>
                    <li className=' flex items-center  justify-between mb-2'>
                        <p className='text-[15px] left-6 text-textColor font-semibold'>8:00 AM -- 12:00 AM</p>
                    </li>
                </ul>
            </div>
            <div>
                <button className='w-full btn bg-black text-[16px] leading-6 text-heading font-semibold py-2 mt-5 rounded-md'>Book Appointment</button>
            </div>
        </div >
    )
}

export default SidePanel