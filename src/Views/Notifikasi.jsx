import React from 'react'

const Notifikasi = () => {
    return (
        <div className='flex flex-col min-h-screen w-full justify-start items-center font-poppins gap-8'>
            <div className='flex flex-col gap-8 w-[700px] justify-start items-center text-center'>
                <div className='flex text-4xl font-bold'>
                    Nyalakan Notifikasi?
                </div>
                <div className='flex text-xl'>
                    "Nikmati kemudahan dalam mengawasi kehadiran anak Anda! Aktifkan notifikasi  untuk selalu mendapatkan informasi terkini. Dengan notifikasi ini, Anda akan selalu tahu kapan anak Anda hadir dalam setiap sesi kuliah. Notifikasi akan dikirim ke email yang anda gunakan untuk mengakses situs kami.  Sekarang, Anda tidak akan kehilangan momen berharga dalam perjalanan akademis mereka."
                </div>
                <div className='flex flex-row mt-20 gap-52'>
                    <button className='w-52 border-2 border-cust-red text-xl font-semibold rounded-lg hover:text-white hover:bg-cust-red'>
                        Jangan Nyalakan
                    </button>
                    <button className='w-52 border-2 border-cust-green text-xl font-semibold rounded-lg hover:text-white hover:bg-cust-green'>
                        Nyalakan
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Notifikasi