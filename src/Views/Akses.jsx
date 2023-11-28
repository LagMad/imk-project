import React from 'react'
import { motion } from 'framer-motion';

const Akses = () => {
    return (
        <motion.div 
            className='flex flex-col w-full justify-start items-center font-poppins'
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
        >
            <div className='flex flex-col gap-8 w-[95vw] sm:w-[700px] justify-start items-center text-center'>
                <div className='font-bold w-[95vw] sm:w-[700px] text-2xl sm:text-4xl text-center mb-0 sm:mb-10'>
                    Atur Akses
                </div>
                <div className='flex text-[16px] sm:text-xl w-[80vw] sm:w-auto'>
                    Melalui pengaturan privasi, kami memberikan kendali penuh kepada Anda untuk melindungi dan menghormati keamanan data akademis anak tercinta.
                </div>
                <div className='flex flex-col sm:flex-row gap-12'>
                    <div className='flex flex-col gap-2 font-semibold'>
                        Email Akses
                        <div className='font-normal'>
                            email@gmail.com
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 font-semibold'>
                        Lokasi
                        <div className='font-normal'>
                            Malang, Indonesia
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 font-semibold'>
                        Tanggal Akses
                        <div className='font-normal'>
                            12 November 2023
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 font-semibold'>
                        Hapus Akses
                        <button className='font-normal border-2 border-cust-red rounded-lg hover:bg-cust-red hover:text-white hover:font-bold'>
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Akses