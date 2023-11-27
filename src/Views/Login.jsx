import React from 'react'
import Google from "../assets/google.svg"
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col sm:flex-row h-screen min-w-full font-poppins font-bold text-center text-lg sm:text-xl justify-center items-center">
            <div className='flex h-full w-full sm:w-1/2 bg-cust-darker-blue font-extrabold text-white text-3xl text-center justify-center items-center pt-16 sm:pt-0'>
                &copy; Parent<span className='text-cust-orange italic font-black'>Link</span>
            </div>
            <div className='flex flex-col h-full w-[95vw] sm:w-1/2 font-extrabold text-black text-lg sm:text-xl text-center justify-center items-center gap-4 my-10'>
                <div className='flex font-black text-2xl sm:text-3xl sm:mt-0'>
                    Masuk
                </div>
                <div className='text-left font-extralight w-[95vw] sm:w-[400px]'>
                    <div className=''>
                        Email*
                    </div>
                    <input 
                        className='w-full rounded-lg border-2 border-black px-4 py-1'
                        placeholder='emailAnda@gmail.com'
                    />
                </div>
                <div className='text-left font-extralight w-[95vw] sm:w-[400px]'>
                    <div className=''>
                        Password*
                    </div>
                    <input 
                        className='w-full rounded-lg border-2 border-black px-4 py-1'
                        placeholder='password123...'
                        type='password'
                    />
                </div>
                <button 
                    className='h-12 bg-cust-darker-blue text-white rounded-lg w-[95vw] sm:w-[400px] mt-5 font-semibold'
                    onClick={() => navigate('/')}    
                >
                    Log In
                </button>
                <button 
                    className='flex flex-row h-12 bg-cust-darker-blue text-white rounded-lg w-[95vw] sm:w-[400px] justify-center items-center font-semibold'
                    onClick={() => navigate('/')}    
                >
                    <img 
                        className='h-8'
                        src={Google}
                        alt='missing img'
                    />
                    Masuk dengan Google
                </button>
                <button 
                    className='text-black hover:text-cust-orange active:text-cust-orange font-normal hover:font-bold active:font-bold underline'
                    onClick={() => navigate('/forget-pass')}    
                >
                    Lupa kata sandi?
                </button>
                <div className='text-black font-normal'>
                    Belum punya akun? 
                    <button 
                        className='text-black hover:text-cust-orange active:text-cust-orange font-normal hover:font-bold active:font-bold underline'
                        onClick={() => navigate('/sign-up')} 
                    >
                        Daftar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login