import React, { useState } from 'react';
import ArrowRight from "../assets/ArrowRight.svg"
import { motion } from 'framer-motion';
import Pengumuman from './Pengumuman';
import JadwalKuliah from './JadwalKuliah';
import Tugas from './Tugas';
import Absensi from './Absensi';
import NotFound from './NotFound';

const Akademik = () => {
    const [activeTab, setActiveTab] = useState('pengumuman');

    return (
        <div className='flex flex-row min-h-screen w-full justify-start items-start font-poppins'>
            <div className='text-black mt-32 w-4/5'>
                {activeTab === 'pengumuman' ? (
                    <Pengumuman />
                ) : activeTab === 'jadwal' ? (
                    <JadwalKuliah />
                ) : activeTab === 'tugas' ? (
                    <Tugas />
                ) : activeTab === 'absensi' ? (
                    <Absensi />
                ) : (<NotFound/>)}
            </div>
            <div className='flex flex-col w-1/5 h-auto border-4 border-cust-darker-blue py-8 mt-32 text-xl font-normal justify-end items-center mr-44 rounded-3xl gap-10'>
                <motion.button 
                    className='flex flex-row w-48 gap-1 group justify-end'
                    onClick={() => setActiveTab('pengumuman')}      
                >
                    <motion.div 
                        className="pr-2 "
                        whileHover={{ x: -10 }}
                    >
                        Pengumuman
                    </motion.div>
                    <motion.div 
                        className='flex items-center'
                        whileHover={{ x: 10 }}
                    >
                        <motion.img
                            className='group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1] h-7'
                            src={ArrowRight}
                            alt='missing img'
                        />
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-48 gap-1 group justify-end'
                    onClick={() => setActiveTab('jadwal')}      
                >
                    <motion.div 
                        className="pr-2 "
                        whileHover={{ x: -10 }}
                    >
                        Jadwal Kuliah
                    </motion.div>
                    <motion.div 
                        className='flex items-center'
                        whileHover={{ x: 10 }}
                    >
                        <motion.img
                            className='group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1] h-7'
                            src={ArrowRight}
                            alt='missing img'
                        />
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-48 gap-1 group justify-end'
                    onClick={() => setActiveTab('tugas')}      
                >
                    <motion.div 
                        className="pr-2 "
                        whileHover={{ x: -10 }}
                    >
                        Tugas
                    </motion.div>
                    <motion.div 
                        className='flex items-center'
                        whileHover={{ x: 10 }}
                    >
                        <motion.img
                            className='group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1] h-7'
                            src={ArrowRight}
                            alt='missing img'
                        />
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-48 gap-1 group justify-end'
                    onClick={() => setActiveTab('absensi')}      
                >
                    <motion.div 
                        className="pr-2 "
                        whileHover={{ x: -10 }}
                    >
                        Absensi
                    </motion.div>
                    <motion.div 
                        className='flex items-center'
                        whileHover={{ x: 10 }}
                    >
                        <motion.img
                            className='group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1] h-7'
                            src={ArrowRight}
                            alt='missing img'
                        />
                    </motion.div>
                </motion.button>
            </div>
        </div>
    )
}

export default Akademik