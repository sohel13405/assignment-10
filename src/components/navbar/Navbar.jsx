import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'


const Navbar = () => {


    const link = <>

    <li><NavLink to='/' className={({isActive})=> isActive ? " text-[#da7203] font-bold" : "text-gray-700"} >Home</NavLink></li>

    <li><NavLink to='/allGroups' className={({isActive})=> isActive ? " text-[#da7203] font-bold" : "text-gray-700"} >All Groups</NavLink></li>

    <li><NavLink to='/createGroup' className={({isActive})=> isActive ? " text-[#da7203] font-bold" : "text-gray-700"} >Create Group</NavLink></li>

    <li><NavLink to='/myGroup' className={({isActive})=> isActive ? " text-[#da7203] font-bold" : "text-gray-700"} >My Group</NavLink></li>

    <li><NavLink to='/about' className={({isActive})=> isActive ? " text-[#da7203] font-bold" : "text-gray-700"} >About</NavLink></li>


    </>



    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

             {link}

            </ul>
          </div>
          <img className='w-48' src={logo}  />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-[#da7203]">LogIn</a>
        </div>
      </div>
    );
};

export default Navbar;