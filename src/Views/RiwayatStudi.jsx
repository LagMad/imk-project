import React from 'react';

const RiwayatStudi = () => {
    const RiwayatStudiData = [
        { no: 1, semester: "Semester 1, Ganjil Tahun 2023", mataKuliah: "Kalkulus", sks: 3, nilai: "A" },
        { no: 2, semester: "Semester 2, Ganjil Tahun 2023", mataKuliah: "Algoritma", sks: 4, nilai: "B+" },
        { no: 3, semester: "Semester 3, Ganjil Tahun 2023", mataKuliah: "Pemrograman Web", sks: 3, nilai: "A-" },
        { no: 4, semester: "Semester 1, Genap Tahun 2024", mataKuliah: "Statistika", sks: 3, nilai: "B" },
        { no: 5, semester: "Semester 2, Genap Tahun 2024", mataKuliah: "Sistem Operasi", sks: 4, nilai: "A" },
        { no: 6, semester: "Semester 3, Genap Tahun 2024", mataKuliah: "Basis Data Lanjutan", sks: 3, nilai: "B-" },
        { no: 7, semester: "Semester 1, Ganjil Tahun 2025", mataKuliah: "Machine Learning", sks: 4, nilai: "A+" },
        { no: 8, semester: "Semester 2, Ganjil Tahun 2025", mataKuliah: "Network Security", sks: 3, nilai: "B" },
        { no: 9, semester: "Semester 3, Ganjil Tahun 2025", mataKuliah: "Mobile App Development", sks: 4, nilai: "A-" },
        { no: 10, semester: "Semester 2, Genap Tahun 2026", mataKuliah: "Cloud Computing", sks: 3, nilai: "B+" },
    ];

    return (
        <div className="text-black">
            <table className="w-full border border-collapse">
                <thead>
                    <tr className="bg-cust-darker-blue text-white">
                        <th className="border-b p-2">No.</th>
                        <th className="border-b p-2">Semester</th>
                        <th className="border-b p-2">Mata Kuliah</th>
                        <th className="border-b p-2">SKS</th>
                        <th className="border-b p-2">Nilai Akhir</th>
                    </tr>
                </thead>
                <tbody>
                    {RiwayatStudiData.map((entry) => (
                        <tr key={entry.no} className="hover:bg-cust-orange hover:text-white">
                            <td className="border-b p-2">{entry.no}</td>
                            <td className="border-b p-2">{entry.semester}</td>
                            <td className="border-b p-2">{entry.mataKuliah}</td>
                            <td className="border-b p-2">{entry.sks} SKS</td>
                            <td className="border-b p-2">{entry.nilai}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RiwayatStudi;
