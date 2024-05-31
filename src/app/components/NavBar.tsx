'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

const NavBar = () => {

  const currPath = usePathname();
  // console.log(currPath);
  

  const navLinks = [
    {label: "Dashboard", href: '/'},
    {label: "Issues", href: '/issues'}
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            {navLinks.map(link => 
            <Link 
            key={link.href}
            className={`${link.href === currPath ? 'text-gray-700': 'text-gray-500'} hover:text-black transition-colors`} 
            href={link.href}>{link.label}
            </Link>)}
        </ul>
    </nav>
  )
}

export default NavBar