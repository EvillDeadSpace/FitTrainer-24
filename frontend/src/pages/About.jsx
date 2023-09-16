import React from 'react'
import Slika from "../assets/picture/1275638.jpg"
import Trcanje from "../assets/picture/trcanje.jpg"
import { Link } from "react-router-dom"
const About = () => {
    return <section>
        <div className="container mt-[5%]">
            <div className='flex   justify-between  gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                <div className=' relative w-3/4 lg:w-1/2  xl:w-[720px] z-10 order-2 lg:order-1'>
                    <img src={Trcanje} alt="" />
                    <div className=' absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]' >
                        <img src={Slika} alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Our Dedication to Your Fitness Journey</h2>
                    <p className='text_paragraph'>Our mission is to provide you with top-notch support on your path to achieving your fitness goals. With a team of expert fitness trainers, every customer's needs are at the forefront of our work. Whether you're just starting your fitness journey or seeking ways to enhance your skills, we are here to guide you step by step.</p>
                    <p className='text_paragraph mt-10'>Our personalized training approach allows you to achieve the best results tailored to your goals and lifestyle. Whether you want to build muscle, lose weight, or improve your overall fitness, we will create a training plan together that inspires and motivates you every step of the way. Your success is our reward, and we look forward to being a part of your fitness journey.</p>


                    <Link to="/"><button className='btn bg-primaryColor mt-7  rounded-2xl'>Learn More</button></Link>
                </div>
            </div>

        </div>
    </section>
}

export default About