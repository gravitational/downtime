import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-end w-full h-12 fixed top-0 bg-black z-50">
      <div className="flex justify-center w-2/4 align-center">
        <LittleStack />
        <Link href="/">
          <a className="text-xl flex flex-col justify-center text-devGreen font-bold ml-2">
            downtime.dev
          </a>
        </Link>
      </div>
      <div className="flex justify-center w-2/4">
      </div>
    </nav>
  );
};

export default NavBar;

const LittleStack = () => (
  <div className="flex w-4 flex-col justify-center">
    <div className="w-full h-1 bg-devGreen border-t border-black"></div>
    <div className="w-full h-1 bg-devGreen border-t border-black"></div>
    <div className="w-full h-1 bg-devGreen border-t border-black"></div>
    <div className="w-full h-1 bg-devGreen border-t border-black"></div>
  </div>
);

