import React, { useState } from "react";
import Menu from "./Menu";
import { headers } from "../../../next.config";
import Link from "next/link";
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute w-full start-0 top-0 right-0 ">
      <nav className="flex items-center justify-between relative p-4 w-full h-[80px]">
        <div>
          <Link href="/">
            <img
              src="https://rococo-tartufo-cbea4b.netlify.app/images/home/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
        <div className="sm:hidden cursor-pointer  w-10 h-10 bg-blue-500 text-2xl flex items-center justify-center text-white " onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
