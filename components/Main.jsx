/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMail, AiTwotoneFileExclamation } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I&#39;m <span className='text-[#ff9933]'> Pete</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>A Full-Stack Developer</h1>
                    <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                        I am a Software Engineer currently working as a Full-Stack Developer for Newsday Media Group in Melville,NY.
                        I have a serious passion for building excellent software and web technologies that help improve the lives of their users.
                        I am interested in the entire full-stack spectrum and would love to work on ambitious Web Technologies, Sites and Products with positive people.
                        Whenever possible, I apply my passion for developing products with Node.js, PostgreSQL, MongoDB, PHP and Modern Javascript Library and Frameworks  like React.js, Next.js and Gatsby.js  and always looking to learn something new.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                            href='https://www.linkedin.com/in/petersekesan'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href='https://github.com/pete-sekesan'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <Link href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <Link href='/resume'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
