import React from 'react'
import Image from 'next/image'

function Contact() {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#ff9933]'> Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl py-4'>
                        <div className='lg:p-4 h-full roundd-xl'>
                            <div>
                                <Image
                                    src="/../public/assets/PeteHero.JPG"
                                    alt="/"
                                    width='300'
                                    height='60'
                                    className='rounded-xl hover:scale-105 ease-in duration-300' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact