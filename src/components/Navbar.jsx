import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#7C8D73] py-3 px-6 sm:px-12 lg:px-24 flex justify-between items-center border-b border-[#FAF6F0]/10">
      <a href="/">
        <img src={logo} className="w-28 sm:w-32" alt="Logo" />
      </a>

      {/* Hamburger Toggle Button (Visible on all screen sizes) */}
      <button
        onClick={toggleMenu}
        className="text-white text-2xl focus:outline-none p-1 cursor-pointer transition-transform hover:scale-105"
        aria-label="Toggle Navigation"
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      {/* Full Navbar Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#7C8D73] border-t border-[#FAF6F0]/10 shadow-xl">
          <ul className="flex flex-col items-center gap-6 py-8 text-white font-bold text-base tracking-wider uppercase">
            <li>
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="/#booking"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                BOOKING
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;