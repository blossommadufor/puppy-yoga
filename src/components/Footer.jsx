import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = ({
  instagramUrl = "https://www.instagram.com/pawsandyogaabj?stkn=MWpyaXlrcmwwbjh0NA%3D%3D&utm_source=qr",
  instagramHandle = "@pawsandyogaabj",
  tiktokUrl = "https://www.tiktok.com/@pawsandyoga0",
  tiktokHandle = "@pawsandyoga0",
  whatsappUrl = "https://wa.me/message/XVUM4TSF7MFXD1",
  whatsappHandle = "Chat with us",
}) => {
  return (
    <footer className="bg-[#FAF6F0] text-[#2C2C2C] border-t-2 border-[#7C8D73]/20 py-10 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="flex items-center gap-2 text-xl font-black text-[#7C8D73] tracking-tight">
            <FontAwesomeIcon icon={faPaw} className="text-lg" />
            Paws & Yoga
          </a>
          <p className="text-xs font-medium text-[#6B5E55]">
            Mindful movement, joyful wags, and matcha sips.
          </p>
        </div>

        {/* Social Links with Handle Names */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C8D73]/10 text-[#7C8D73] text-xs font-semibold hover:bg-[#7C8D73] hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-sm" />
            <span>{instagramHandle}</span>
          </a>

          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C8D73]/10 text-[#7C8D73] text-xs font-semibold hover:bg-[#7C8D73] hover:text-white transition-all duration-300"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} className="text-sm" />
            <span>{tiktokHandle}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C8D73]/10 text-[#7C8D73] text-xs font-semibold hover:bg-[#7C8D73] hover:text-white transition-all duration-300"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-sm" />
            <span>{whatsappHandle}</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#6B5E55] font-medium">
          <p>© {new Date().getFullYear()} Paws & Yoga Studio.</p>
          <p className="mt-0.5 flex items-center justify-center md:justify-start gap-1">
            Made with <FontAwesomeIcon icon={faHeart} className="text-[#E07A5F] text-[10px]" /> for pet lovers.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;