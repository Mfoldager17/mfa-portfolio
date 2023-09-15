'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin} from 'react-icons/bs'
import { HiDownload } from "react-icons/hi";


const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                    initial={{ rotate: 90, scale: 0, opacity: 1 }}
                    animate={{rotate: 0 , scale: 1, opacity: 1 }}
                    transition={{ type: 'tween', duration: 1 }}
                >
                    <Image
                        src="/mfa.jpg"
                        alt='hero image'
                        width={200}
                        height={200}
                        quality={100}
                        priority={true}
                        className='rounded-full border-[0.35rem] border-white shadow-2xl shadow-slate-900'
                        />
                </motion.div>

                <motion.span
                initial={{ opacity: 1, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{repeat: 5, duration: 0.5, repeatType: 'reverse'}}  
                className='text-6xl absolute bottom-0 right-0'>
                    👋
                </motion.span>
            </div>
        </div>

    <motion.p 
    className='mb-10 mt-10 text-xl sm:text-2xl font-medium !leading-[1.5]'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}  
    transition={{ duration: 0.5 }}
    >
        Hello, I&apos;m Mathias Foldager Andersen. I&apos;m a software developer based in Denmark. I&apos;m currently working at <a href="https://www.picit.dk/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline hover:text-cyan-500">(PIT A/S)</a> as a backend developer.
        My goal is to become a pretty decent fullstack developer, as i love both the frontend and backend side of things.
    </motion.p>

    <div className='flex flex-col items-center justify-center sm:flex-row gap-2 hover:gap-4 px-4 text-lg font-medium'>
        <Link 
        href="#contact"
        className='bg-gray-800 hover:bg-gray-950 hover:scale-110 text-white rounded-full px-7 py-3 flex items-center gap-2'
        > <BsArrowRight/> Contact Me</Link>
        <a className="bg-white rounded-full hover:scale-110 px-7 py-3 flex items-center gap-2 hover:bg-gray-50" href="mfa-cv.pdf" download><HiDownload/> Download CV </a>
        <a className="bg-gray-800 hover:scale-110 hover:bg-gray-950 p-3 text-white text-2xl flex items-center gap-2 rounded-full" href="https://github.com/Mfoldager17"> <BsGithub/> </a>
        <a className="bg-white hover:scale-110 hover:bg-gray-50 p-3 text-blue-700 hover:text-blue-900 text-2xl flex items-center gap-2 rounded-full" href="https://www.linkedin.com/in/mathias-foldager-andersen-b4b2a6230/"> <BsLinkedin/> </a>

    </div>
    </section>
  )
}

export default Intro