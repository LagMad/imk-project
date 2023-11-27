import React, { useState } from 'react';
import ArrowDown from '../assets/ArrowDown.svg';

const JadwalKuliah = () => {
    const jadwalData = [
        { hari: "Selasa", jam: "09:30 - 12:00", matkul: 'Jaringan Komputer', kelas: "TIF-G", dosen: "Pak Jono" },
        { hari: "Rabu", jam: "13:00 - 15:30", matkul: 'Pemrograman Web', kelas: "TIF-H", dosen: "Ibu Rina" },
        { hari: "Kamis", jam: "10:00 - 11:30", matkul: 'Basis Data', kelas: "TIF-A", dosen: "Pak Budi" },
        { hari: "Jumat", jam: "08:00 - 10:30", matkul: 'Sistem Operasi', kelas: "TIF-C", dosen: "Ibu Sarah" },
        { hari: "Senin", jam: "15:00 - 17:30", matkul: 'Algoritma dan Struktur Data', kelas: "TIF-D", dosen: "Pak Andi" },
        { hari: "Selasa", jam: "13:30 - 15:00", matkul: 'Pemrograman Mobile', kelas: "TIF-E", dosen: "Ibu Maya" },
    ];
    

    const [isOpen, setIsOpen] = useState(false);
    const [selectedSemester, setSelectedSemester] = useState('Pilih Semester');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSemesterSelect = (semester) => {
        setSelectedSemester(semester);
        toggleDropdown();
    };

    // const [activeTab, setActiveTab] = useState('jadwal');

    return (
        <div className='flex flex-col min-h-screen w-full justify-start items-center font-poppins gap-8 text-black'>
            <div className='flex flex-col gap-8 w-[95vw] sm:w-[900px] justify-start items-center text-center'>
                <div className='font-bold text-white bg-cust-darker-blue hover:text-cust-orange rounded-full w-[95vw] sm:w-[700px] text-center py-2 text-4xl'>
                JADWAL KULIAH
                </div>
                <div className='text-md sm:text-xl font-normal text-left'>
                    <div className='relative flex flex-row justify-center items-center '>
                        Semester :
                        <button
                        onClick={toggleDropdown}
                        className='relative flex flex-row bg-cust-darker-blue text-white w-48 sm:w-52 ml-5 pr-5 py-2 rounded focus:outline-none justify-end items-center text-md sm:text-xl'
                        >
                        {selectedSemester}
                        <img
                            className='h-3 ml-4'
                            src={ArrowDown}
                            alt='missing img'
                        />
                        {isOpen && (
                            <div className='absolute -bottom-[134px] left-0 mt-2 w-48 sm:w-52 text-black bg-white border rounded shadow-lg'>
                            {/* Dropdown content goes here */}
                            <ul>
                                <li
                                onClick={() => handleSemesterSelect('1')}
                                className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                1
                                </li>
                                <li
                                onClick={() => handleSemesterSelect('2')}
                                className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                2
                                </li>
                                <li
                                onClick={() => handleSemesterSelect('3')}
                                className='py-2 px-4 hover:bg-cust-orange hover:text-white cursor-pointer'
                                >
                                3
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
                                <th className="border-b p-2 w-2/8">Hari</th>
                                <th className="border-b p-2 w-1/8">Jam</th>
                                <th className="border-b p-2 w-2/8">Mata Kuliah</th>
                                <th className="border-b p-2 w-1/8">Kelas</th>
                                <th className="p-2 w-2/8">Dosen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jadwalData.map((jadwal) => (
                                <tr key={jadwal.hari} className="hover:bg-cust-orange hover:text-white">
                                    <td className="border-b p-2">{jadwal.hari}</td>
                                    <td className="border-b p-2">{jadwal.jam}</td>
                                    <td className="border-b p-2">{jadwal.matkul}</td>
                                    <td className="border-b p-2">{jadwal.kelas}</td>
                                    <td className="p-2">{jadwal.dosen}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default JadwalKuliah;
