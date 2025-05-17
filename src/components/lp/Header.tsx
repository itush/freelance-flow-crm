// /app/components/lp/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignRight, X } from "lucide-react";
import { ModeToggle } from "../basic/ModeToggle";
import { useAuth } from "@/lib/AuthContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (

   <header className="w-full py-4 px-6 flex items-center justify-between border-b shadow-sm sticky top-0 backdrop-blur z-50">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">FreelanceFlow</span>
        </Link>
      </div>
      
      {/* Navigation for Larger Screens */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link href="/dashboard">
          <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
        </Link>
        <Link href="/#features">
          <span className="hover:text-indigo-600 cursor-pointer">Features</span>
        </Link>
        <Link href="/blog">
          <span className="hover:text-indigo-600 cursor-pointer">Blog</span>
        </Link>
        <Link href="/#pricing">
          <span className="hover:text-indigo-600 cursor-pointer">Pricing</span>
        </Link>
        
        {user ? (
          <div className="relative">
            {/* Profile Avatar/Name Button */}
            <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
            >
              <span className="mr-2 text-gray-800 dark:text-white">{user.name}</span>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 border rounded shadow-md bg-white dark:bg-gray-800">
                <Link href="/dashboard">
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Dashboard
                  </span>
                </Link>
                <Link href="/settings">
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Settings
                  </span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <span className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 cursor-pointer">
              Login
            </span>
          </Link>
        )}
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
            <X className="w-6 h-6" />
          ) : (
            <AlignRight className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-200 dark:bg-slate-800 shadow-md z-50">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link href="/dashboard">
              <span
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-indigo-600"
              >
                Dashboard
              </span>
            </Link>
            <Link href="/#features">
              <span
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-indigo-600"
              >
                Features
              </span>
            </Link>
            <Link href="/blog">
              <span
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-indigo-600"
              >
                Blog
              </span>
            </Link>
            <Link href="/#pricing">
              <span
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-indigo-600"
              >
                Pricing
              </span>
            </Link>
            {user ? (
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="bg-red-600 text-white py-2 px-4 rounded cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <span
                  onClick={() => setIsOpen(false)}
                  className="bg-indigo-600 text-white py-2 px-4 rounded cursor-pointer text-center"
                >
                  Login
                </span>
              </Link>
            )}
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
