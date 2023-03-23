/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ff9933]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>Hi Everyone, my name is Peter Sekesan and I'm from New York. I am a software engineer working with multiple languages, libraries and frameworks across both front and backends.</p>

          <p className='py-2 text-gray-600'> In May of 2020, my career in Events Marketing and Management came to an end. I took the time to re-focus a bit and decided to finally pursue my intrigue for programming into a career. I enrolled and later graduated from a 6-month long intensive Software Engineering boot camp. Since then I have worked as a Frontend UX Developer for Adelphi University's Digital Development team, some smaller personal projects and currently my role as a Full-Stack Developer for Newsday Media Group.</p>

          <p className='py-2 text-gray-600'>Apart from coding, some other activities that I love to do!</p>
          <Link scroll={false} href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src="/../public/assets/PeteHero.JPG"
            alt="/"
            width='400'
            height='60'
            className='rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default About