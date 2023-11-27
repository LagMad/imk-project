import React from 'react'
import {  useNavigate } from 'react-router-dom';

const HomeNoLogin = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen min-w-full font-poppins font-bold text-center text-xl justify-center items-center  sm:px-40">
            <div className='flex flex-col sm:flex-row mt-32 h-auto w-full gap-10 justify-center items-center'>
                <div className='flex flex-col w-full sm:w-1/2 justify-center items-center my-auto gap-10'>
                    <div className='text-2xl sm:text-3xl font-extrabold'>
                        Selamat Datang, 
                        <br />
                        Orang Tua!
                    </div>
                    <div className='font-semibold hidden sm:inline'>
                        Your Children’s Future <span className='font-black'>Is In Your Hand.</span>
                        <br />
                        Pilih Login atau Sign Up Untuk Memulai!
                    </div>
                    <div className='font-semibold inline sm:hidden'>
                        Your Children’s Future
                        <br />
                        <span className='font-black'>Is In Your Hand.</span>
                        <br />
                        Pilih Login atau Sign Up Untuk Memulai!
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5 justify-center items-center'>
                        <button 
                            className='border-2 bg-transparent hover:bg-cust-orange active:bg-cust-orange border-black hover:border-cust-orange active:border-cust-orange rounded-full py-1 w-36 font-extrabold text-black hover:text-white active:text-white'
                            onClick={() => navigate('/login')}
                        >
                            LOGIN
                        </button>
                        <button 
                            className='border-2 bg-transparent hover:bg-cust-orange active:bg-cust-orange border-black hover:border-cust-orange active:border-cust-orange rounded-full py-1 w-36 font-extrabold text-black hover:text-white active:text-white'
                            onClick={() => navigate('/sign-up')}
                        >
                            SIGN UP
                        </button>
                    </div>
                </div>
                <div className='w-[95vw] sm:w-1/2 h-96 bg-laptop bg-no-repeat bg-cover bg-center rounded-3xl'/>
            </div>
            <div className='my-20 mx-10 sm:mx-52 font-semibold'>
                Parent Link adalah sebuah situs website yang memungkinkan Anda sebagai orang tua untuk memamantau perkembangan anak Anda selama berproses di Universitas Brawijaya. 
            </div>
            <button 
                className='border-2 bg-transparent hover:bg-cust-orange active:bg-cust-orange border-black hover:border-cust-orange active:border-cust-orange rounded-full py-1 w-36 font-extrabold text-black hover:text-white active:text-white mb-10'
                onClick={() => navigate('/')}
            >
                ALT HOME
            </button>
        </div>
    )
}

export default HomeNoLogin