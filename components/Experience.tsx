'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';


const Experience = () => {
    const { theme } = useTheme();
    
    return (
        <section id='experience' className='scroll-mt-28'>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline>
                {
                    experiencesData.map((experience, index) => (
                        <React.Fragment key={index}>

                            <VerticalTimelineElement contentStyle={{
                                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                boxShadow: 'none',
                                border: '1.5px solid rgba(0,0,0,0.2)',
                                textAlign: 'left',
                                padding: '1.3rem 2rem',
                            }}
                                contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.2)' }}
                                icon={experience.icon}
                                date={experience.date}
                                iconStyle={{
                                    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                    fontSize: '1.5rem',
                                }}
                            >

                                <h3 className='!font-bold capitalize !text-lg'>{experience.title}</h3>
                                <p className='!font-normal !text-sm !mt-0'>{experience.location}</p>
                                <p className='!mt-1 !font-normal !text-md text-gray-700 dark:text-white/75'>{experience.description}</p>

                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))}
            </VerticalTimeline>



        </section>
    )
}

export default Experience 