import React from 'react'

const Akses = () => {
    return (
        <div className='flex flex-col min-h-screen w-full justify-start items-center font-poppins'>
            <div className='flex flex-col gap-8 w-[700px] justify-start items-center text-center'>
                <div className='font-bold w-[700px] text-4xl text-center mb-10'>
                    Atur Akses
                </div>
                <div className='flex text-xl'>
                    Melalui pengaturan privasi, kami memberikan kendali penuh kepada Anda untuk melindungi dan menghormati keamanan data akademis anak tercinta.
                </div>
                <div className='flex flex-row gap-12'>
                    <div className='flex flex-col gap-2 font-semibold'>
                        Email Akses
                        <div className='underline font-normal'>
                            email@gmail.com
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 font-semibold'>
                        Lokasi
                        <div className='font-normal'>
                            Malang, Indonesia
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 font-semibold'>
                        Tanggal Akses
                        <div className='font-normal'>
                            12 November 2023
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 font-semibold'>
                        Hapus Akses
                        <button className='font-normal border-2 border-cust-red rounded-lg hover:bg-cust-red hover:text-white hover:font-bold'>
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Akses