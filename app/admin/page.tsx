import { TextField } from '@mui/material'
import React from 'react'

const Admin = () => {
    return (
        <form action="">
            <TextField

                className="w-full bg-stone-800"
                label="Email"
                variant="outlined"
                InputLabelProps={{ className: 'text-stone-300 border-0' }}
            />
        </form >
    )
}

export default Admin