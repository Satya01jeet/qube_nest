import React, { useState } from 'react'
import {HiMenuAlt3, HiMenuAlt1} from 'react-icons/hi'
import Logo from './Logo.jsx'
import MobileNav from './MobileNav.jsx'

export const Navlinks = [
  {
    id: 1,
    name : 'Rooms',
    link: '/#rooms'
  },
  {
    id: 2,
    name : 'Services',
    link: '/#services'
  },
  {
    id: 3,
    name : 'Contact',
    link: '/#contactus'
  },
  {
    id: 1,
    name : 'About us',
    link: '/#aboutus'
  },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className="bg-white shadow-lg sticky top-0 mx-auto z-20 flex w-full items-center justify-between border-gray-900 px-8">
        <Logo />
        <nav className="links hidden md:flex items-center gap-8 ">
          <ul className='flex items-center gap-6'>
            {Navlinks.map(({id, name, link}) => (
              <li key={id}>
                <a href={link} className='text-teal-800 text-lg font-medium hover:text-amber-400 py-2 transition-colors duration-500'>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex justify-between'> 
          <button className="ml-4 px-3 py-1 bg-cyan-900  hover:bg-amber-400 text-white rounded-lg hidden md:block hover:bg-primary-dark transition-colors duration-300">
            book now
          </button>
          <button className="ml-4 px-3 py-1  bg-cyan-900  hover:bg-amber-400 text-white rounded-lg hidden md:block hover:bg-primary-dark transition-colors duration-300">
            login
          </button>
        </div>
        <div className='md:hidden'>
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} size={30} className="cursor-pointer transition-all"/>):(
            <HiMenuAlt1 onClick={toggleMenu} size={30} className="cursor-pointer transition-all"/>
          )}
        </div>
        <MobileNav showMenu={showMenu}/>
      </div>
    </>
  )
}

export default Navbar