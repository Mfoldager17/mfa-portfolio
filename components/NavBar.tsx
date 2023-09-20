'use client'

import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false)


  return (
    <motion.nav className='fixed top-0 left-0 right-0 z-10 rounded-md bg-opacity-100 '
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex justify-end md:justify-center items-center ${navbarOpen ? "bg-opacity-90 bg-white dark:bg-slate-500 dark:bg-opacity-90" : "bg:none"}  md:bg-inherit`}>

        <div className='h-12 flex items-center justify-end md:justify-center md:px-10 md:bg-opacity-80 md:bg-white md:dark:bg-slate-700 md:dark:bg-opacity-90 md:rounded-full md:my-5'>

          <div className='mobile-menu block md:hidden bg-opacity-80'>
            {
              !navbarOpen ? (
                <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex items-center mx-3 px-3 rounded bg-white bg-opacity-80 border-gray-500 text-gray-500 dark:bg-slate-500 dark:bg-opacity-80 dark:text-slate-800 focus:text-gray-800 hover:text-gray-800 hover:border-gray-800'>
                  <Bars3Icon
                    className='h-7 w-7'
                  />
                </button>
              ) : (
                <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex items-center px-3 mx-3 rounded bg-opacity-80 border-gray-500 text-gray-500 focus:text-gray-800 hover:text-gray-800 hover:border-gray-800'>
                  <XMarkIcon className='h-7 w-7' />
                </button>
              )
            }
          </div>
          <div id="navbar" className='menu hidden md:block md:w-auto '>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 gap-2'>
              {
                links.map((link, index) => (
                  <li key={index}>
                    <Link className="hover:text-gray-950" href={link.hash}>{link.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={links} handleClick={() => setNavbarOpen(false)} /> : null}
    </motion.nav>
  )
}