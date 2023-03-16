import React from 'react'
import Image from 'next/image'

function About() {
  return (
      <div className='w-full md:h-screen p-2 flex items-center py-16'>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
              <div className='col-span-2'>
                  <p className='uppercase text-xl tracking-widest text-[#ff9933]'>About</p>
                  <h2 className='py-4'>Who I Am</h2>
                  <p className='py-2 text-gray-600'>Hi Everyone, my name is Peter Sekesan and I'm from New York. I am a software engineer working as a        Frontend UX Developer for Adelphi University's Digital Development and User Experience team.</p>
                   
                  <p className='py-2 text-gray-600'> In May of 2020, my career in Events Marketing and Management came to an end due to some mass layoffs at my company. I took the time (and severance which was certainly helpful) to re-focus a bit and decided to finally pursue my intrigue for programming into a career. I enrolled and later graduated from a 6-month long intensive Software Engineering boot camp. Since then I have been working on some small personal projects as well as my current role as Frontend UX Developer.</p>

                  <p className='py-2 text-gray-600'>Apart from coding, some other activities that I love to do!</p>
                  <p className='py-2 text-gray-600 underline cursor-pointer'>Checkout my latest projects</p>
              </div>
              <div className='w-full h-auto m-auto shawdow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
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