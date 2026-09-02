import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#FAF6F0] text-[#2C2C2C] border-t-2 border-[#7C8D73]/20 py-10 px-4 sm:px-8 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="flex items-center gap-2 text-xl font-black text-[#7C8D73] tracking-tight">
            <FontAwesomeIcon icon={faPaw} className="text-lg" />
            Puppy Yoga
          </a>
          <p className="text-xs font-medium text-[#6B5E55]">
            Mindful movement, joyful wags, and matcha sips.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#7C8D73]/10 text-[#7C8D73] flex items-center justify-center hover:bg-[#7C8D73] hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#7C8D73]/10 text-[#7C8D73] flex items-center justify-center hover:bg-[#7C8D73] hover:text-white transition-all duration-300"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} className="text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#7C8D73]/10 text-[#7C8D73] flex items-center justify-center hover:bg-[#7C8D73] hover:text-white transition-all duration-300"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#6B5E55] font-medium">
          <p>© {new Date().getFullYear()} Puppy Yoga Studio.</p>
          <p className="mt-0.5 flex items-center justify-center md:justify-start gap-1">
            Made with <FontAwesomeIcon icon={faHeart} className="text-[#E07A5F] text-[10px]" /> for pet lovers.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;