import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldCat,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import shelterPupImg from "../../assets/solo3.jpg";
import solo2Img from "../../assets/solo2.jpg";

const ImpactShelterSection = () => {
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

      {/* Dynamic Visual Cards: Arched Photo Floating Animation + Squircle Companion */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-10 items-center">
        {/* Arched Photo with Floating Animation */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="md:col-span-6 relative"
        >
          <div className="relative rounded-t-[70px] rounded-b-3xl overflow-hidden shadow-lg border-2 border-[#7C8D73]/25 bg-white">
            <img
              src={shelterPupImg}
              alt="A shelter puppy exploring during yoga"
              className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-[#7C8D73] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
              <FontAwesomeIcon icon={faHeart} className="text-amber-200 text-[10px]" />
              Shelter Rescue
            </div>
          </div>
        </motion.div>

        {/* Dynamic Companion Card with Asymmetric Border */}
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

          {/* Squircle Secondary Photo */}
          <div className="rounded-2xl rounded-br-[45px] overflow-hidden shadow-md border border-[#FAF6F0] h-48 sm:h-56 relative group">
            <img
              src={solo2Img}
              alt="Playful interaction during puppy yoga session"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded-xl text-xs font-medium">
              Joyful Playtime in Abuja
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactShelterSection;
