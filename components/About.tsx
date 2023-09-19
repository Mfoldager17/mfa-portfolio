'use client';

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './SectionHeading';


const About = () => {
    return (
        <motion.section
            className=" max-w-[45rem] text-center leading-8 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                I am a {" "}
                <span className="font-medium">Software Developer</span>, {" "}
                My current position is as a <span className="font-medium"> Fullstack Developer</span>
                {" "} at {" "}
                <a
                    href="https://www.picit.dk/"
                    className="text-cyan-700 underline hover:text-cyan-500"
                >
                    (PICIT A/S).
                </a> I love the
                feeling of figuring out a solution to a problem, and of course optimise the workflow for the relevant people.
                My core stack
                is{" "}
                <span className="font-medium">
                    Java, C#, Flutter(Mobile), React, Next.js, Node.js, MongoDB.
                </span>
                . I am also familiar with TypeScript, MSSQL. I am always looking to
                learn new technologies. I am a very open and social person, and I love to work in teams, but can also work independently.
            </p>

            <p>
                <span className="italic font-medium">When I am not coding</span>, I am with my girlfriend and two kids. We are currently living in Hasselager (Aarhus) in Denmark.
                I also enjoy playing
                video games, watching movies and football. I do also workout and running when the time is to it.
            </p>
        </motion.section>
    )
}

export default About