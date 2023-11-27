import React, { useState } from 'react';
import ArrowLeft from "../assets/ArrowLeft.svg"
import Pencil from "../assets/Pencil.svg"
import Bell from "../assets/Bell.svg"
import Lock from "../assets/Lock.svg"
import { motion } from 'framer-motion';
import EditProfile from './EditProfile';
import Notifikasi from './Notifikasi';
import Akses from './Akses';
import NotFound from './NotFound';

const Pengaturan = () => {
    const [activeTab, setActiveTab] = useState('editProfile');

    return (
        <div className='flex flex-col sm:flex-row min-h-screen w-full justify-start sm:justify-start items-center sm:items-start font-poppins'>
            <div className='flex flex-row sm:flex-col w-[95vw] sm:w-1/5 h-auto border-4 border-cust-darker-blue py-8 mt-24 sm:mt-32 text-sm sm:text-xl font-normal justify-center sm:justify-start items-center ml-0 sm:ml-44 rounded-3xl gap-0 sm:gap-10'>
                <motion.button 
                    className='flex flex-row w-2/5 sm:w-48 gap-0 sm:gap-1 group justify-center sm:justify-start'
                    onClick={() => setActiveTab('editProfile')}    
                >
                    <motion.div 
                        className='hidden sm:inline items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={ArrowLeft}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-0 sm:pl-2 "
                        whileHover={window.innerWidth >= 540 ? { x: 10 } : { y: -10}}
                    >
                        Pengaturan
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-1/4 sm:w-48 gap-0 sm:gap-1 group justify-center sm:justify-start'
                    onClick={() => setActiveTab('editProfile')}      
                >
                    <motion.div 
                        className='hidden sm:inline items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1] h-7'
                            src={Pencil}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-0 sm:pl-2 "
                        whileHover={window.innerWidth >= 540 ? { x: 10 } : { y: -10}}
                    >
                        Edit Profil
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-1/4 sm:w-48 gap-0 sm:gap-1 group justify-center sm:justify-start'
                    onClick={() => setActiveTab('notifikasi')}      
                >
                    <motion.div 
                        className='hidden sm:inline items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Bell}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-0 sm:pl-2 "
                        whileHover={window.innerWidth >= 540 ? { x: 10 } : { y: -10}}
                    >
                        Notifikasi
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-1/4 sm:w-48 gap-0 sm:gap-1 group justify-center sm:justify-start'
                    onClick={() => setActiveTab('akses')}      
                >
                    <motion.div 
                        className='hidden sm:inline items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Lock}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-0 sm:pl-2 "
                        whileHover={window.innerWidth >= 540 ? { x: 10 } : { y: -10}}
                    >
                        Akses
                    </motion.div>
                </motion.button>
            </div>
            <div className='text-black mt-5 sm:mt-32 w-full'>
                {activeTab === 'editProfile' ? (
                    <EditProfile />
                ) : activeTab === 'notifikasi' ? (
                    <Notifikasi />
                ) : activeTab === 'akses' ? (
                    <Akses />
                ) : (<NotFound/>)}
            </div>
        </div>
    );
};


export default Pengaturan