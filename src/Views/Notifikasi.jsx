import React from 'react'
import { motion } from 'framer-motion';

const Notifikasi = () => {
    return (
        <motion.div 
            className='flex flex-col w-full justify-start items-center font-poppins gap-8'
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
        >
            <div className='flex flex-col gap-8 w-[95vw] sm:w-[700px] justify-start items-center text-center'>
                <div className='flex text-2xl sm:text-4xl font-bold'>
                    Nyalakan Notifikasi?
                </div>
                <div className='flex w-[80vw] sm:w-auto text-[16px] sm:text-xl'>
                    "Nikmati kemudahan dalam mengawasi kehadiran anak Anda! Aktifkan notifikasi  untuk selalu mendapatkan informasi terkini. Dengan notifikasi ini, Anda akan selalu tahu kapan anak Anda hadir dalam setiap sesi kuliah. Notifikasi akan dikirim ke email yang anda gunakan untuk mengakses situs kami.  Sekarang, Anda tidak akan kehilangan momen berharga dalam perjalanan akademis mereka."
                </div>
                <div className='flex flex-row mt-5 sm:mt-20 gap-10 sm:gap-52'>
                    <button className='w-1/2 sm:w-52 border-2 border-cust-red text-[16px] sm:text-xl font-semibold rounded-lg hover:text-white hover:bg-cust-red'>
                        Jangan Nyalakan
                    </button>
                    <button className='w-1/2 sm:w-52 border-2 border-cust-green text-[16px] sm:text-xl font-semibold rounded-lg hover:text-white hover:bg-cust-green'>
                        Nyalakan
                    </button>
                </div>
            </div>
            
        </motion.div>
    )
}

export default Notifikasi