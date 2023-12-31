import React from 'react';
import { motion } from 'framer-motion';
// import NotFound from './NotFound';
import Email from "../assets/Email.svg"
import Instagram from "../assets/InstagramBlack.svg"
import Twitter from "../assets/TwitterBlack.svg"
import Website from "../assets/Website.svg"
import ArrowLeft from '../assets/ArrowLeft1.svg';
import ArrowRight from '../assets/ArrowRight1.svg';

const Kontak = () => {
    // const [activeTab, setActiveTab] = useState('editProfile');


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
        <div className='flex flex-col sm:flex-row min-h-screen w-full justify-start sm:justify-start items-center sm:items-start font-poppins'>
            <motion.div 
                className='flex flex-row sm:flex-col w-[95vw] sm:w-1/5 h-auto border-4 border-cust-darker-blue py-8 mt-24 sm:mt-32 text-sm sm:text-xl font-normal justify-center sm:justify-start items-center ml-0 sm:ml-44 rounded-3xl gap-0 sm:gap-10'
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
            >
                <motion.button 
                    className='flex flex-row w-1/4 sm:w-48 gap-0 sm:gap-1 group justify-center sm:justify-start'
                    onClick={() => window.open('https://mail.google.com/mail/u//', '_blank')} 
                >
                    <motion.div 
                        className='hidden sm:inline items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white h-7 group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Email}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-0 sm:pl-2 "
                        whileHover={window.innerWidth >= 540 ? { x: 10 } : { y: -10}}
                    >
                        Email
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-1/4 sm:w-48 gap-0 sm:gap-1 group justify-center sm:justify-start'
                    onClick={() => window.open('https://www.instagram.com/', '_blank')}    
                >
                    <motion.div 
                        className='hidden sm:inline items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white h-8 group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Instagram}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-0 sm:pl-2 "
                        whileHover={window.innerWidth >= 540 ? { x: 10 } : { y: -10}}
                    >
                        Instagram
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-1/4 sm:w-48 gap-0 sm:gap-1 group justify-center sm:justify-start'
                    onClick={() => window.open('https://www.twitter.com/', '_blank')}
                >
                    <motion.div 
                        className='hidden sm:inline items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white h-7 group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Twitter}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-0 sm:pl-2 "
                        whileHover={window.innerWidth >= 540 ? { x: 10 } : { y: -10}}
                    >
                        Twitter
                    </motion.div>
                </motion.button>
                <motion.button 
                    className='flex flex-row w-1/4 sm:w-48 gap-0 sm:gap-1 group justify-center sm:justify-start'
                    onClick={() => window.open('https://www.ub.ac.id/', '_blank')}   
                >
                    <motion.div 
                        className='hidden sm:inline items-center'
                        whileHover={{ x: -10 }}
                    >
                        <motion.img
                            className='text-white h-7 group transition-transform transform group-hover:scale-x-[-1] group-focus:scale-x-[-1]'
                            src={Website}
                            alt='missing img'
                        />
                    </motion.div>
                    <motion.div 
                        className="pl-0 sm:pl-2 "
                        whileHover={window.innerWidth >= 540 ? { x: 10 } : { y: -10}}
                    >
                        Website
                    </motion.div>
                </motion.button>
            </motion.div>
            <motion.div 
                className='flex flex-col w-full justify-start items-center font-poppins gap-8 text-black mt-5 sm:mt-32'
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
            >
                <div className='flex flex-col gap-8 w-[95vw] sm:w-[900px] justify-start items-center text-center'>
                    <div className='font-bold text-white bg-cust-darker-blue hover:text-cust-orange rounded-full w-[95vw] sm:w-[700px] text-center py-2 text-4xl'>
                    CONTACT US
                    </div>
                    <div className='flex flex-row gap-6 w-[95vw] sm:w-full'>
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
            </motion.div>
        </div>
    )
}

export default Kontak