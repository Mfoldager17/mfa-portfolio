import NavLink from './NavLink'

type menuOverlayProps = { links: any, handleClick: () => void }

const MenuOverlay = ({ links, handleClick }: menuOverlayProps) => {
    return (
        <ul className='flex flex-col py-4 items-center justify-center bg-opacity-90 bg-white rounded-sm dark:bg-opacity-80  dark:bg-slate-800 md:hidden'>
            {links.map((link: any, index: React.Key) => (
                <li key={index}>
                    <NavLink hash={link.hash} name={link.name} handleClick={handleClick} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay