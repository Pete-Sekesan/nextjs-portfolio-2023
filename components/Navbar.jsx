/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import logo from '../public/assets/logoImage.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(() => {
        if (
            router.asPath === '/covid' ||
            router.asPath === '/githubfinder' ||
            router.asPath === '/yesteryear' ||
            router.asPath === '/disquiz' ||
            router.asPath === '/fitness'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    }, [router])

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    })
    return (
        <div style={{ backgroundColor: `${navBg}` }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link scroll={false} href='/#home'><Image
                    src={logo}
                    alt="/"
                    width='125'
                    height='20' />
                </Link>

                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        <Link scroll={false} href='/#home'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link scroll={false} href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link scroll={false} href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link scroll={false} href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link scroll={false} href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                        <Link scroll={false} href='/resume'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
                        </Link>

                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen ease-in-out duration-500  bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div onClick={handleNav} className='flex w-full items-center justify-between ease-in duration-200'>
                            <Image src={logo} width='87' height='35' alt='/' />
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'> Let's build something together</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link onClick={() => setNav(false)} scroll={false} href='/#home'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link onClick={() => setNav(false)} scroll={false} href='/#about'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link onClick={() => setNav(false)} scroll={false} href='/#skills'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link onClick={() => setNav(false)} scroll={false} href='/#projects'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link onClick={() => setNav(false)} scroll={false} href='/#contact'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                            <Link onClick={() => setNav(false)} scroll={false} href='/resume'>
                                <li className='py-4 text-sm'>Resume</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#ff9933]'> Let's Connect </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar