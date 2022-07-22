import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
// import MenuIcon from "@components/Icons/Menu";

function MenuIcon() {
  return (
    <div className="space-y-2">
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
    </div>
  );
}

function HeaderButton(props: any) {
  return (
    <button className="px-4 py-2 font-bold text-white rounded hover:bg-white hover:text-black ml-4">
      {props.text}
    </button>
  );
}

function Nav() {
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

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2 bg-paint-brushes bg-contain">
      <Head>
        <title>That Design</title>
        <link rel="icon" href="/black_heart.ico" />
      </Head>
      <header className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <img src="black_heart.ico" width="50" className="mr-2" />
          <strong className="text-white">That Concept</strong>
        </div>
        <Nav></Nav>
      </header>
    </div>
  );
};

export default Home;
