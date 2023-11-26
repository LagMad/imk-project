import React from 'react';
import ArrowLeft from '../assets/ArrowLeft1.svg';
import ArrowRight from '../assets/ArrowRight1.svg';
import { motion } from 'framer-motion';

const Pengumuman = () => {
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
        <div className='flex flex-col min-h-screen w-full justify-start items-center font-poppins gap-8 text-black'>
            <div className='flex flex-col gap-8 w-[900px] justify-start items-center text-center'>
                <div className='font-bold text-white bg-cust-darker-blue hover:text-cust-orange rounded-full w-[700px] text-center py-2 text-4xl'>
                PENGUMUMAN
                </div>
                <div className='flex flex-row gap-6'>
                <motion.div
                    className='flex rounded-full justify-center items-center mx-auto bg-cust-darker-blue hover:bg-cust-orange my-auto p-3'
                    whileHover="hover"
                    variants={arrowVariantsLeft}
                >
                    <img className='h-6' src={ArrowLeft} alt='missing img' />
                </motion.div>
                <div className='w-[700px] text-xl font-normal text-justify border-2 border-cust-darker-blue rounded-3xl p-4'>
                    Selalu terhubung dengan langkah-langkah penting dalam perjalanan akademis anak Anda. Di ruang ini, kami membawa Anda ke dunia pemberitahuan yang mendalam dan informatif. Dari pengumuman perubahan jadwal hingga berita terbaru seputar kegiatan kampus, setiap informasi disajikan dengan cermat. Mari bersama-sama merasakan detak perubahan dan sukses dalam perjalanan pendidikan anak tercinta. Selamat datang di panggung pengumuman, di mana setiap berita membentuk jejak kecerdasan dan prestasi masa depan. Disini, setiap kata menjadi pencerita perjalanan akademis, dan setiap pengumuman adalah sinar kemajuan di kehidupan pendidikan mereka.
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
    );
};

export default Pengumuman;
