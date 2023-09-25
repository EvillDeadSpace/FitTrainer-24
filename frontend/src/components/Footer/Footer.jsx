import React from 'react'
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { socialLinks, quickLinks01, quickLinks02, quickLinks03 } from './SocialLinks';
import Logo from "../../assets/picture/logo.png"
import { Link } from 'react-router-dom';
const Footer = () => {
  const year = new Date().getFullYear()



  return (
    <footer className='pb-16  pt-20'>
      <div className='container'>
        <div className='flex   justify-between  flex-col  md:flex-row   flex-wrap gap-[30px]'>
          <div>
            <img className=' h-10 w-10' src={Logo} alt="" />
            <p className='text-[16px]  leading-7 font-[400] text-textColor'>Copyright {year} development by Amar Tubic all right reserved. </p>
            <div className='flex  items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => <Link className='w-9 h-9 border border-solid border-black rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' to={link.path} key={index}>{link.icon} </Link>)}
            </div>
          </div>
          <div>
            <h3 className=' text-[30px]  leading-[30px] font-[700] mb-6    text-slate-950'>Quick Links</h3>

            <ul className='flex flex-col gap-2'>
              {quickLinks01.map((link, index) =>
                <Link className='text-[16px]  leading-7 font-[400] text-textColor hover:text-primaryColor' to={link.path} key={index}>{link.display}</Link>
              )}
            </ul>
          </div>
          <div>
            <h3 className=' text-[30px]  leading-[30px] font-[700] mb-6   text-slate-950'>I want to</h3>

            <ul className='flex flex-col gap-2'>
              {quickLinks02.map((link, index) =>
                <Link className='text-[16px]  leading-7 font-[400] text-textColor hover:text-primaryColor' to={link.path} key={index}>{link.display}</Link>
              )}
            </ul>
          </div>
          <div>
            <h3 className=' text-[30px]  leading-[30px] font-[700] mb-6   text-slate-950'>I want support</h3>

            <ul className='flex flex-col gap-2'>
              {quickLinks03.map((link, index) =>
                <Link className='text-[16px]  leading-7 font-[400] text-textColor hover:text-primaryColor' to={link.path} key={index}>{link.display}</Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer