import React from 'react'
import Google from "../assets/google.svg"

const Login = () => {
    return (
        <div className="flex flex-row h-screen min-w-full font-poppins font-bold text-center text-xl justify-center items-center">
            <div className='flex h-full w-1/2 bg-cust-darker-blue font-extrabold text-white text-3xl text-center justify-center items-center'>
                &copy; Parent<span className='text-cust-orange italic font-black'>Link</span>
            </div>
            <div className='flex flex-col h-full w-1/2 font-extrabold text-black text-xl text-center justify-center items-center gap-4'>
                <div className='flex font-black text-3xl'>
                    Masuk
                </div>
                <div className='text-left font-extralight w-[400px]'>
                    <div className=''>
                        Email*
                    </div>
                    <input 
                        className='w-full rounded-lg border-2 border-black px-4 py-1'
                        placeholder='emailAnda@gmail.com'
                    />
                </div>
                <div className='text-left font-extralight w-[400px]'>
                    <div className=''>
                        Password*
                    </div>
                    <input 
                        className='w-full rounded-lg border-2 border-black px-4 py-1'
                        placeholder='password123...'
                        type='password'
                    />
                </div>
                <button className='h-12 bg-cust-darker-blue text-white rounded-lg w-[400px] mt-5'>
                    Log In
                </button>
                <button className='flex flex-row h-12 bg-cust-darker-blue text-white rounded-lg w-[400px] justify-center items-center'>
                    <img 
                        className='h-8'
                        src={Google}
                        alt='missing img'
                    />
                    Masuk dengan Google
                </button>
                <div className='text-black hover:text-cust-orange active:text-cust-orange font-normal hover:font-bold active:font-bold underline'>
                    Lupa kata sandi?
                </div>
                <div className='text-black font-normal'>
                    Belum punya akun? <span className='text-black hover:text-cust-orange active:text-cust-orange font-normal hover:font-bold active:font-bold underline'>Daftar</span>
                </div>
            </div>
        </div>
    )
}

export default Login