import React, { useState } from 'react';
import ArrowDown from '../assets/ArrowDown.svg';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../assets/profile.svg';

const NavBar = () => {
    const jadwalData = [
        { hari: "Selasa", jam: "09:30 - 12:00", matkul: 'Jaringan Komputer', kelas: "TIF-G", dosen: "Pak Jono" },
        { hari: "Rabu", jam: "13:00 - 15:30", matkul: 'Pemrograman Web', kelas: "TIF-H", dosen: "Ibu Rina" },
        { hari: "Kamis", jam: "10:00 - 11:30", matkul: 'Basis Data', kelas: "TIF-A", dosen: "Pak Budi" },
        { hari: "Jumat", jam: "08:00 - 10:30", matkul: 'Sistem Operasi', kelas: "TIF-C", dosen: "Ibu Sarah" },
        { hari: "Senin", jam: "15:00 - 17:30", matkul: 'Algoritma dan Struktur Data', kelas: "TIF-D", dosen: "Pak Andi" },
        { hari: "Selasa", jam: "13:30 - 15:00", matkul: 'Pemrograman Mobile', kelas: "TIF-E", dosen: "Ibu Maya" },
    ];
    
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedSemester, setSelectedSemester] = useState('Pilih Semester');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSemesterSelect = (semester) => {
        setSelectedSemester(semester);
        toggleDropdown();
    };

    return (
        <div className='flex flex-row fixed justify-center items-center text-center min-w-full h-20 bg-cust-darker-blue drop-shadow-2xl text-white font-poppins mx-auto'>
            <button 
                className='w-1/4 font-extrabold text-2xl mx-auto'
                onClick={() => navigate('/')}
            >
                Parent<span className='text-cust-orange italic font-black'>Link</span>
            </button>
            <div className='w-1/2 flex-row justify-center items-center mx-auto space-x-4'>
                <button onClick={() => navigate('/')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl mx-auto'>
                    Home
                </button>
                <button onClick={() => navigate('/tentang')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                    Tentang
                </button>
                <button onClick={() => navigate('/akademik')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                    Akademik
                </button>
                <button onClick={() => navigate('/kontak')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                    Kontak
                </button>
                <button onClick={() => navigate('/biodata')} className='hover:bg-cust-orange active:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                    Biodata
                </button>
            </div>
            <div className='flex w-1/4 rounded-full justify-center items-center'>
                {/* <Link to="/pengaturan" className='relative flex rounded-full justify-center items-center mx-auto bg-white p-3'>
                    <img
                        className='h-6'
                        src={Profile}
                        alt='missing img'
                    />
                    <div className='absolute right-[48px] w-44 overflow-hidden'>
                        Mazda RX8
                    </div>
                </Link> */}
                <button
                    onClick={toggleDropdown}
                    className='relative flex rounded-full justify-center items-center mx-auto bg-white p-3'
                >
                    <img
                        className='h-6'
                        src={Profile}
                        alt='missing img'
                    />
                    <div className='absolute right-[48px] w-44 overflow-hidden'>
                        Mazda RX8
                    </div>
                    {isOpen && (
                        <div className='absolute top-[60px] -left-[160px] mt-2 w-52 text-black bg-white border rounded shadow-lg'>
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
                                    className='py-2 px-4 hover:bg-cust-red hover:text-white cursor-pointer block sm:hidden'
                                >
                                    Sign Out
                                </li>
                                <li
                                    onClick={() => navigate('/')}
                                    className='py-2 px-4 hover:bg-cust-red hover:text-white cursor-pointer block sm:hidden'
                                >
                                    Sign Out
                                </li>
                                <li
                                    onClick={() => navigate('/')}
                                    className='py-2 px-4 hover:bg-cust-red hover:text-white cursor-pointer block sm:hidden'
                                >
                                    Sign Out
                                </li>
                                <li
                                    onClick={() => navigate('/')}
                                    className='py-2 px-4 hover:bg-cust-red hover:text-white cursor-pointer block sm:hidden'
                                >
                                    Sign Out
                                </li>
                                <li
                                    onClick={() => navigate('/')}
                                    className='py-2 px-4 hover:bg-cust-red hover:text-white cursor-pointer block sm:hidden'
                                >
                                    Sign Out
                                </li>
                                <li
                                    onClick={() => navigate('/')}
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