import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const ContactHero = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#7C8D73]/10 text-[#7C8D73] border border-[#7C8D73]/20 mb-4"
      >
        <FontAwesomeIcon icon={faPaw} className="text-[#C98F73] text-[10px]" />
        Partner With Us &amp; Connect
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2C2C2C] tracking-tight leading-tight"
      >
        Let's Create <br />
        <span className="font-serif italic font-normal text-[#7C8D73]">
          Meaningful Moments
        </span>{" "}
        Together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-[#6B5E55] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        Whether you are an animal shelter, veterinary hospital, wellness partner,
        corporate team, or a guest with questions, we would love to hear from you.
      </motion.p>
    </div>
  );
};

export default ContactHero;
