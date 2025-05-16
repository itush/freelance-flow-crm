// /app/components/lp/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignRight, X } from "lucide-react";
import { ModeToggle } from "../basic/ModeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" w-full py-4 px-6 flex items-center justify-between border-b 
     shadow-sm 
    sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">FreelanceFlow</span>
        </Link>
      </div>

      {/* Navigation for Larger Screens */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link href="#features">
          <span className="hover:text-indigo-600 cursor-pointer">Features</span>
        </Link>

        <Link href="#blog">
          <span className="hover:text-indigo-600 cursor-pointer">Blog</span>
        </Link>
        <Link href="#pricing">
          <span className="hover:text-indigo-600 cursor-pointer">Pricing</span>
        </Link>
        <Link href="#login">
          <span className="hover:text-indigo-600 cursor-pointer">Login</span>
        </Link>
        <Link href="#signup">
          <span className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 cursor-pointer">
            Sign Up
          </span>
        </Link>
        <ModeToggle />
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-gray-800 dark:text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // X Icon
            <X className="w-6 h-6" />
          ) : (
            // Hamburger Icon          
            <AlignRight className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-200 dark:bg-slate-800 shadow-md z-50">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link href="#features">
              <span
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-indigo-600"
              >
                Features
              </span>
            </Link>

            <Link href="#blog">
              <span
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-indigo-600"
              >
                Blog
              </span>
            </Link>
            <Link href="#pricing">
              <span
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-indigo-600"
              >
                Pricing
              </span>
            </Link>
            <Link href="#login">
              <span
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-indigo-600"
              >
                Login
              </span>
            </Link>
            <Link href="#signup">
              <span
                onClick={() => setIsOpen(false)}
                className="bg-indigo-600 text-white py-2 px-4 rounded cursor-pointer text-center"
              >
                Sign Up
              </span>
            </Link>
            <ModeToggle />
          </div>
          
        </div>
      )}
    </header>
  );
}
