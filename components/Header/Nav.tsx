import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import MenuIcon from "./MenuIcon";

export default function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className="ml-2">
      <div className="hidden sm:flex">
        <HeaderButton text="Projects" />
        <HeaderButton text="About" />
        <HeaderButton text="Contact" />
      </div>
      <div className="sm:hidden relative">
        <button onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon />
        </button>
        {showMenu && (
          <div className="absolute top-10 right-0 z-50 bg-black p-2">
            <HeaderButton text="Projects" />
            <HeaderButton text="About" />
            <HeaderButton text="Contact" />
          </div>
        )}
      </div>
    </nav>
  );
}
