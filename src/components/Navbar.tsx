"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative w-24 h-20">
              <Image
                src="/images/logo.png"
                alt="The MultiOne Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 96px"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/smart-home"
              className="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Smart Home
            </Link>
            <Link
              href="/smart-office"
              className="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Smart Office
            </Link>
            <Link
              href="/services"
              className="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMenu}
          />
          
          {/* Menu */}
          <div className="relative bg-white shadow-lg transform transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/smart-home"
                className="text-gray-900 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={closeMenu}
              >
                Smart Home
              </Link>
              <Link
                href="/smart-office"
                className="text-gray-900 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={closeMenu}
              >
                Smart Office
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-900 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 