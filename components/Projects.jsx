/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import covidImg from '../public/assets/covidtracker.png';
import myfImg from '../public/assets/myf.png'
import ghfinderImg from '../public/assets/ghfinder.png'
import yesteryearImg from '../public/assets/yesteryear.png'
import disquizImg from '../public/assets/disquiz.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'


function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#ff9933] '>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <ProjectItem title='Covid Tracker' desc='React.JS' backgroundImg={covidImg} projectUrl='/covid' />
                    <ProjectItem title='Mind Your Fitness' desc='React.JS' backgroundImg={myfImg} projectUrl='/fitness' />
                    <ProjectItem title='Github Finder' desc='React.JS' backgroundImg={ghfinderImg} projectUrl='/githubfinder' />
                    <ProjectItem title='News of Yesteryear' desc='React.JS' backgroundImg={yesteryearImg} projectUrl='/yesteryear' />
                    <ProjectItem title='Disney Quiz' desc='React.JS' backgroundImg={disquizImg} projectUrl='/disquiz' />
                </div>
            </div>
        </div>
    )
}

export default Projects