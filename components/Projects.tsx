'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import { useScroll } from 'framer-motion'

const Projects = () => {
    return (
        <section id='projects'>

            <SectionHeading>My Projects</SectionHeading>
            <div >
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

type projectProps = typeof projectsData[number];
function Project({ title, description, tags }: projectProps) {
    const ref = useRef(null)
    useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    return (
        <div className='group mb-3 sm:mb-8 last:mb-0'>
            <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>

                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <Image
                    src="/mfa.jpg"
                    alt="hero image"
                    width={300}
                    height={300}
                    quality={100}
                    className='absolute hidden sm:block top-6 -right-40 w-[28.25rem] h-[28.25rem] rounded-t-lg shadow-2xl 
                transition 
                group-hover:scale-110
                group-hover:-translate-x-3
                group-hover:translate-y-3 
                group-hover:-rotate-2 
                
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2 
                
                group-even:right-[initial] 
                group-even:-left-40'
                />
            </section>
        </div>
    )
}




export default Projects