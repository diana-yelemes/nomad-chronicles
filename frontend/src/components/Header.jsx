import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import Navbar from './Navbar';
import { CgMenuLeft } from 'react-icons/cg';
import { RiUserLine } from 'react-icons/ri';
import { TbUserCircle } from 'react-icons/tb';
import { FigureContext } from '../context/FigureContext';

const Header = () => {
    const { token, logout, navigate } = useContext(FigureContext); // Use logout function
    const [active, setActive] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                if (menuOpened) {
                    setMenuOpened(false);
                }
            }
            setActive(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuOpened]);

    return (
        <header className="fixed top-0 w-full left-0 right-0 z-50">
            <div
                className={`${active ? 'bg-white py-2.5' : 'py-3 bg-primary'} w-full px-4 flexBetween 
        border-b border-slate-900/10 rounded transition-all duration-300`}
            >
                {/* Logo */}
                <Link to="/" className="flex-1 flex items-center justify-start">
                    <img
                        src={logoImg}
                        alt="Nomad Chronicles"
                        className="hidden sm:flex mr-2"
                        height={36}
                        width={36}
                    />
                    <h4 className="bold-20">Nomad Chronicles</h4>
                </Link>

                {/* Navigation Links */}
                <div className="flex-1">
                    <Navbar
                        menuOpened={menuOpened}
                        toggleMenu={toggleMenu}
                        containerStyles={`${
                            menuOpened
                                ? 'flex flex-col gap-y-16 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl'
                                : 'hidden'
                        } xl:flex xl:flex-row xl:justify-center xl:gap-x-8 xl:gap-x-4 medium-15 px-2 py-1`}
                    />
                </div>

                {/* Right Sidebar */}
                <div className="flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10">
                    <CgMenuLeft
                        onClick={toggleMenu}
                        className="text-2xl xl:hidden cursor-pointer"
                    />
                    <div className="flex items-center gap-x-4">
                        {token ? (
                            <>
                                <button
                                    onClick={() => navigate('/profile')}
                                    className="btn-light px-4 py-2 rounded"
                                >
                                    Profile
                                </button>
                                <button
                                    onClick={logout}
                                    className="btn-dark px-4 py-2 rounded"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => navigate('/login')}
                                className="btn-outline flexCenter gap-x-2"
                            >
                                Login <RiUserLine />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
