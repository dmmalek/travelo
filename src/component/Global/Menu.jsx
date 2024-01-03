import Link from "next/link";
import React from 'react'

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className=" ">
      <ul className="flex align-center gap-[30px]">
        <li className="nav__items" onClick={()=> setMenuOpen(!menuOpen)}>
          <Link href='/' className="text-white" >
            Home
          </Link>
        </li>
        <li className="nav__items" onClick={()=> setMenuOpen(!menuOpen)} >
          <Link href='/about' className="text-white" >
            About
          </Link>
        </li>
        <li className="nav__items" onClick={()=> setMenuOpen(!menuOpen)}>
          <Link href='/services' className="text-white" >
            Services
          </Link>
        </li>
        <li className="nav__items cta">
          <a className="text-white btn" >
            Take Actions
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu