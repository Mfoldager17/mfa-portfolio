'use client'

import { Button, Card, Input, Link, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Admin = () => {
    const router = useRouter()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        isError()
        if (userName === 'admin' && password === 'admin') {
            router.push('/admin/home')
        }
    }

    const isError = (): boolean => {
        if (userName !== 'admin' && password !== 'admin') {
            setError('Invalid username and password');
            return true
        }
        else if (userName !== 'admin') {
            setError('Invalid username');
            return true
        }
        else if (password !== 'admin') {
            setError('Invalid password');
            return true
        }
        return false;
    };

    return (
        <form onSubmit={handleSubmit}>
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
                        required
                        onChange={(e) => setUserName(e.target.value)}
                        type='username'
                        className='bg-stone-800  border-stone-500 border-2 text-stone-300 focus-within:scale-110 transition duration-1000'
                        sx={{ borderRadius: '25px', width: '300px', height: '50px', margin: '10px', p: 1 }}
                        placeholder='Username...'
                        disableUnderline
                    />
                    <Input
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        className='bg-stone-800 border-stone-500 border-2 text-stone-300 focus-within:scale-110 transition duration-1000 '
                        sx={{ borderRadius: '25px', width: '300px', height: '50px', margin: '10px', p: 1 }}
                        placeholder='Password...'
                        disableUnderline
                    />
                    <Link href='/admin/home'
                        underline='none'>
                        <Button
                            type='submit'
                            className='bg-stone-800 text-stone-300 border-stone-500 border-2  font-semibold hover:bg-stone-700 '
                            sx={{ borderRadius: '25px', width: '300px', height: '50px', margin: '10px', p: 1 }}
                        >
                            Login
                        </Button>
                    </Link>
                </motion.div>
                <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} open={error > ''} onClose={() => setError('')} >
                    <span className='bg-stone-800 p-3 rounded-2xl px-7 ' ><ErrorOutlineIcon />{" "}{error}</span>
                </Snackbar>
            </Card>
        </form >
    )
}

export default Admin