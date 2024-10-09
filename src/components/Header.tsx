
"use client";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useState } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";

import Link from "next/link";


const menuItems = [
    {
        title: "INÍCIO",
        link: '/',
        icon: <MdHome size='1.5em' />
    },
    {
        title: "QUEM SOMOS",
        link: '/quemsomos',
        icon: <BsFilePersonFill size='1.5em' />
    },

    {
        title: "CONTATO",
        link: '/#contato',
        icon: <FaPhoneSquareAlt size='1.5em' />
    },
    {
        title: "ACESSE O SISTEMA",
        link: 'https://wealthpulse.com.br/login',
        icon: <MdOutlineLogin size='1.5em' />
    },
];

const styleLink = " text-white font-semibold text-sm hover:text-primary transition-all scroll-smooth"


export default function Header() {
    const [active, setActive] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <Navbar maxWidth="xl" className="bg-black text-white" shouldHideOnScroll isMenuOpen={open} >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle onChange={() => setOpen(!open)} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand >
                    <Link href="/">
                        <div>
                            <h4 className="text-2xl font-bold">
                                Fluxo do <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-2xl font-bold">
                                    Capital
                                </span>

                            </h4>
                        </div>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-10" justify="end">
                <NavbarBrand>
                    <Link href="/">
                        <h4 className="text-2xl font-bold">
                            Fluxo do <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-2xl font-bold">
                                Capital
                            </span>

                        </h4>
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <Link href="/" className="relative inline-block text-white no-underline group scroll-smooth font-bold">
                        INICIO
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/quemsomos" className="relative inline-block text-white no-underline group font-bold">
                        QUEM SOMOS
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="http://localhost:3000/#contato" className="relative inline-block text-white no-underline group scroll-smooth font-bold">
                        CONTATO
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={styleLink} href="/Gemini_Generated_Image_k5t0txk5t0txk5t0.jpg" target="_blank">
                        <Button className=" font-semibold text-sm  hover:text-black" variant="ghost" color="primary">COMEÇE A USAR</Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-black ">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem className="p-1" key={`${item}-${index}`}>
                        <Link
                            onClick={() => setOpen(false)}
                            href={item.link}
                            className="w-full text-white"
                        >
                            <div className="flex items-center gap-4">
                                <div>
                                    {item.icon}
                                </div>
                                <div>
                                    {item.title}
                                </div>
                            </div>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar >
    )
}




