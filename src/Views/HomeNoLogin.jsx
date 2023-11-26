import React from 'react'

const HomeNoLogin = () => {
    return (
        <div className="flex flex-col h-screen min-w-full font-poppins font-bold text-center text-xl justify-center items-center px-40">
            <div className='flex flex-row mt-32 h-auto w-full gap-10'>
                <div className='flex flex-col w-1/2 justify-center items-center my-auto gap-10'>
                    <div className='text-3xl font-extrabold'>
                        Selamat Datang, Orang Tua!
                    </div>
                    <div className='font-semibold'>
                        Your Children’s Future <span className='font-black'>Is In Your Hand.</span>
                        <br />
                        Pilih Login atau Sign Up Untuk Memulai!
                    </div>
                    <div className='flex flex-row gap-5 justify-center items-center'>
                        <button className='border-2 bg-transparent hover:bg-cust-orange active:bg-cust-orange border-black hover:border-cust-orange active:border-cust-orange rounded-full py-1 w-36 font-extrabold text-black hover:text-white active:text-white'>
                            LOGIN
                        </button>
                        <button className='border-2 bg-transparent hover:bg-cust-orange active:bg-cust-orange border-black hover:border-cust-orange active:border-cust-orange rounded-full py-1 w-36 font-extrabold text-black hover:text-white active:text-white'>
                            SIGN UP
                        </button>
                    </div>
                </div>
                <div className='w-1/2 h-96 bg-laptop bg-no-repeat bg-cover bg-center rounded-3xl'/>
            </div>
            <div className='my-20 mx-52 font-semibold'>
                Parent Link adalah sebuah situs website yang memungkinkan Anda sebagai orang tua untuk memamantau perkembangan anak Anda selama berproses di Universitas Brawijaya. 
            </div>
        </div>
    )
}

export default HomeNoLogin