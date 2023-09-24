import React from 'react'
import CoachCard from '../../components/scrap/CoachCard'
import { coach } from '../../components/coach'

const Coach = () => {
    return (
        <>
            <section className=''>
                <div className="container text-center">
                    <h2 className="text-3xl font-bold pt-8">Find a Coach</h2>
                    <div className=" max-w-[570px] mt-[30px]  mx-auto    bg-primaryColor  rounded-md flex  items-center justify-between">
                        <input type="search" className='py-3 pl-4  pr-2  bg-transparent w-full  focus:outline-none cursor-pointer  placeholder:text-white' placeholder='Search Coach' />
                        <button className='btn mt-0  rounded-[0px]   rounded-r-md'>Search</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='mt-20 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 '>{coach.map((coach) => <CoachCard key={coach.id} coach={coach} />)}</div>
            </section>
        </>
    )
}

export default Coach