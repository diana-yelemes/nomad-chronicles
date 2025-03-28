import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaSquarePlus } from "react-icons/fa6"
import { FaListAlt } from "react-icons/fa"
import { MdFactCheck } from "react-icons/md"
import { BiLogOut } from "react-icons/bi"
import logo from "../assets/logo.png"


const Sidebar = ({ token, setToken }) => {
    return (
        <div className='max-sm:flexCenter max-xs:pb-3 rounded bg-white pb-3 sm:w-1/5 sm:min-h-screen'>
            <div className='flex flex-col gap-y-6 max-sm:items-center sm:flex-col pt-4 sm:pt-14'>
                {/* logo */}
                <Link to={'/'} className='bold-24 flex items-baseline sm:pl-12'>
                    <img src={logo} alt="" height={24} width={24} className='' />
                    <span className='text-secondary pl-2 sm:hidden lg:flex'>Nomad Chronicles</span>
                </Link>
                <div className='flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}>
                        <FaSquarePlus />
                        <div className='hidden lg:flex'>Add Figures</div>
                    </NavLink>
                    <NavLink to={'/list'} className={({ isActive }) => isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}>
                        <FaListAlt />
                        <div className='hidden lg:flex'>List Figures</div>
                    </NavLink>
                    <NavLink to={'/favorites'} className={({ isActive }) => isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}>
                        <MdFactCheck />
                        <div className='hidden lg:flex'>Figures</div>
                    </NavLink>
                    {/* logout button at the bottom */}
                    <div className='max-sm:ml-5 sm:mt-72'>
                        {token && (
                            <button onClick={() => setToken('')} className='flexStart gap-x-2 sm:pl-12 p-5 medium-15 text-red-500 cursor-pointer h-10 rounded-xl'>
                                <BiLogOut className='text-lg' />
                                <div className='hidden lg:flex'>Logout</div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar