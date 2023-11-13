import Link from "next/link";

type NavLinkProps = { hash: string, name: string, handleClick?: () => void };

const NavLink = ({ hash, name, handleClick }: NavLinkProps) => {

    return (

        < Link
            onClick={handleClick}
            href={hash}
            className="block py-2 pl-3 pr-4 text-gray-600 sm:text-xl md:p-0 hover:text-gray-800 dark:text-white"
        >
            {name}
        </Link >
    );
};

export default NavLink;