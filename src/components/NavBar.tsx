import React from 'react'
import { NavLink } from 'react-router';

const NavBar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-white px-3 py-2 rounded-md text-lg font-medium bg-indigo-900'
      : 'text-indigo-200 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium';  
      
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                React Jobs
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                |
                <NavLink to='/jobs' className={linkClass}>
                  Jobs
                </NavLink>
                |
                <NavLink to='/add-job' className={linkClass}>
                  Add Job
                </NavLink>
                |
                <NavLink to='/part-one' className={linkClass}>
                  Part One
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
