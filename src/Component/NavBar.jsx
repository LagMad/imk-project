import React, { useState } from 'react';

import {  useNavigate } from 'react-router-dom';
import Profile from '../assets/profile.svg';

const NavBar = () => {
    
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-row fixed justify-center items-center text-center w-screen h-20 bg-cust-darker-blue drop-shadow-2xl text-white font-poppins mx-auto'>
            <button 
                className='w-1/2 2xl:w-1/4 font-extrabold text-lg 2xl:text-2xl mx-auto'
                onClick={() => navigate('/')}
            >
                Parent<span className='text-cust-orange italic font-black'>Link</span>
            </button>
            <div className='w-1/2 flex-row justify-center items-center mx-auto space-x-4 hidden 2xl:inline'>
                <button onClick={() => navigate('/')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl mx-auto hidden 2xl:inline'>
                    Home
                </button>
                <button onClick={() => navigate('/tentang')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl hidden 2xl:inline'>
                    Tentang
                </button>
                <button onClick={() => navigate('/akademik')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl hidden 2xl:inline'>
                    Akademik
                </button>
                <button onClick={() => navigate('/kontak')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl hidden 2xl:inline'>
                    Kontak
                </button>
                <button onClick={() => navigate('/biodata')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl hidden 2xl:inline'>
                    Biodata
                </button>
            </div>
            <div className='flex w-1/2 2xl:w-1/4 rounded-full justify-center items-center'>
                <button
                    onClick={toggleDropdown}
                    className='relative flex rounded-full justify-center items-center mx-auto bg-white p-2 sm:p-3'
                >
                    <img
                        className='h-6'
                        src={Profile}
                        alt='missing img'
                    />
                    <div className='absolute right-[48px] w-44 overflow-hidden hidden 2xl:inline'>
                        Mazda RX8
                    </div>
                    {isOpen && (
                        <div className='absolute top-[55px] sm:top-[60px] -left-[110px] sm:-left-[160px] mt-2 w-52 text-black bg-white border rounded shadow-lg'>
                            {/* Dropdown content goes here */}
                            <ul className='flex flex-col'>
                                <li
                                    onClick={() => navigate('/pengaturan')}
                                    className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                    Pengaturan
                                </li>
                                <li
                                    onClick={() => navigate('/')}
                                    className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer inline 2xl:hidden'
                                >
                                    Home
                                </li>
                                <li
                                    onClick={() => navigate('/tentang')}
                                    className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer inline 2xl:hidden'
                                >
                                    Tentang
                                </li>
                                <li
                                    onClick={() => navigate('/akademik')}
                                    className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer inline 2xl:hidden'
                                >
                                    Akademik
                                </li>
                                <li
                                    onClick={() => navigate('/kontak')}
                                    className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer inline 2xl:hidden'
                                >
                                    Kontak
                                </li>
                                <li
                                    onClick={() => navigate('/')}
                                    className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer inline 2xl:hidden'
                                >
                                    Biodata
                                </li>
                                <li
                                    onClick={() => navigate('/no-login')}
                                    className='py-2 px-4 hover:bg-cust-red hover:text-white cursor-pointer'
                                >
                                    Sign Out
                                </li>
                            </ul>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default NavBar;