'use client'

import { Button, Card, Input, Link } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';

const Admin = () => {

    return (
        <form>
            <Card
                style={{ boxShadow: '0px 0px 20px 30px rgba(2,2,2,0.2)' }}
                className='bg-stone-500 text-stone-300 rounded-3xl '
                sx={{ display: 'flex', flexDirection: 'column', placeContent: 'center', textAlign: 'center', mt: '30%', p: { xs: 2, sm: 5, md: 10 } }}>
                <motion.div className='flex flex-col place-content-center text-center'
                    initial={{ opacity: 1, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
                >
                    <motion.h1 className='text-4xl text-stone-800 font-extralight font-mono'
                        initial={{ opacity: 1, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: 'spring', bounce: 0.5 }}


                    > Admin Login </motion.h1>
                    <Input
                        type='email'
                        className='bg-stone-800  border-stone-500 border-2 text-stone-300'
                        sx={{ borderRadius: '25px', width: '300px', height: '50px', margin: '10px', p: 1 }}
                        placeholder='Email...'
                        disableUnderline
                    />
                    <Input
                        type='password'
                        className='bg-stone-800 border-stone-500 border-2 text-stone-300 '
                        sx={{ borderRadius: '25px', width: '300px', height: '50px', margin: '10px', p: 1 }}
                        placeholder='Password...'
                        disableUnderline
                    />
                    <Link href='/admin/home'
                        underline='none'>
                        <Button
                            className='bg-stone-800 text-stone-300 border-stone-500 border-2  font-semibold hover:bg-stone-800'
                            sx={{ borderRadius: '25px', width: '300px', height: '50px', margin: '10px', p: 1 }}
                        >
                            Login
                        </Button>
                    </Link>

                </motion.div>
            </Card>
        </form>
    )
}

export default Admin