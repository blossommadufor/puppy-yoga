import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldCat,
  faHeart,
  faStar,
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";

import impact1Img from "../../assets/impact1.jpg";
import impact5Video from "../../assets/impact5.MOV";

const ImpactShelterSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="space-y-6 pt-4">
      {/* Partnership Headline */}
      <div className="space-y-4">
        <h3 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-[#7C8D73]/15 text-[#7C8D73] flex items-center justify-center text-sm shrink-0">
            <FontAwesomeIcon icon={faShieldCat} />
          </span>
          Our Partnership with Don Smart Kennel Animal Shelter, Abuja
        </h3>

        <p>
          As part of our commitment to animal welfare, Paws &amp; Yoga partners with{" "}
          <strong>Don Smart Kennel Animal Shelter in Abuja, Nigeria</strong>, to support
          the wellbeing and social development of shelter puppies.
        </p>

        <p>
          We recognize that socialization plays an important role in a puppy's development.
          Positive, gentle, and supervised interactions with people can help puppies become
          more comfortable around humans, explore new experiences, and develop the confidence
          needed to navigate different environments.
        </p>

        <p>
          Through this partnership, we aim to create opportunities for shelter puppies to
          experience positive human interaction in a calm, supportive setting. By incorporating
          puppies into our yoga experiences, we hope to encourage healthier social behaviors,
          nurture their confidence, and create meaningful moments of connection.
        </p>

        <div className="p-5 rounded-2xl bg-[#7C8D73]/10 border-l-4 border-[#7C8D73] text-sm sm:text-base text-[#2C2C2C] italic">
          "Our goal is not simply to bring puppies into a wellness space, but to make every
          interaction a positive experience that prioritizes their comfort, safety, and individual
          needs."
        </div>
      </div>

      {/* Dynamic Visual Media: Arched Photo Card (impact1) + Squircle Video Card (impact5) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-10 items-center">
        {/* Arched Photo with Floating Animation (impact1.jpg) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="md:col-span-6 relative"
        >
          <div className="relative rounded-t-[70px] rounded-b-3xl overflow-hidden shadow-lg border-2 border-[#7C8D73]/25 bg-white">
            <img
              src={impact1Img}
              alt="Shelter puppy bonding during yoga session"
              className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-[#7C8D73] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
              <FontAwesomeIcon icon={faHeart} className="text-amber-200 text-[10px]" />
              Shelter Rescue
            </div>
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded-xl text-xs font-medium">
              Loving Socialization on the Mat
            </div>
          </div>
        </motion.div>

        {/* Dynamic Companion Card + Squircle Live Video (impact5.MOV) */}
        <div className="md:col-span-6 space-y-4">
          <div className="rounded-tl-[40px] rounded-br-[40px] rounded-tr-2xl rounded-bl-2xl p-6 sm:p-8 bg-white border border-[#E8DFD5] shadow-md relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#C98F73]/15 text-[#C98F73] flex items-center justify-center text-base mb-3">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h4 className="text-lg font-bold text-[#2C2C2C] tracking-tight">
              Structured, Supervised Environment
            </h4>
            <p className="text-xs sm:text-sm text-[#6B5E55] mt-2 leading-relaxed">
              Puppies are never overwhelmed. Every session has designated resting corners,
              fresh water, and certified handlers ensuring the comfort and pacing of each little wag.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-[#7C8D73]">
              <span className="px-2.5 py-1 rounded-full bg-[#7C8D73]/10">✓ Rest Breaks</span>
              <span className="px-2.5 py-1 rounded-full bg-[#7C8D73]/10">✓ Vet Supervised</span>
              <span className="px-2.5 py-1 rounded-full bg-[#7C8D73]/10">✓ Gentle Handling</span>
            </div>
          </div>

          {/* Squircle Secondary Video Player (impact5.MOV) */}
          <div className="rounded-2xl rounded-br-[45px] overflow-hidden shadow-md border border-[#FAF6F0] h-56 sm:h-64 relative group select-none bg-black">
            <video
              ref={videoRef}
              src={impact5Video}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

            {/* Live Indicator Badge */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-xs border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Live Studio Session
              </span>
            </div>

            {/* Mute / Unmute Button */}
            <button
              type="button"
              onClick={toggleSound}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center text-xs backdrop-blur-xs transition cursor-pointer"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              title={isMuted ? "Click to unmute" : "Click to mute"}
            >
              <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
            </button>

            {/* Bottom Caption */}
            <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
              <p className="text-white text-xs font-bold drop-shadow-xs">
                Playful Interaction &amp; Social Development · Abuja
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactShelterSection;
