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
        <div className='flex flex-row min-h-screen w-full justify-start items-start font-poppins'>
            <div className='flex flex-col w-1/5 h-auto border-4 border-cust-darker-blue py-8 mt-32 text-xl font-normal justify-start items-center ml-44 rounded-3xl gap-10'>
                <motion.button 
                    className='flex flex-row w-40 gap-1  group'
                    onClick={() => setActiveTab('editProfile')}    
                >
                    <motion.div 
                        className='flex items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={ArrowLeft}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-2 "
                        whileHover={{ x: 10 }}
                    >
                        Pengaturan
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-40 gap-1  group'
                    onClick={() => setActiveTab('editProfile')}      
                >
                    <motion.div 
                        className='flex items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1] h-7'
                            src={Pencil}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-2 "
                        whileHover={{ x: 10 }}
                    >
                        Edit Profil
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-40 gap-1  group'
                    onClick={() => setActiveTab('notifikasi')}      
                >
                    <motion.div 
                        className='flex items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Bell}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-2 "
                        whileHover={{ x: 10 }}
                    >
                        Notifikasi
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-40 gap-1  group'
                    onClick={() => setActiveTab('akses')}      
                >
                    <motion.div 
                        className='flex items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Lock}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-2 "
                        whileHover={{ x: 10 }}
                    >
                        Akses
                    </motion.div>
                </motion.button>
            </div>
            <div className='text-black mt-32 w-full'>
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