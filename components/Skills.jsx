import React from 'react'
import Image from 'next/image'
import { DiNodejs, DiPostgresql } from 'react-icons/di'
import { SiJavascript, SiMongodb, SiNextdotjs, SiJquery, SiPostman } from 'react-icons/si'
import { FaReact, FaPhp, FaDocker, FaAws, FaGithub } from 'react-icons/fa'


function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#ff9933] '>Professional Skillset</p>
                <h2 className='py-4'>What I Use</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <SiJavascript size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <FaReact size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <DiNodejs size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Node.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <DiPostgresql size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <SiMongodb size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <SiNextdotjs size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <FaPhp size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PHP</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <SiJquery size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>jQuery</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <FaDocker size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Docker</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <FaAws size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>AWS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <SiPostman size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Postman</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <FaGithub size={50} color='#ff9933' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Git / GitHub</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Skills