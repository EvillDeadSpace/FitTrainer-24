import React from 'react'
import imgRuning from "../../assets/picture/trcanje.jpg"
import imgStar from "../../assets/picture/starIcon.png"
import { useState } from 'react'
import CoachAbout from './CoachAbout'
import CoachFeedback from './CoachFeedback'
import SidePanel from './SidePanel'


const CoachDetails = () => {
  const [useButton, setUseButton] = useState('About');

  let tempComponentRender

  if (useButton === 'About') {
    tempComponentRender = <CoachAbout />
  }
  if (useButton === 'Feedback') {
    tempComponentRender = <CoachFeedback />
  }


  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto '>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className=' max-w-[200px] max-h-[200px] m-10'>
                <img src={imgRuning} alt="" className='max-full' />
              </figure>
              <div>
                <span className='bg-white   text-blue-500 py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text[16px] lg:leading-6 font-semibold rounded' >
                  Weight Loss
                </span>
                <h3 className=' text-black text-[22px] leading-7 mt-3 font-bold'>Amar Tubic</h3>
                <div className='flex  items-center gap-[6px]'>
                  <span className='flex  items-center gap-[6px] text-[14px] leading-4 lg:text-[16px] lg:leading-7 font-semibold text-white'>
                    <img className='w-5 h-5' src={imgStar} alt="" /> 4.5
                  </span>
                  <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold ml-5 text-white' >(+20 Clients)</span>
                </div>
                <p className='text_paragraph text-[14px] leading-4 md:text-[15px] lg:max-w-[390px]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit porro ad saepe perferendis rem deserunt unde dolorum ducimus officiis.
                </p>

              </div>
            </div>
            <div className=' mt-20   border-b border-solid  border-purple-900'>
              <button onClick={() => setUseButton('About')} className={` ${useButton === 'About' && 'border-b border-solid border-purple-400 '}  py-2 px-5 mr-5 text-[16px] leading-6 text-white   font-medium`}>About</button>
              <button onClick={() => setUseButton('Feedback')} className={`${useButton === 'Feedback' && 'border-b border-solid  border-purple-400'} py-2 px-5 mr-5 text-[16px] leading-6 text-white  font-medium`}>Feedback</button>

            </div>
            <div className='mt-14'>
              {
                tempComponentRender
              }
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section >
  )
}

export default CoachDetails