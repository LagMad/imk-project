import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NotFound from './NotFound';
import Email from "../assets/Email.svg"
import Instagram from "../assets/InstagramBlack.svg"
import Twitter from "../assets/TwitterBlack.svg"
import Website from "../assets/Website.svg"
import ArrowLeft from '../assets/ArrowLeft1.svg';
import ArrowRight from '../assets/ArrowRight1.svg';

const Kontak = () => {
    const [activeTab, setActiveTab] = useState('editProfile');

    const arrowVariantsRight = {
        hover: {
        x: [0, 10], // Define a simple x-axis wiggle animation
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
            times: [0, 0.5], // Control the timing of each wiggle
        },
        },
    };

    const arrowVariantsLeft = {
        hover: {
        x: [0, -10], // Define a simple x-axis wiggle animation
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
            times: [0, 0.5], // Control the timing of each wiggle
        },
        },
    };

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
                            className='text-white h-7 group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Email}
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
                            className='text-white h-8 group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Instagram}
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
                            className='text-white h-7 group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Twitter}
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
                            className='text-white h-7 group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Website}
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
            <div className='flex flex-col min-h-screen w-full justify-start items-center font-poppins gap-8 text-black mt-32'>
                <div className='flex flex-col gap-8 w-[900px] justify-start items-center text-center'>
                    <div className='font-bold text-white bg-cust-darker-blue hover:text-cust-orange rounded-full w-[700px] text-center py-2 text-4xl'>
                    CONTACT US
                    </div>
                    <div className='flex flex-row gap-6'>
                    <motion.div
                        className='flex rounded-full justify-center items-center mx-auto bg-cust-darker-blue hover:bg-cust-orange my-auto p-3'
                        whileHover="hover"
                        variants={arrowVariantsLeft}
                    >
                        <img className='h-6' src={ArrowLeft} alt='missing img' />
                    </motion.div>
                    <div className='w-[700px] text-xl font-normal text-center border-2 border-cust-darker-blue rounded-3xl p-4'>
                        Email
                        <br/>
                        Instagram
                        <br/>
                        Twitter
                        <br/>
                        Website
                    </div>
                    <motion.div
                        className='flex rounded-full justify-center items-center mx-auto bg-cust-darker-blue hover:bg-cust-orange my-auto p-3'
                        whileHover="hover"
                        variants={arrowVariantsRight}
                    >
                        <img className='h-6' src={ArrowRight} alt='missing img' />
                    </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontak