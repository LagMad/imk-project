import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-auto min-w-full font-poppins font-bold text-center text-md sm:text-xl justify-center items-center">
            <div className='flex flex-col text-black text-md sm:text-xl gap-8 mx-[10vw] sm:mx-80 mt-32 mb-20'>
                <motion.div 
                    className='text-2xl sm:text-3xl font-black'
                    initial={{y: -100, opacity: 0}}
                    whileInView={{y: 10, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    Selamat Datang, Orang Tua!
                </motion.div>
                <motion.div 
                    className='font-semibold'
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    Kami gembira menyambut Anda di portal resmi kami.   Di sini, Anda memiliki akses eksklusif untuk mengawasi perkembangan akademis anak Anda dengan mudah.
                </motion.div>
                <motion.div 
                    className='font-semibold'
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    Cari tahu informasi terkini tentang jadwal kuliah, absensi, dan pengumuman penting yang berkaitan dengan perjalanan akademis anak Anda. Kami berkomitmen untuk menyediakan pengalaman yang transparan, membantu Anda mendukung mereka setiap langkahnya.
                </motion.div>
                <motion.div 
                    className='font-semibold'
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    Jelajahi fitur-fitur kami yang dirancang khusus untuk kebutuhan Anda sebagai orang tua. Terima kasih telah memilih kami sebagai mitra dalam mendukung kesuksesan akademis anak tercinta.
                </motion.div>
            </div>
            <motion.div 
                className='h-1 w-[80vw] bg-cust-darker-blue rounded-full mb-20'
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
            />
            <div className='flex flex-col sm:flex-row gap-10 mx-auto mb-0 sm:mb-20 justify-center items-center my-auto'>
                <motion.div 
                    className='flex flex-col w-80 h-72 justify-center items-center my-auto'
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    <div className='bg-cust-darker-blue w-80 font-extrabold text-white rounded-3xl py-10 text-3xl'>
                        &copy; Parent<span className='text-cust-orange italic font-black'>Link</span>
                    </div>
                    <div className='text-center sm:text-left w-80 mt-4 font-semibold'>
                        Tentang Website: Pelajari lebih lanjut tentang tujuan dan visi dari Parent Link yang kami bangun bersama.
                    </div>
                </motion.div>
                <motion.div 
                    className='flex flex-col-reverse sm:flex-col w-80 h-72 justify-center items-center my-auto gap-5'
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    <div className='text-center sm:text-left mb-4 font-semibold'>
                        Akademik: Temukan informasi terkait jadwal kuliah, absensi, dan pengumuman penting lainnya yang mendukung perjalanan akademis anak Anda.
                    </div>
                    <div className='h-32 bg-books font-extrabold w-80 text-white rounded-3xl text-3xl bg-cover bg-bottom bg-no-repeat'/>
                </motion.div>
                <motion.div 
                    className='flex flex-col w-80 h-72 justify-center items-center my-auto'
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    <div className='w-80 h-32 bg-contact font-extrabold text-white rounded-3xl text-3xl bg-cover bg-center bg-no-repeat'/>
                    <div className='text-center sm:text-left mt-4 font-semibold'>
                        Hubungi kami untuk pertanyaan, umpan balik, atau dukungan teknis. Kami di sini untuk membantu!
                    </div>
                </motion.div>
            </div>
            <motion.button 
                className='text-xl border-2 bg-transparent hover:bg-cust-orange active:bg-cust-orange border-black hover:border-cust-orange active:border-cust-orange rounded-full py-1 w-36 font-extrabold text-black hover:text-white active:text-white mb-10'
                onClick={() => navigate('/no-login')}
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
            >
                ALT HOME
            </motion.button>
        </div>
    )
}

export default Home