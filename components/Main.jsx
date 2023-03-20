/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Main() {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'> Let's Build Something</p>
                    <h1 className='py-4 text-gray-700'> Hi, I'm <span className='text-[#ff9933]' >Pete</span></h1>
                    <h1 className='py-2 text-gray-700'>A Full-Stack Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am a Software Engineer currently working as a Frontend UX Developer for Adelphi University in Garden City, NY.
                        I have a serious passion for building excellent software and web technologies that help improve the lives of their users.
                        I am interested in the entire full-stack spectrum and would love to work on ambitious Web Technologies, Sites and Products with positive people.
                        Whenever possible, I apply my passion for developing products with Node.js, PostgreSQL and Modern Javascript Library and Frameworks  like React.js, jQuery and Gatsby.js  and always looking to learn something new.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main