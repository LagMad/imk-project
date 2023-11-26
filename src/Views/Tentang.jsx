import React from 'react'

const Tentang = () => {
    return (
        <div className="flex flex-col h-auto min-w-full font-poppins font-bold text-center text-xl justify-center items-center">
            <div className='flex flex-col text-black text-xl gap-8 mx-80 mt-32 mb-20'>
                <div className='text-3xl font-black'>
                    Tentang Website
                </div>
                <div className='font-semibold'>
                    Selamat datang di Parent Link, tempat terbaik bagi orangtua yang ingin tetap terhubung dengan perkembangan akademis anak-anak mereka. Kami menyediakan platform yang intuitif dan informatif untuk memantau jadwal kuliah, absensi, tugas, dan pengumuman penting, memberi Anda akses langsung ke dunia akademis mereka.
                </div>
            </div>
            <div className='h-1 w-[80vw] bg-cust-darker-blue rounded-full mb-20'/>
            <div className='flex flex-row gap-10 mx-auto mb-20 justify-center items-center my-auto'>
                <div className='flex flex-col w-80 justify-center items-center my-auto'>
                    <div className='bg-cust-darker-blue font-extrabold text-white rounded-3xl py-10 w-full text-3xl'>
                        &copy; Parent<span className='text-cust-orange italic font-black'>Link</span>
                    </div>
                    <div className='text-left mt-4 font-semibold text-lg'>
                        Pengumuman. Dapatkan pemberitahuan terkini dengan menjelajahi bagian "Pengumuman". Informasi penting seputar acara, perubahan jadwal, dan berita akademis lainnya dapat ditemukan di sini.
                    </div>
                </div>
                <div className='flex flex-col w-80 justify-center items-center my-auto'>
                    <div className='text-left mb-4 font-semibold text-lg'>
                        Jadwal Kuliah. Temukan jadwal kuliah anak Anda dengan mudah. Klik pada bagian "Jadwal Kuliah" di Akademik untuk melihat detail waktu dan tempat kuliah mereka.
                    </div>
                    <div className='h-32 bg-laptop font-extrabold text-white rounded-3xl w-full bg-cover bg-bottom bg-no-repeat'/>
                </div>
                <div className='flex flex-col w-80 justify-center items-center my-auto'>
                    <div className='h-32 bg-laptop font-extrabold text-white rounded-3xl w-full text-3xl bg-cover bg-center bg-no-repeat'/>
                    <div className='text-left mt-4 font-semibold text-lg'>
                        Absensi. Cek kehadiran anak Anda melalui opsi "Absensi" di Akademik. Informasi ini membantu Anda melacak keteraturan kehadiran mereka di setiap sesi kuliah.
                    </div>
                </div>
                <div className='flex flex-col w-80 justify-center items-center my-auto'>
                    <div className='text-left mb-4 font-semibold text-lg'>
                        Tugas. Untuk mengecek tugas yang perlu dikerjakan anak Anda, kunjungi bagian "Tugas" di bagian Akademik. Informasi tentang tenggat waktu, deskripsi tugas, dan status pengerjaan dapat ditemukan di sini.
                    </div>
                    <div className='h-32 bg-laptop font-extrabold text-white rounded-3xl w-full text-3xl bg-cover bg-bottom bg-no-repeat'/>
                </div>
            </div>
        </div>
    )
}

export default Tentang