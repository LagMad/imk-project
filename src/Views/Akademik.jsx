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
        <div className='flex flex-col-reverse sm:flex-row min-h-screen w-full justify-center sm:justify-start items-center sm:items-start font-poppins'>
            <div className='text-black mt-5 sm:mt-32 w-4/5'>
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
            <div className='flex flex-row sm:flex-col w-[95vw] sm:w-1/5  h-auto border-4 border-cust-darker-blue py-8 mt-24 sm:mt-32 text-sm sm:text-xl font-normal justify-center sm:justify-end items-center mr-0 sm:mr-44 rounded-3xl gap-0 sm:gap-10'>
                <motion.button 
                    className='flex flex-row w-2/6 sm:w-48 gap-1 group justify-center sm:justify-end'
                    onClick={() => setActiveTab('pengumuman')}      
                >
                    <motion.div 
                        className="pr-0 sm:pr-2"
                        whileHover={window.innerWidth >= 540 ? { x: -10 } : { y: -10}}
                    >
                        Pengumuman
                    </motion.div>
                    <motion.div 
                        className='hidden sm:inline items-center'
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
                    className='flex flex-row w-[80px] sm:w-48 gap-1 group justify-center sm:justify-end'
                    onClick={() => setActiveTab('jadwal')}      
                >
                    <motion.div 
                        className="pr-0 sm:pr-2"
                        whileHover={window.innerWidth >= 540 ? { x: -10 } : { y: -10}}
                    >
                        Jadwal Kuliah
                    </motion.div>
                    <motion.div 
                        className='hidden sm:inline items-center'
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
                    className='flex flex-row w-[80px] sm:w-48 gap-1 group justify-center sm:justify-end'
                    onClick={() => setActiveTab('tugas')}      
                >
                    <motion.div 
                        className="pr-0 sm:pr-2"
                        whileHover={window.innerWidth >= 540 ? { x: -10 } : { y: -10}}
                    >
                        Tugas
                    </motion.div>
                    <motion.div 
                        className='hidden sm:inline items-center'
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
                    className='flex flex-row w-[80px] sm:w-48 gap-1 group justify-center sm:justify-end'
                    onClick={() => setActiveTab('absensi')}      
                >
                    <motion.div 
                        className="pr-0 sm:pr-2"
                        whileHover={window.innerWidth >= 540 ? { x: -10 } : { y: -10}}
                    >
                        Absensi
                    </motion.div>
                    <motion.div 
                        className='hidden sm:inline items-center'
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