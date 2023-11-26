import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col h-auto min-w-full font-poppins font-bold text-center text-xl justify-center items-center">
            <div className='flex flex-col text-black text-xl gap-8 mx-80 mt-32 mb-20'>
                <div className='text-3xl font-black'>
                    Selamat Datang, Orang Tua!
                </div>
                <div className='font-semibold'>
                    Kami gembira menyambut Anda di portal resmi kami.   Di sini, Anda memiliki akses eksklusif untuk mengawasi perkembangan akademis anak Anda dengan mudah.
                </div>
                <div className='font-semibold'>
                    Cari tahu informasi terkini tentang jadwal kuliah, absensi, dan pengumuman penting yang berkaitan dengan perjalanan akademis anak Anda. Kami berkomitmen untuk menyediakan pengalaman yang transparan, membantu Anda mendukung mereka setiap langkahnya.
                </div>
                <div className='font-semibold'>
                    Jelajahi fitur-fitur kami yang dirancang khusus untuk kebutuhan Anda sebagai orang tua. Terima kasih telah memilih kami sebagai mitra dalam mendukung kesuksesan akademis anak tercinta.
                </div>
            </div>
            <div className='h-1 w-[80vw] bg-cust-darker-blue rounded-full mb-20'/>
            <div className='flex flex-row gap-10 mx-auto mb-20 justify-center items-center my-auto'>
                <div className='flex-col w-80 h-72 justify-center items-center my-auto'>
                    <div className='bg-cust-darker-blue font-extrabold text-white rounded-3xl py-10 text-3xl'>
                        &copy; Parent<span className='text-cust-orange italic font-black'>Link</span>
                    </div>
                    <div className='text-left mt-4 font-semibold'>
                        Tentang Website: Pelajari lebih lanjut tentang tujuan dan visi dari Parent Link yang kami bangun bersama.
                    </div>
                </div>
                <div className='flex-col w-80 h-72 justify-center items-center my-auto'>
                    <div className='text-left mb-4 font-semibold'>
                        Akademik: Temukan informasi terkait jadwal kuliah, absensi, dan pengumuman penting lainnya yang mendukung perjalanan akademis anak Anda.
                    </div>
                    <div className='h-32 bg-laptop font-extrabold text-white rounded-3xl text-3xl bg-cover bg-bottom bg-no-repeat'/>
                </div>
                <div className='flex-col w-80 h-72 justify-center items-center my-auto'>
                    <div className='h-32 bg-laptop font-extrabold text-white rounded-3xl text-3xl bg-cover bg-center bg-no-repeat'/>
                    <div className='text-left mt-4 font-semibold'>
                        Hubungi kami untuk pertanyaan, umpan balik, atau dukungan teknis. Kami di sini untuk membantu!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home