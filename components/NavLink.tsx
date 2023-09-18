import Link from "next/link";
import { useState } from "react";

type NavLinkProps = { hash: string, name: string, handleClick?: () => void };

const NavLink = ({ hash, name, handleClick }: NavLinkProps) => {

    return (

        < Link
            onClick={handleClick}
            href={hash}
            className="block py-2 pl-3 pr-4 text-gray-600 sm:text-xl md:p-0 hover:text-gray-800"
        >
            {name}
        </Link >
    );
};

export default NavLink;