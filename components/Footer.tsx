import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col w-full justify-center items-center text-center border-t-2 mt-auto border-gray-300 border-opacity-60 p-5'>

            <div className='flex flex-row  justify-center items-center text-center'>
                <small className='text-xs'>

                    &copy; 2023 Mathias Foldager Andersen. All Rights Reserved.
                </small>
            </div>
            <p className='mb-2 mt-2 text-xs'>
                <span className='font-bold !text-sm' >About this website:</span> Built with React and Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend and Vercel hosting.
            </p>
        </footer>
    )
}

export default Footer