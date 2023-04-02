import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

let Links = [
    {
        name: 'Search',
        path: '/search'
    },
    {
        name: 'History',
        path: '/history'
    },
    {
        name: 'Logout',
        path: '/login'
    }
];

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="md:flex mr-20 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {
                Links.map((link) => (
                    <Typography
                        key={link.name} 
                        className="p-1 font-medium text-md"
                    >
                        <Link to={link.path} className="flex items-center">
                            {link.name}
                        </Link>
                    </Typography>
                ))
            }
        </ul>
    );

    return (
        <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 text-slate-200 rounded-none">
            <div className=" mx-auto flex items-center justify-between">
                <Typography
                    as="a"
                    href="/"
                    variant="small"
                    className="font-bold text-2xl cursor-pointer flex items-center font-sans text-slate-400"
                >
                    <span className='text-2xl text-blue-500'>
                        Any
                    </span>
                    Ware
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <IconButton
                    variant="text"
                    className="pb-7 ml-auto h-6 w-6 text-justify text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    <ion-icon name={openNav ? 'close' : 'menu'} size="large" color="primary" ></ion-icon>
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </MobileNav>
        </Navbar>
    );
}

export default NavBar;