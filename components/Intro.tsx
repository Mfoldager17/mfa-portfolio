'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'

const Intro = () => {
  return (
    <section className="">
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div>
                    <Image
                        src="/mfa.jpg"
                        alt='hero image'
                        width={200}
                        height={200}
                        quality={100}
                        priority={true}
                        className='rounded-full border-[0.35rem] border-white shadow-2xl shadow-slate-500'
                        />
                </motion.div>

                <span className='text-6xl absolute bottom-0 right-0'>
                    👋
                </span>
            </div>
        </div>


    </section>
  )
}

export default Intro