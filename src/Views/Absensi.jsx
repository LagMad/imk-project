import React, { useState } from 'react';
import ArrowDown from '../assets/ArrowDown.svg';

const Absensi = () => {
    const tugasData = [
        {no: 1, desc: "Mata Kuliah : Kalkulus\nMateri: Variabel\nCatatan: Kelas berjalan dengan lancar", batas: "Selasa, 19 September 2023 Pukul 19:00 WIB", hadir: "HADIR"},
        {no: 2, desc: "Mata Kuliah : Pemrograman Dasar\nMateri: Looping\nCatatan: Ada kucing masuk kelas", batas: "Rabu, 20 September 2023 Pukul 17:00 WIB", hadir: "ALPHA"},
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedMatKul, setSelectedMatKul] = useState('Pilih Presensi');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMatKulSelect = (MatKul) => {
        setSelectedMatKul(MatKul);
        toggleDropdown();
    };

    return (
        <div className='flex flex-col h-auto w-full justify-start items-center font-poppins gap-8 text-black'>
            <div className='flex flex-col gap-8 w-[95vw] sm:w-[900px] justify-start items-center text-center'>
                <div className='font-bold text-white bg-cust-darker-blue hover:text-cust-orange rounded-full w-[95vw] sm:w-[700px] text-center py-2 text-4xl'>
                    ABSENSI
                </div>
                <div className='text-md sm:text-xl font-normal text-left'>
                    <div className='relative flex flex-row justify-center items-center'>
                        <button
                        onClick={toggleDropdown}
                        className='relative flex flex-row bg-cust-darker-blue text-white w-48 sm:w-80 ml-5 pr-5 py-2 rounded focus:outline-none justify-end items-center text-md sm:text-xl'
                        >
                        {selectedMatKul}
                        <img
                            className='h-3 ml-4'
                            src={ArrowDown}
                            alt='missing img'
                        />
                        {isOpen && (
                            <div className='absolute -bottom-[130px] sm:-bottom-[90px] left-0 mt-2 w-48 sm:w-80 text-black bg-white border rounded shadow-lg'>
                            {/* Dropdown content goes here */}
                            <ul>
                                <li
                                onClick={() => handleMatKulSelect('Presensi yang Berjalan')}
                                className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                Presensi yang Berjalan
                                </li>
                                <li
                                onClick={() => handleMatKulSelect('Presensi yang Terlewat')}
                                className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                Presensi yang Terlewat
                                </li>
                            </ul>
                            </div>
                        )}
                        </button>
                    </div>
                </div>
                <div className="flex text-black w-full overflow-x-scroll sm:overflow-auto text-sm sm:text-xl mb-10 sm:mb-0">
                    <table className="w-full border-black border-2 border-collapse">
                        <thead>
                            <tr className="bg-cust-darker-blue text-white">
                                <th className="border-b p-2 w-1/5">No</th>
                                <th className="border-b p-2 w-3/5">Mata Kuliah / Materi / Catatan</th>
                                <th className="border-b p-2 w-2/5">Batas Presensi</th>
                                <th className="p-2 w-1/5">Kehadiran</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tugasData.map((tugas) => (
                                <tr key={tugas.no} className="hover:bg-cust-orange hover:text-white">
                                    <td className="border-b p-2 whitespace-pre-line">{tugas.no}</td>
                                    <td className="border-b p-2 whitespace-pre-line">{tugas.desc}</td>
                                    <td className="border-b p-2 whitespace-pre-line">{tugas.batas}</td>
                                    <td className="p-2">{tugas.hadir}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Absensi