import React, { useState } from 'react';
import Photo from '../assets/stockphoto.png'
import RiwayatStatusKuliah from './RiwayatStatusKuliah';
import RiwayatStudi from './RiwayatStudi';
import { motion } from "framer-motion";

const Biodata = () => {
    const [activeTab, setActiveTab] = useState('riwayatStatusKuliah');

    return (
        <div className="flex flex-col min-h-screen min-w-full font-poppins font-bold text-center text-xl justify-center items-center gap-4">
            <motion.div 
                className='w-[95vw] sm:w-auto text-2xl sm:text-3xl font-black text-white bg-cust-darker-blue hover:bg-cust-orange py-5 px-5 sm:px-36 rounded-full mt-24'
                initial={{y: -100, opacity: 0}}
                whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
            >
                DETAIL BIODATA MAHASISWA
            </motion.div>
            <motion.div 
                className='flex flex-col sm:flex-row w-[95vw] sm:w-auto bg-cust-darker-blue text-white p-8 rounded-3xl gap-10 justify-center items-center'
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
            >
                <img
                    className=''
                    src={Photo}
                    alt='missing img'
                />
                <div className='flex flex-col text-center sm:text-left gap-4'>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Nama
                        </div>
                        <div className='text-white'>
                            Mazda RX8
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            NIM
                        </div>
                        <div className='text-white'>
                            2351502001111000
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Program Studi
                        </div>
                        <div className='text-white'>
                            Teknik Informatika
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Fakultas
                        </div>
                        <div className='text-white'>
                            Ilmu Komputer
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Tempat, Tanggal Lahir
                        </div>
                        <div className='text-white'>
                            Jepang , 21 Agustus 2004
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Jenis Kelamin
                        </div>
                        <div className='text-white'>
                            Laki-Laki
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Alamat Asal
                        </div>
                        <div className='text-white'>
                            Tokyo Avenue, Kyoto, Jepang.
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Alamat di Malang
                        </div>
                        <div className='text-white'>
                            Jl. Watugong No. 35
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Jenjang
                        </div>
                        <div className='text-white'>
                            S1
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-cust-orange'>
                            Semester Awal
                        </div>
                        <div className='text-white'>
                            Ganjil 2023
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className='flex flex-col w-full mb-10 justify-center items-center'>
                <div className='flex flex-row justify-center items-center text-white gap-2 mx-auto w-[95vw] sm:w-auto text-lg sm:text-xl'>
                    <motion.button
                        className={`bg-cust-darker-blue hover:bg-cust-orange active:bg-cust-orange w-1/2 sm:w-72 rounded-full py-1 self-center sm:self-start ${
                        activeTab === 'riwayatStatusKuliah' && 'bg-cust-orange'
                        }`}
                        initial={{x: -100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                        onClick={() => setActiveTab('riwayatStatusKuliah')}
                    >
                        Riwayat
                        <br/>
                        Status Kuliah
                    </motion.button>
                    <motion.button
                        className={`bg-cust-darker-blue hover:bg-cust-orange active:bg-cust-orange w-1/2 sm:w-72 rounded-full py-1 self-center sm:self-start ${
                        activeTab === 'riwayatStudi' && 'bg-cust-orange'
                        }`}
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
                        onClick={() => setActiveTab('riwayatStudi')}
                    >
                        Riwayat
                        <br/>
                        Studi
                    </motion.button>
                </div>
                <div className='text-white mt-4 w-full overflow-x-scroll sm:overflow-auto'>
                    {activeTab === 'riwayatStatusKuliah' ? (
                        <RiwayatStatusKuliah />
                    ) : (
                        <RiwayatStudi />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Biodata