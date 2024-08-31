import React from 'react'
import { Navlinks } from './Navbar'
import Logo from './Logo'

const MobileNav = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 bottom-0 h-screen w-[75%] z-20 flex flex-col justify-start bg-transparent backdrop-blur-md shadow-xl px-8 pt-16 pb-6 rounded-r-xl transition-all duration-200`}>
        <a href="#"><Logo /></a>
        <nav className='mt-12'>
            <ul className='text-lg'>
                {Navlinks.map((data) => (
                    <li key={data.id} className=''>
                        <a href="data.link" className='text-black font-bold mb-5 inline-block'>{data.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default MobileNav