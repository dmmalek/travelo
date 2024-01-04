import Link from "next/link";
import React from 'react'

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`${menuOpen ? 'block' : 'hidden sm:block'} absolute w-full sm:w-auto top-32 left-0 right-0 bg-white sm:bg-transparent sm:relative sm:top-0`}>
      <ul className="block sm:flex items-center gap-[30px]">
        <li className="border sm:border-0 border-[#eaeaea]" onClick={()=> setMenuOpen(!menuOpen)}>
          <Link  href='/' className="inline-block text-[#000] p-5 w-full sm:text-white" >
            Home
          </Link>
        </li>
        <li className=" border sm:border-0 border-[#eaeaea]" onClick={()=> setMenuOpen(!menuOpen)} >
          <Link href='/about' className=" inline-block text-[#000] p-5 w-full sm:text-white" >
            About
          </Link>
        </li>
        <li className="border sm:border-0 border-[#eaeaea]" onClick={()=> setMenuOpen(!menuOpen)}>
          <Link href='/services' className=" inline-block text-[#000] p-5 w-full sm:text-white" >
            Services
          </Link>
        </li>
        <li className="border sm:border-0 border-[#eaeaea] cta  hidden sm:block">
          <a className="text-white btn" >
            Take Actions
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu