import React from 'react'
import Instagram from '../assets/instagram.svg'
import Tiktok from '../assets/tiktok.svg'
import Twitter from '../assets/twitter.svg'
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div 
            className=' min-w-full h-auto bg-cust-darker-blue font-poppins text-white justify-center items-center pt-0 sm:pt-12 pb-5 drop-shadow-2xl'
            initial={{ opacity: 0, y: 150 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                type: "spring",
                duration: 2.0,
                damping: 10,
                stiffness: 100,
                },
            }}
        >
            <div className='flex flex-col sm:flex-row justify-center items-center'>
                <div className='font-extrabold text-2xl mx-auto mb-10 sm:mb-0 mt-10 sm:mt-0'>
                    Parent<span className='text-cust-orange italic font-black'>Link</span>
                </div>
                <div className='flex flex-col mx-auto mb-10 sm:mb-0'>
                    <div className='font-semibold text-center mb-1 sm:mb-2 text-xl'>
                        FOLLOW US ON
                    </div>
                    <div className='flex flex-row gap-4'>
                        <button className='bg-white rounded-full h-12 w-12 justify-center items-center mx-auto my-auto'>
                            <img
                                className='h-8 self-center mx-auto my-auto mt-1'
                                src={Instagram}
                                alt='missing img'
                            />
                        </button>
                        <button className='bg-white rounded-full h-12 w-12 justify-center items-center mx-auto my-auto'>
                            <img
                                className='h-8 self-center mx-auto my-auto'
                                src={Tiktok}
                                alt='missing img'
                            />
                        </button>
                        <button className='bg-white rounded-full h-12 w-12 justify-center items-center mx-auto my-auto'>
                            <img
                                className='h-7 self-center mx-auto my-auto mt-1'
                                src={Twitter}
                                alt='missing img'
                            />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col text-right mx-auto font-bold text-xl self-center justify-center items-right'>
                    TAUTAN TERKAIT
                    <button className='font-medium text-md sm:text-lg text-center sm:text-right text-white hover:text-cust-orange active:text-cust-orange hover:font-bold active:font-bold'>
                        Home
                    </button>
                    <button className='font-medium text-md sm:text-lg text-center sm:text-right text-white hover:text-cust-orange active:text-cust-orange hover:font-bold active:font-bold'>
                        Tentang
                    </button>
                    <button className='font-medium text-md sm:text-lg text-center sm:text-right text-white hover:text-cust-orange active:text-cust-orange hover:font-bold active:font-bold'>
                        Akademik
                    </button>
                    <button className='font-medium text-md sm:text-lg text-center sm:text-right text-white hover:text-cust-orange active:text-cust-orange hover:font-bold active:font-bold'>
                        Kontak
                    </button>
                </div>
            </div>
            <div className='w-[80vw] h-1 rounded-full border-white bg-white self-center mx-auto my-7'/>
            <div className='text-center text-white text-sm sm:text-lg'>
                &copy; Tim Pengembang Parent Link 2023.
            </div>
        </motion.div>
    )
}

export default Footer