import React from 'react';
import { motion } from "framer-motion";

const RiwayatStatusKuliah = () => {
    const riwayatStatusData = [
        { no: 1, semester: "Semester 1, Ganjil Tahun 2023", status: 'Aktif', sks: 18 },
        { no: 2, semester: "Semester 2, Ganjil Tahun 2024", status: 'Aktif', sks: 21 },
        { no: 3, semester: "Semester 3, Ganjil Tahun 2024", status: 'Cuti', sks: 0 },
        { no: 4, semester: "Semester 4, Ganjil Tahun 2025", status: 'Aktif', sks: 20 },
    ];

    return (
        <motion.div 
            className="flex text-black w-full"
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
        >
            <table className="w-full border-t border-b border-collapse">
                <thead>
                    <tr className="bg-cust-darker-blue text-white">
                        <th className="border-b p-2 w-2/8">No.</th>
                        <th className="border-b p-2 w-3/8">Semester</th>
                        <th className="border-b p-2 w-1/8">Status</th>
                        <th className="p-2 w-2/8">SKS</th>
                    </tr>
                </thead>
                <tbody>
                    {riwayatStatusData.map((entry) => (
                        <tr key={entry.no} className="hover:bg-cust-orange hover:text-white">
                            <td className="border-b p-2">{entry.no}</td>
                            <td className="border-b p-2">{entry.semester}</td>
                            <td className="border-b p-2">{entry.status}</td>
                            <td className="p-2">{entry.sks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

export default RiwayatStatusKuliah;
