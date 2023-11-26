import React from 'react'

const ForgetPass = () => {
    return (
        <div className="flex flex-row h-screen min-w-full font-poppins font-bold text-center text-xl justify-center items-center">
            <div className='flex h-full w-1/2 bg-cust-darker-blue font-extrabold text-white text-3xl text-center justify-center items-center'>
                &copy; Parent<span className='text-cust-orange italic font-black'>Link</span>
            </div>
            <div className='flex flex-col h-full w-1/2 font-extrabold text-black text-xl text-center justify-center items-center gap-4'>
                <div className='flex font-black text-3xl'>
                    Reset Kata Sandi
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
                <button className='h-12 bg-cust-darker-blue text-white rounded-lg w-[400px] mt-5'>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default ForgetPass