import React from "react";
import { motion } from "framer-motion";

import solo5Img from "../../assets/solo5.jpg";
import gallery6Img from "../../assets/gallery6.jpeg";
import connectionImg from "../../assets/gallery14.jpg";

const ImpactPhotoShowcase = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
      {/* Photo 1: Rounded top-left */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl rounded-tl-[50px] overflow-hidden shadow-lg border border-[#FAF6F0] bg-white h-64 sm:h-72 relative group"
      >
        <img
          src={solo5Img}
          alt="Playful rescue puppy in studio"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
          <p className="text-white text-xs font-bold">Unconditional Cuddles</p>
        </div>
      </motion.div>

      {/* Photo 2: Balanced squircle */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl overflow-hidden shadow-lg border border-[#FAF6F0] bg-white h-64 sm:h-72 relative group"
      >
        <img
          src={gallery6Img}
          alt="Mindful connection moment on mat"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
          <p className="text-white text-xs font-bold">Mutual Serenity</p>
        </div>
      </motion.div>

      {/* Photo 3: Rounded bottom-right */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl rounded-br-[50px] overflow-hidden shadow-lg border border-[#FAF6F0] bg-white h-64 sm:h-72 relative group"
      >
        <img
          src={connectionImg}
          alt="Gentle touch and socialization"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
          <p className="text-white text-xs font-bold">Compassionate Touch</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactPhotoShowcase;
