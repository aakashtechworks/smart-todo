import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white p-5'>
        <nav className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
            <h1 className='text-2xl font-bold'>Smart Todo</h1>
            <ul className='flex gap-6 '>
                <li ><NavLink to="/" className={({isActive})=> isActive? "text-sky-400 font-semibold" : "text-white hover:text-sky-300 transition-colors"}>
                    Home
                    </NavLink>
                </li>
                <li ><NavLink to="/about" className={({isActive})=> isActive? "text-sky-400 font-semibold" : "text-white hover:text-sky-300 transition-colors"}>
                    About
                    </NavLink>
                </li>
                <li ><NavLink to="/contact" className={({isActive})=> isActive? "text-sky-400 font-semibold" : "text-white hover:text-sky-300 transition-colors"}>
                    Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header