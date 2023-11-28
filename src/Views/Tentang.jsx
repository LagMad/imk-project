import React from 'react'
import { motion } from "framer-motion";

const Tentang = () => {
    return (
        <div className="flex flex-col h-auto min-w-full font-poppins font-bold text-center text-xl justify-center items-center">
            <motion.div 
                className='flex flex-col text-black text-xl gap-8 w-[95vw] sm:w-auto mx-0 sm:mx-80 mt-32 mb-20'
                initial={{y: -100, opacity: 0}}
                whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
            >
                <div className='text-2xl sm:text-3xl font-black'>
                    Tentang Website
                </div>
                <div className='font-semibold'>
                    Selamat datang di Parent Link, tempat terbaik bagi orangtua yang ingin tetap terhubung dengan perkembangan akademis anak-anak mereka. Kami menyediakan platform yang intuitif dan informatif untuk memantau jadwal kuliah, absensi, tugas, dan pengumuman penting, memberi Anda akses langsung ke dunia akademis mereka.
                </div>
            </motion.div>
            <motion.div
                className='h-1 w-[80vw] bg-cust-darker-blue rounded-full mb-20'
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1, transition: {type: "spring", duration: 10, damping: 15, stiffness: 100}}}
            />
            <div className='flex flex-col sm:flex-row gap-10 mx-auto mb-20 justify-center items-center my-auto'>
                <motion.div 
                    className='flex flex-col w-80 justify-center items-center my-auto'
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    <div className='bg-cust-darker-blue font-extrabold text-white rounded-3xl py-10 w-full text-3xl'>
                        &copy; Parent<span className='text-cust-orange italic font-black'>Link</span>
                    </div>
                    <div className='text-center sm:text-left mt-4 font-semibold text-lg'>
                        Pengumuman. Dapatkan pemberitahuan terkini dengan menjelajahi bagian "Pengumuman". Informasi penting seputar acara, perubahan jadwal, dan berita akademis lainnya dapat ditemukan di sini.
                    </div>
                </motion.div>
                <motion.div 
                    className='flex flex-col-reverse sm:flex-col w-80 justify-center items-center my-auto gap-5'
                    initial={{y: -100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    <div className='text-center sm:text-left mb-4 font-semibold text-lg'>
                        Jadwal Kuliah. Temukan jadwal kuliah anak Anda dengan mudah. Klik pada bagian "Jadwal Kuliah" di Akademik untuk melihat detail waktu dan tempat kuliah mereka.
                    </div>
                    <div className='h-32 bg-books font-extrabold text-white rounded-3xl w-full bg-cover bg-bottom bg-no-repeat'/>
                </motion.div>
                <motion.div
                    className='flex flex-col w-80 justify-center items-center my-auto'
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    <div className='h-32 bg-laptop font-extrabold text-white rounded-3xl w-full text-3xl bg-cover bg-center bg-no-repeat'/>
                    <div className='text-center sm:text-left mt-4 font-semibold text-lg'>
                        Absensi. Cek kehadiran anak Anda melalui opsi "Absensi" di Akademik. Informasi ini membantu Anda melacak keteraturan kehadiran mereka di setiap sesi kuliah.
                    </div>
                </motion.div>
                <motion.div 
                    className='flex flex-col-reverse sm:flex-col w-80 justify-center items-center my-auto gap-5'
                    initial={{y: -100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                >
                    <div className='text-center sm:text-left mb-4 font-semibold text-lg'>
                        Tugas. Untuk mengecek tugas yang perlu dikerjakan anak Anda, kunjungi bagian "Tugas" di bagian Akademik. Informasi tentang tenggat waktu, deskripsi tugas, dan status pengerjaan dapat ditemukan di sini.
                    </div>
                    <div className='h-32 bg-books font-extrabold text-white rounded-3xl w-full text-3xl bg-cover bg-bottom bg-no-repeat'/>
                </motion.div>
            </div>
        </div>
    )
}

export default Tentang