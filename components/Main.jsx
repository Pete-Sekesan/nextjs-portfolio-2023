import React from 'react'

function Main() {
  return (
      <div className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div>
                  <p className='uppercase text-sm tracking-widest text-gray-600'> Let's Build Something</p>   
                  <h1 className='py-4 text-gray-700'> Hi, I'm <span className='text-[#ff9933]' >Pete</span></h1>
                  <h1 className='py-2 text-gray-700'>A Full-Stack Developer</h1>
                  <p>I am a Software Engineer currently working as a Frontend UX Developer for Adelphi University in Garden City, NY.
                    I have a serious passion for building excellent software and web technologies that help improve the lives of their users.
                    I am interested in the entire full-stack spectrum and would love to work on ambitious Web Technologies, Sites and Products with positive people.  
                    Whenever possible, I apply my passion for developing products with Node.js, PostgreSQL and Modern Javascript Library and Frameworks  like React.js, jQuery and Gatsby.js  and always looking to learn something new.</p>
              </div>
          </div>
    </div>
  )
}

export default Main