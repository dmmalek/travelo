import React, { useState } from "react";
import Menu from "./Menu";
import { headers } from "../../../next.config";
import Link from "next/link";

const Header = () => {

    const [menuOpen,setMenuOpen] = useState(false)

  return (
    <header className="absolute w-full bg-current">
        <nav className="flex items-center justify-between relative p-4 w-full h-[80px]">
            <div>
                <Link href='/'>
                    <img src="https://rococo-tartufo-cbea4b.netlify.app/images/home/logo.png" alt="logo" />
                </Link>
            </div>
            <>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </>
        </nav>
    </header>
   
  );
};

export default Header;
