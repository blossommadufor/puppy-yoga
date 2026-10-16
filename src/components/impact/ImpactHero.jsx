import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import heroBgImg from "../../assets/cheers.jpeg";

const ImpactHero = () => {
  return (
    <section className="relative w-full text-white py-24 sm:py-32 md:py-36 px-6 sm:px-12 lg:px-24 overflow-hidden text-center flex items-center justify-center">
      {/* Background Studio Picture with Blur & Depth */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroBgImg}
          alt="Paws and Yoga impact cuddle moment"
          className="w-full h-full object-cover object-center filter blur-[3px] scale-105 transform"
        />
        {/* Rich Olive/Forest Translucent Gradient Overlay for High Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#212A1E]/85 via-[#3B4934]/82 to-[#1E261A]/92 backdrop-blur-2xs" />
      </div>

      {/* Ambient Lighting Accents */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#FAF6F0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#C98F73]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Typography */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto space-y-6"
      >
        {/* <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 text-[#FAF6F0] backdrop-blur-md border border-white/25 shadow-sm">
          <FontAwesomeIcon icon={faPaw} className="text-[#BFAF9B]" />
          Animal Welfare &amp; Community Outreach · Abuja, Nigeria
        </span> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight drop-shadow-sm">
          Our <span className="font-serif italic text-[#FAF6F0]">Impact</span>
        </h1>

        <p className="text-white/95 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
          More than yoga on a mat. We are dedicated to creating meaningful, restorative
          connections between people and shelter animals through movement, mindfulness,
          and positive socialization.
        </p>

        {/* <div className="pt-2 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-white/80 font-bold">
          <span>Don Smart Kennel Partner</span>
          <span>•</span>
          <span>Abuja, Nigeria</span>
        </div> */}
      </motion.div>
    </section>
  );
};

export default ImpactHero;
