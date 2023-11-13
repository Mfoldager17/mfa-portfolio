'use client'

import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { projectsData } from '@/lib/data'
import Project from '@/components/Project'
import { motion } from 'framer-motion'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

const Projects = () => {
    return (
        <motion.section id='projects'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center flex flex-col justify-center items-center'
        >
            <SectionHeading>All Projects</SectionHeading>
            <div className=' 2xl:grid 2xl:grid-cols-2 gap-10 text-start mb-10'>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
            <Link className=" dark:bg-white/20 flex items-center justify-center hover:scale-110 transition py-3 bg-gray-100 rounded-full gap-2 w-96 text-lg font-medium" href='/portfolio#projects'>Go Back {" "}<BsArrowLeft className="hover:translate-x-2" /></Link>
        </motion.section >
    )
}

export default Projects