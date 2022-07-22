import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <img src="black_heart.ico" width="50" className="mr-2" />
        <strong className="text-white">That Concept</strong>
      </div>
      <Nav />
    </header>
  );
}
