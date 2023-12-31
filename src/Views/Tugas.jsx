import React, { useState } from 'react';
import ArrowDown from '../assets/ArrowDown.svg';
import { motion } from 'framer-motion';

const Tugas = () => {
    const tugasData = [
        {no: 1, kerjakan: "TUGAS LK 4 (DEADLINE 2 HARI LAGI)", terlewat: "TUGAS LK 1 (TERLEWAT 11 HARI)"},
        {no: 2, kerjakan: "PROJEK AKHIR (DEADLINE 14 HARI LAGI)", terlewat: "TUGAS LK2 (TERLEWAT 8 HARI)"},
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedMatKul, setSelectedMatKul] = useState('Pilih Mata Kuliah');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMatKulSelect = (MatKul) => {
        setSelectedMatKul(MatKul);
        toggleDropdown();
    };

    // const [activeTab, setActiveTab] = useState('jadwal');

    return (
        <motion.div 
            className='flex flex-col h-auto w-full justify-start items-center font-poppins gap-8 text-black'
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
        >
            <div className='flex flex-col gap-8 w-[95vw] sm:w-[900px] justify-start items-center text-center'>
                <div className='font-bold text-white bg-cust-darker-blue hover:text-cust-orange rounded-full w-[95vw] sm:w-[700px] text-center py-2 text-4xl'>
                    TUGAS
                </div>
                <div className='text-md sm:text-xl font-normal text-left'>
                    <div className='relative flex flex-row justify-center items-center'>
                        Mata Kuliah :
                        <button
                        onClick={toggleDropdown}
                        className='relative flex flex-row bg-cust-darker-blue text-white w-48 sm:w-60 ml-5 pr-5 py-2 rounded focus:outline-none justify-end items-center text-md sm:text-xl'
                        >
                        {selectedMatKul}
                        <img
                            className='h-3 ml-4'
                            src={ArrowDown}
                            alt='missing img'
                        />
                        {isOpen && (
                            <div className='absolute -bottom-[123px] sm:-bottom-[135px] left-0 mt-2 w-48 sm:w-60 text-black bg-white border rounded shadow-lg'>
                            {/* Dropdown content goes here */}
                            <ul>
                                <li
                                onClick={() => handleMatKulSelect('Kalkulus')}
                                className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                Kalkulus
                                </li>
                                <li
                                onClick={() => handleMatKulSelect('Pemrograman Web')}
                                className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                Pemrograman Web
                                </li>
                                <li
                                onClick={() => handleMatKulSelect('Basis Data')}
                                className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                Basis Data
                                </li>
                            </ul>
                            </div>
                        )}
                        </button>
                    </div>
                </div>
                <div className="flex text-black w-full overflow-x-scroll sm:overflow-auto text-sm sm:text-xl">
                    <table className="w-full border-black border-2 border-collapse">
                        <thead>
                            <tr className="bg-cust-darker-blue text-white">
                                <th className="border-b p-2 w-1/5">No</th>
                                <th className="border-b p-2 w-2/5">Tugas yang Perlu Dikerjakan</th>
                                <th className="p-2 w-2/5">Tugas yang Terlewat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tugasData.map((tugas) => (
                                <tr key={tugas.no} className="hover:bg-cust-orange hover:text-white">
                                    <td className="border-b p-2">{tugas.no}</td>
                                    <td className="border-b p-2">{tugas.kerjakan}</td>
                                    <td className="p-2 text-cust-red">{tugas.terlewat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    )
}

export default Tugas