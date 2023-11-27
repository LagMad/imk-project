import React from 'react'
import {  useNavigate } from 'react-router-dom';

const ForgetPass = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col sm:flex-row h-screen min-w-full font-poppins font-bold text-center text-lg sm:text-xl justify-center items-center">
            <div className='flex h-full w-full sm:w-1/2 bg-cust-darker-blue font-extrabold text-white text-3xl text-center justify-center items-center pt-16 sm:pt-0'>
                &copy; Parent<span className='text-cust-orange italic font-black'>Link</span>
            </div>
            <div className='flex flex-col h-full w-[95vw] sm:w-1/2 font-extrabold text-black text-lg sm:text-xl text-center justify-center items-center gap-4 my-10'>
                <div className='flex font-black text-2xl sm:text-3xl sm:mt-0'>
                    Reset Kata Sandi
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
                <button 
                    className='h-12 bg-cust-darker-blue text-white rounded-lg w-[95vw] sm:w-[400px] mt-5 font-semibold'
                    onClick={() => navigate('/login')}    
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default ForgetPass