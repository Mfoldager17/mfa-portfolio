'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";


const Projects = () => {
    return (
        <motion.section id='projects'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center scroll-mt-28'
        >

            <SectionHeading>My Projects</SectionHeading>

            <div className='2xl:w-full 2xl:grid 2xl:grid-cols-2 2xl:gap-10 text-start mb-10'>
                {projectsData.slice(0, 4).map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
            <div className='flex justify-center'>
                <Link className='group hover:scale-110 transition flex py-3 justify-center items-center bg-white rounded-full gap-2 w-80 text-lg font-medium dark:bg-white/20 dark:hover:bg-white/30' href="/projects">More Projects <BsArrowRight className="opacity-70 group-hover:translate-x-2 duration-500" /></Link>
            </div>
        </motion.section >
    )
}

export default Projects