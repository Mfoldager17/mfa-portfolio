import { type } from 'os'
import React from 'react'

const SectionHeading = ({ children }:
    {
        children: React.ReactNode
    }) => {
    return (
        <h2 className='text-3xl font-bold capitalize mb-8 text-center font-serif'>{children}</h2>
    )
}

export default SectionHeading