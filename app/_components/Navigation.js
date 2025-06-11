"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav>
      <div className="hidden lg:flex lg:items-center lg:gap-x-12">
        <Link href="#home" className="no-underline text-gray-950">
          Home
        </Link>
        <Link href="#about" className="no-underline text-gray-950">
          About
        </Link>
        <Link href="#process" className="no-underline text-gray-950">
          Process
        </Link>
        <Link href="#portfolio" className="no-underline text-gray-950">
          Portfolio
        </Link>
        <Link href="#blogs" className="no-underline text-gray-950">
          Blogs
        </Link>
        <Link href="#services" className="no-underline text-gray-950">
          Services
        </Link>
        <Link
          href="#contact"
          className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
        >
          Contact
        </Link>
      </div>
      <div onClick={toggleMenu} className="lg:hidden">
        <i
          className={`pi ${
            isOpen ? "pi-times" : "pi-bars"
          }  group-hover:text-white text-primary-500 text-2xl leading-none`}
        ></i>
      </div>
      <div
        className={`absolute inset-x-4 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 ${
          isOpen ? "flex" : "hidden"
        }`}
        onClick={closeMenu}
      >
        <Link href="/" className="no-underline p-2 text-gray-950">
          Home
        </Link>
        <Link href="#about" className="no-underline p-2 text-gray-950">
          About
        </Link>
        <Link href="#process" className="no-underline p-2 text-gray-950">
          Process
        </Link>
        <Link href="#portfolio" className="no-underline p-2 text-gray-950">
          Portfolio
        </Link>
        <Link href="#blogs" className="no-underline p-2 text-gray-950">
          Blog
        </Link>
        <Link href="#services" className="no-underline p-2 text-gray-950">
          Services
        </Link>
        <Link href="#contact" className="no-underline p-2 text-gray-950">
          Contact
        </Link>
      </div>
    </nav>
  );
}
