import { NavLink, Link } from "react-router-dom";
import { useRef, useEffect } from "react";

import Info from "../scrap/Info";
const Header = () => {
  const navLink = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/coach",
      display: "Find a Coach",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];

  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link
            to={{
              pathname: "/home",
            }}
            className="btn btn-ghost normal-case text-xl"
          >
            FitTrainer24{" "}
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navLink.map((link, index) => (
              <li className="mt-4" key={index}>
                <NavLink
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-secondaryColor"
                      : "text - primaryColor"
                  }
                  to={link.path}
                >
                  {link.display}
                </NavLink>
              </li>
            ))}

            <li>
              <button className="btn ml-5  btn-md mt-2  bg-primaryColor   hover:bg-secondaryColor">
                <Link to="/login">
                  <p className="mt-2">Login</p>
                </Link>
              </button>
              <div className="dropdown hidden dropdown-end ">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar mt-2 "
                >
                  <div className="w-8 rounded-full">
                    <img src="" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
