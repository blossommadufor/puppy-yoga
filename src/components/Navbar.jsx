import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPaw } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#7C8D73] py-3 px-6 sm:px-12 lg:px-24 flex justify-between items-center border-b border-[#FAF6F0]/10">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <img src={logo} className="w-28 sm:w-32" alt="Logo" />
      </Link>

      {/* Right controls: Our Impact button + Hamburger Toggle */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          to="/impact"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white bg-[#C98F73] hover:bg-[#b87d60] active:scale-95 rounded-full shadow-sm transition-all duration-200"
        >
          <FontAwesomeIcon icon={faPaw} className="text-xs" />
          <span>Our Impact</span>
        </Link>

        {/* Hamburger Toggle Button (Visible on all screen sizes) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none p-1 cursor-pointer transition-transform hover:scale-105"
          aria-label="Toggle Navigation"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Full Navbar Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#7C8D73] border-t border-[#FAF6F0]/10 shadow-xl">
          <ul className="flex flex-col items-center gap-6 py-8 text-white font-bold text-base tracking-wider uppercase">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/#booking"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                BOOKING
              </Link>
            </li>
            <li>
              <Link
                to="/#membership"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                MEMBERSHIP
              </Link>
            </li>
            <li>
              <Link
                to="/impact"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                OUR IMPACT
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                to="/#faq"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#BFAF9B] transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;