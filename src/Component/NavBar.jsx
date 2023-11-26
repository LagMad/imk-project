import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.svg';

const NavBar = () => {
    return (
        <div className='flex flex-row fixed justify-center items-center text-center min-w-full h-20 bg-cust-darker-blue drop-shadow-2xl text-white font-poppins'>
            <div className='w-1/4 font-extrabold text-2xl mx-auto'>
                Parent<span className='text-cust-orange italic font-black'>Link</span>
            </div>
            <div className='w-1/2 flex-row justify-center items-center mx-auto space-x-4'>
                <Link to="/" className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl mx-auto'>
                Home
                </Link>
                <Link to="/tentang" className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                Tentang
                </Link>
                <Link to="/akademik" className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                Akademik
                </Link>
                <Link to="/kontak" className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                Kontak
                </Link>
                <Link to="/biodata" className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                Biodata
                </Link>
            </div>
            <div className='flex w-1/4 rounded-full justify-center items-center'>
                <button className='flex rounded-full justify-center items-center mx-auto bg-white p-3'>
                <img
                    className='h-6'
                    src={Profile}
                    alt='missing img'
                />
                </button>
            </div>
        </div>
    );
};

export default NavBar;
