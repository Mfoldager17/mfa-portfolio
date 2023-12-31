'use client'

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type projectProps = typeof projectsData[number];
export default function Project({ title, description, tags, imageUrl, githubUrl }: projectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (

        <motion.div
            ref={ref}
            className='group mb-8 2xl:mb-0 last:mb-0 '
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >

            <section className='bg-white max-w-[42rem] border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-300 transition dark:text-white dark:bg-white/20 dark:hover:bg-white/30'>
                <Link href={githubUrl}>
                    <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full '>
                        <h3 className='text-2xl font-semibold'>{title}</h3>
                        <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                            {tags.map((tag, index) => (
                                <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>{tag}</li>
                                ))}
                        </ul>
                    </div>
                </Link>

                <Image
                    src={imageUrl}
                    alt="hero image"
                    width={700}
                    height={500}
                    quality={100}
                    className='absolute hidden sm:block top-9 left-96 rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-110
                group-hover:-translate-x-3
                group-hover:translate-y-3 
                group-hover:-rotate-2 '

                />
            </section>
               
        </motion.div >

    )
}