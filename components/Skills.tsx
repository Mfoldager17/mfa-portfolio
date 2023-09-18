'use client'

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { skillsData } from "@/lib/data"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-28 max-w-[53rem] text-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 ">
        {
          skillsData.map((skill, index) => (
            <motion.li
              className="bg-white cursor-default border border-black/[0.25] rounded-lg px-4 py-1 "
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              transition={{ duration: 1 }}
            >

              {skill}

            </motion.li>
          ))
        }
      </ul>
    </section >
  )
}

export default Skills