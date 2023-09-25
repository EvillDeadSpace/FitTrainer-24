import ServicesList from './ServicesList'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const ServicesCard = ({ item, index }) => {

    const { title, text, bgColor, textColor } = item

    return (
        <div className='py-[30px] px-3 lg:px-5 '>
            <h2 className=' text-[26px]  leading-9    text-accentColor font-[700] '>{title}</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>{text}</p>

            <div className='flex  items-center  justify-between mt-[30px]'>
                <Link to='/doctor' className='w-[44px] h-[44px]   rounded-full border  border-solid border-black  flex  items-center justify-center group  hover:bg-primaryColor hover:border-none'> <BsArrowRight className='group-hover:text-white w-6 h-5 ' /> </Link>
                <span style={{
                    background: `${bgColor}`,
                    colo: `${textColor}`,
                    borderRadius: '6px 0 0 6px',
                }} className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[700]'>
                    {index + 1}
                </span>
            </div>

        </div>

    )
}

export default ServicesCard