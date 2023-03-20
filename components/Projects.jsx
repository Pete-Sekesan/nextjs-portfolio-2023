/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import covidImg from '../public/assets/covid-tracker.0062c8ea.gif'
import Link from 'next/link'
import ProjectItem from './ProjectItem'


function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#ff9933] '>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 hap-8'>
                    <ProjectItem title='Covid Tracker' desc='React.JS' backgroundImg={covidImg} projectUrl='/covid' />
                    <ProjectItem title='Covid Tracker' desc='React.JS' backgroundImg={covidImg} projectUrl='/covid' />
                    <ProjectItem title='Covid Tracker' desc='React.JS' backgroundImg={covidImg} projectUrl='/covid' />
                    <ProjectItem title='Covid Tracker' desc='React.JS' backgroundImg={covidImg} projectUrl='/covid' />
                </div>
            </div>
        </div>
    )
}

export default Projects