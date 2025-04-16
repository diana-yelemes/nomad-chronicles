import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header className='max-padd-container flexCenter py-4 bg-white'>
            {/* logo */}
            <Link to={'http://localhost:5173/'} className='bold-24 flex items-baseline'>
                <img src={logo} alt="" height={24} width={24} className='hidden sm:flex' />
                <span className='text-secondary pl-2'>Food</span>ora
            </Link>
        </header>
    )
}

export default Header