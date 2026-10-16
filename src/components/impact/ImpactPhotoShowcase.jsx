import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";

import impact2Img from "../../assets/impact2.jpg";
import impact3Img from "../../assets/impact 3.PNG";
import impact4Img from "../../assets/impact4.PNG";
import impact6Video from "../../assets/impact6.MOV";

const ImpactPhotoShowcase = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {/* 1. Photo: impact2.jpg (Rounded top-left corner) */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl rounded-tl-[50px] overflow-hidden shadow-lg border border-[#FAF6F0] bg-white h-72 sm:h-80 relative group select-none"
      >
        <img
          src={impact2Img}
          alt="Rescue puppy cuddles during yoga session"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4 pointer-events-none">
          <p className="text-white text-xs font-bold drop-shadow-xs">Gentle Bonding</p>
        </div>
      </motion.div>

      {/* 2. Video: impact6.MOV (Live active video flow with sound toggle) */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl overflow-hidden shadow-lg border border-[#FAF6F0] bg-black h-72 sm:h-80 relative group select-none"
      >
        {!videoError ? (
          <video
            ref={videoRef}
            src={impact6Video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster={impact2Img}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={impact2Img}
            alt="Active puppy yoga connection"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

        {/* Live Video Indicator Badge */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-xs border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Live Flow
          </span>
        </div>

        {/* Sound Toggle Button */}
        <button
          type="button"
          onClick={toggleSound}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center text-xs backdrop-blur-xs transition cursor-pointer"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          title={isMuted ? "Click to unmute" : "Click to mute"}
        >
          <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
        </button>

        <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
          <p className="text-white text-xs font-bold drop-shadow-xs">Active Play &amp; Calming Touch</p>
        </div>
      </motion.div>

      {/* 3. Photo: impact 3.PNG (Soft balanced squircle) */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl overflow-hidden shadow-lg border border-[#FAF6F0] bg-white h-72 sm:h-80 relative group select-none"
      >
        <img
          src={impact3Img}
          alt="Tranquil puppy yoga connection in Abuja"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4 pointer-events-none">
          <p className="text-white text-xs font-bold drop-shadow-xs">Reciprocal Serenity</p>
        </div>
      </motion.div>

      {/* 4. Photo: impact4.PNG (Rounded bottom-right corner) */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl rounded-br-[50px] overflow-hidden shadow-lg border border-[#FAF6F0] bg-white h-72 sm:h-80 relative group select-none"
      >
        <img
          src={impact4Img}
          alt="Mindful touch and affection with animals"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4 pointer-events-none">
          <p className="text-white text-xs font-bold drop-shadow-xs">Mindful Affection</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactPhotoShowcase;
