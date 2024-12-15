import React from 'react'
import {TbHomeFilled} from 'react-icons/tb'
import {IoLibrary, IoMailOpen} from 'react-icons/io5'
import {FaRegWindowClose} from 'react-icons/fa'
import {Link, NavLink} from 'react-router-dom'

const Navbar = ({containerStyles, toggleMenu, menuOpened}) => {
    const navOptions = [
        { label: 'Home', to: '/' , icon: <TbHomeFilled />},
        { label: 'Figures', to: '/figures', icon: <IoLibrary />},
        { label: 'Contact', to: 'mailto:info@nomadchronicles.com', icon: <IoMailOpen />},
    ]

  return (
    <nav className={containerStyles}>
        {/* close button */}
        {menuOpened && (
            <>
            <FaRegWindowClose onClick={toggleMenu} className='text-xl self-end cursor-pointer relative left-1'></FaRegWindowClose>
            {/* logo */}
            <Link to ={'/'} className='bold-22 mb-10'>
            <h4 className='text-secondary'>Nomad Chronicles</h4>
            </Link>
            </>
        )}
        {navOptions.map(({label, to, icon}) =>(
            <div key={label} className='inline-flex relative top-1'>
                {to.startsWith('mailto') ? (
                    <a onClick={menuOpened ? toggleMenu : undefined} href = {to} className='flexCenter gap-x-2'>
                        <span className='text-xl'>{icon}</span>
                        <span className='medium-16'>{label}</span>
                    </a>
            )
            :
            (   <NavLink to ={to} className={({isActive})=> isActive ? "active-link fixCenter gap-x-2" : "fixCenter gap-x-2"}>
                    <span className='text-xl'>{icon}</span>
                    <span className='medium-16'>{label}</span>
                </NavLink>)
                }
            </div>
        ))}
    </nav>
  )
}

export default Navbar