import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';



const resume = () => {

    return (
        <>
            <Head>
                <title>Peter Sekesan | Resume</title>
                <meta
                    name='description'
                    content='I’m a full-stack developer specializing in building exceptional digital experiences and websites.'
                />
                <link rel='icon' href='/fav.png' />
            </Head>

            <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
                <h2 className='text-center'>Resume</h2>

                <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
                    <h2 className='text-center'>Peter Sekesan</h2>
                    <div className='flex'>
                        <a
                            href='https://www.linkedin.com/in/petersekesan/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
                        </a>
                        <a
                            href='https://github.com/pete-sekesan'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub size={20} style={{ marginRight: '1rem' }} />
                        </a>
                    </div>
                </div>



                {/* Skills */}
                <div className='text-center py-4'>
                    <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
                    <p className='py-2'>
                        <span className='font-bold'>Technical Skills</span>
                        <span className='px-2'>|</span>Front-End Web Developer
                        <span className='px-2'>|</span> HTML
                        <span className='px-2'>|</span>CSS
                        <span className='px-2'>|</span>Javascript
                        <span className='px-2'>|</span>React
                        <span className='px-2'>|</span>Next JS
                        <span className='px-2'>|</span>PostrgreSQL
                        <span className='px-2'>|</span>MongoDB
                        <span className='px-2'>|</span>Node.js
                        <span className='px-2'>|</span>PHP
                        <span className='px-2'>|</span> Docker
                        <span className='px-2'>|</span> Git/GitHub
                    </p>

                </div>

                <h5 className='text-center underline text-[18px] py-4'>
                    Professional Experience
                </h5>
                {/* Experience */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            NEWSDAY MEDIA GROUP
                        </span>
                        <span className='px-2'>|</span>Melville, NY
                    </p>
                    <p className='py-1 italic'>Full-Stack Developer (2022 - Current)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Architected new micro-service to enhance search results and SEO along with an internal GUI
                        </li>
                        <li>
                            Constructed new form components to allow users to submit data with file uploads tied to our AWS S3 bucket
                        </li>

                    </ul>
                </div>


                {/* Personal Experience */}

                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            ADELPHI UNIVERSITY IT
                        </span>
                        <span className='px-2'>|</span>Garden City, NY
                    </p>
                    <p className='py-1 italic'>Frontend UX Developer - Digital Development (2021 - 2022)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Developed office hours management tool using Vue.js to facilitate timely adjustments for internal staff
                        </li>
                        <li>
                            Partner with Project Managers and UX designers on new feature ideation and experiment design
                        </li>
                        <li>
                            Consulted with 508 and A11y ADA Compliance professionals during development to account for accessibility
                        </li>
                    </ul>
                </div>

                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            BLACK LAKE LABS
                        </span>
                        <span className='px-2'>|</span>Seattle, WA
                    </p>
                    <p className='py-1 italic'>Software Engineer - Internship (2021 - 2021)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Coded alongside lead developer to overhaul UI built with React in conjunction with Figma wireframes increasing speed by 25%
                        </li>

                    </ul>
                </div>

                {/*  */}
                <h5 className='text-center underline text-[18px] py-4'>
                    Other Professional Experience
                </h5>

                {/* Experience */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold'>CANON USA INC</span>
                        <span className='px-2'>|</span>Melville, NY
                    </p>
                    <p className='py-1 italic'>Events Management Specialist (2012 – 2020)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Leveraged leadership expertise to direct all aspects of major media and trade show events yielding 85% market share
                        </li>
                        <li>
                            Developed and managed budgets for trade show events, effectively allocating resources to maximize ROI and ensure financial success.
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default resume;