import React from 'react'
import { motion } from 'framer-motion';

const EditProfile = () => {
    return (
        <motion.div 
            className='flex flex-col w-full justify-start items-center font-poppins'
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1, transition: {type: "spring", duration: 5, damping: 15, stiffness: 100}}}
        >
            <div className='font-bold w-[95vw] sm:w-[700px] text-3xl sm:text-4xl text-center mb-10'>
                Edit Profil
            </div>
            <div className='flex flex-col w-[95vw] sm:w-[700px] justify-center items-center text-lg gap-5 mx-auto'>
                <div className='flex flex-row w-full font-semibold gap-10 justify-center items-center'>
                    <div className='flex-col w-1/2 self-start'>
                        <div className=''>
                            First Name
                        </div>
                        <input
                            className='w-full drop-shadow-lg border-2 border-gray-700 rounded-lg py-1 px-3 font-normal'
                            placeholder='First Name'
                        />
                        <div className='flex flex-row'>

                        </div>
                    </div>
                    <div className='flex-col w-1/2 self-end'>
                        <div className=''>
                            Last Name
                        </div>
                        <input
                            className='w-full drop-shadow-lg border-2 border-gray-700 rounded-lg py-1 px-3 font-normal'
                            placeholder='Last Name'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-full font-semibold'>
                    <div>
                        Email
                    </div>
                    <input
                        className='w-full drop-shadow-lg border-2 border-gray-700 rounded-lg py-1 px-3 font-normal'
                        placeholder='email@gmail.com'
                    />
                </div>
                <div className='flex flex-col w-full font-semibold'>
                    <div>
                        Contact Number
                    </div>
                    <input
                        className='w-full drop-shadow-lg border-2 border-gray-700 rounded-lg py-1 px-3 font-normal'
                        placeholder='08xxxxxxxxxx'
                    />
                </div>
                <div className='flex flex-col w-full font-semibold'>
                    <div>
                        Password
                    </div>
                    <input
                        className='w-full drop-shadow-lg border-2 border-gray-700 rounded-lg py-1 px-3 font-normal'
                        placeholder='Password123!'
                        type='password'
                    />
                </div>
                <button className='self-end w-32 border-black text-xl border-2 rounded-lg hover:text-white hover:bg-black active:text-white active:bg-black'>
                    Edit
                </button>
            </div>
        </motion.div>
    )
}

export default EditProfile