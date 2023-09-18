'use client'

import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link';
import { useState } from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'; 
   
export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header className='fixed top-0 left-0 right-0 z-[999]'>
      <nav className='flex justify-center items-center bg-opacity-100'>
      <div className='h-16 flex items-center justify-center px-4 bg-white rounded-full my-3'>

        <div className='mobile-menu block md:hidden'>
        {
          !navbarOpen ? (
            <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex items-center px-3 py-2 border rounded border-[#b8b6b6] text-[#b8b6b6] hover:text-white hover:border-white'>
            <Bars3Icon 
            className='h-5 w-5'
            />
          </button>
            ) : (
          <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex items-center px-3 py-2 border rounded border-[#b8b6b6] text-[#b8b6b6] hover:text-white hover:border-white'>
            <XMarkIcon className='h-5 w-5'/>
          </button>
            )
          }
        </div>
        <div id="navbar" className='menu hidden md:block md:w-auto'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              links.map((link, index) => (
                <li key={index}>
                  <Link href={link.hash}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {/*{navbarOpen ? <MenuOverlay links={navLinks}/> : null}*/}
    </nav>
  </header> 
  )
}