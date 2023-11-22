import React from 'react'

const NavBar = () => {
    return (
        <div className='flex flex-row justify-center items-center text-center w-screen h-28 bg-cust-darker-blue drop-shadow-2xl text-white font-poppins'>
            <div className='font-extrabold text-2xl '>
                Parent<span className='text-cust-orange'>Link</span>
            </div>
            <div className=''>
                <button className='bg-transparent hover:bg-cust-orange rounded-lg py-1 px-4 font-semibold text-xl'>
                    Home
                </button>
            </div>
            <div className='bg-white rounded-full h-16 w-16'>
                
            </div>
        </div>
    )
}

export default NavBar