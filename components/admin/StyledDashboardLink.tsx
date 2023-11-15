import Link from 'next/link'
import React from 'react'

const StyledDashboardLink = (props: { text: string, href: string }) => {
    return (
        <Link className='bg-stone-800 hover:scale-110 transition duration-700 focus:scale-110 rounded-full p-5 w-[100%] sm:w-[500px] text-center' href={props.href}>
            {props.text}
        </Link>

    )
}

export default StyledDashboardLink


