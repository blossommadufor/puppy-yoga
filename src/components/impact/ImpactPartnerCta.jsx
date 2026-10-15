import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ImpactPartnerCta = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-8 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-gradient-to-br from-[#7C8D73] to-[#55664C] text-white p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden border border-white/10"
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF6F0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white backdrop-blur-xs border border-white/20">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-amber-200" />
            Shelters, Rescues &amp; Corporate Collaborations
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
            Want to Partner with <br />
            <span className="font-serif italic text-[#FAF6F0]">Paws &amp; Yoga Abuja?</span>
          </h2>

          <p className="text-white/85 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Whether you run an animal shelter, veterinary practice, wellness brand, or represent a corporate team
            looking to sponsor rescue puppy sessions, we would love to collaborate for meaningful animal welfare in Abuja.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#7C8D73] font-bold text-sm shadow-xl hover:bg-[#FAF6F0] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Partner With Us &amp; Contact Our Team</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactPartnerCta;
