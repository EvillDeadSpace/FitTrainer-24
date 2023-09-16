
import { NavLink, Link, } from 'react-router-dom'
import { useRef, useEffect } from 'react'


import Info from '../scrap/Info'
const Header = () => {

  const navLink = [
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '/doctor',
      display: 'Find a Doctor'
    },
    {
      path: '/services',
      display: 'Services'
    },
    {
      path: '/contact',
      display: 'Contact Us'
    },


  ]

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handlerStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headRef.current.classList.add('sticky_header')
      } else {
        headRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(() => {
    handlerStickyHeader()

    return () => window.removeEventListener('scroll', handlerStickyHeader)
  })


  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')


  return (
    <>
      <div className="navbar bg-base-100 " ref={headerRef}>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1" ref={menuRef} onClick={toggleMenu}>
            {
              navLink.map((link, index) => (
                <li className='mt-4' key={index}>
                  <NavLink className={navClass => navClass.isActive ? 'text-secundaryColor' : 'text - primaryColor'} to={link.path}>{link.display}</NavLink>
                </li>
              ))
            }


            <li>
              <button className="btn ml-5  btn-md mt-2  bg-primaryColor   hover:bg-secundaryColor"><p className='mt-2'>Login</p></button>
              <div className="dropdown dropdown-end hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar mt-2 ">
                  <div className="w-8 rounded-full">
                    <img src='' />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Login</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header