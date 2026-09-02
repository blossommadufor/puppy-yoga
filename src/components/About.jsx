import React from "react";
import { motion } from "framer-motion";
import mainImg from "../assets/cheers.jpeg";
import overlayImg from "../assets/solo3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faDog, faMugHot, faPaw, faSpa } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="relative lg:py-20 py-16 overflow-hidden flex flex-col items-center justify-center bg-[#F4F0EA]">
      
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#E07A5F]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#8A9A86]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#D69F7E]/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mb-16 text-center"
      >
        <p className="bg-[#FAF6F0] text-[#2C2C2C] py-2.5 px-6 rounded-full text-xs font-extrabold tracking-widest shadow-md border border-[#E8DFD5] inline-flex items-center gap-2.5 uppercase">
          <FontAwesomeIcon icon={faPaw} className="text-[#8A9A86] text-sm" />
          PAWS & MATCHA EXPERIENCE
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full max-w-md mx-auto pb-10 pr-6"
        >
          <div className="w-full h-[400px] overflow-hidden rounded-[30px] shadow-2xl shadow-[#D69F7E]/20 border-2 border-[#FAF6F0] animate-[floatFast_2.5s_ease-in-out_infinite]">
            <img
              src={mainImg}
              alt="Puppy Yoga Main"
              className="w-full h-full object-cover animate-[zoomFast_3s_ease-in-out_infinite]"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-1/2 h-56 overflow-hidden rounded-[24px] border-4 border-[#FAF6F0] shadow-2xl shadow-[#E07A5F]/15 z-20 animate-[floatOverlayFast_2s_ease-in-out_infinite]">
            <img
              src={overlayImg}
              alt="Puppy Yoga Overlay"
              className="w-full h-full object-cover animate-[zoomFast_2.5s_ease-in-out_infinite_reverse]"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 justify-between">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#FAF6F0]/90 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-[#C5A880]/10 border border-[#E8DFD5] border-l-8 border-l-[#8A9A86] hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl hover:shadow-[#E07A5F]/15 transition-all duration-300"
          >
            <h2 className="text-4xl font-extrabold text-[#2C2C2C] mb-3 tracking-tight">
              Yoga + <span className="italic font-serif text-[#7C8D73]">Puppies</span>
            </h2>
            <p className="text-[#6B5E55] text-base leading-relaxed italic">
              Our mantra is pure: Joyful movement, gentle stretching, and post-session sips in a tranquil studio space.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-[#FAF6F0]/90 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-[#C5A880]/10 border border-[#E8DFD5] flex flex-col items-center text-center hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl hover:shadow-[#8A9A86]/20 transition-all duration-300"
          >
            
            <div className="flex justify-center gap-8 mb-6">
              
              <span className="flex flex-col items-center gap-2 group/icon cursor-pointer">
                <div className="h-14 w-14 rounded-full bg-[#8A9A86] flex justify-center items-center shadow-lg shadow-[#8A9A86]/30 group-hover/icon:-translate-y-1.5 group-hover/icon:scale-110 transition-all duration-300 ring-4 ring-[#8A9A86]/20">
                  <FontAwesomeIcon icon={faDog} className="text-2xl text-white"/>
                </div>
                <p className="text-sm font-bold text-[#5C4D44] tracking-wide mt-2">Puppy Love</p>
              </span>

              <span className="flex flex-col items-center gap-2 group/icon cursor-pointer">
                <div className="h-14 w-14 rounded-full bg-[#8A9A86] flex justify-center items-center shadow-lg shadow-[#8A9A86]/30 group-hover/icon:-translate-y-1.5 group-hover/icon:scale-110 transition-all duration-300 ring-4 ring-[#8A9A86]/20">
                  <FontAwesomeIcon icon={faSpa} className="text-2xl text-white"/>
                </div>
                <p className="text-sm font-bold text-[#5C4D44] tracking-wide mt-2">Yoga Flow</p>
              </span>

              <span className="flex flex-col items-center gap-2 group/icon cursor-pointer">
                <div className="h-14 w-14 rounded-full bg-[#8A9A86] flex justify-center items-center shadow-lg shadow-[#8A9A86]/30 group-hover/icon:-translate-y-1.5 group-hover/icon:scale-110 transition-all duration-300 ring-4 ring-[#8A9A86]/20">
                  <FontAwesomeIcon icon={faMugHot} className="text-2xl text-white"/>
                </div>
                <p className="text-sm font-bold text-[#5C4D44] tracking-wide mt-2">Matcha Sips</p>
              </span>

            </div>

            <h3 className="text-xl font-extrabold text-[#2C2C2C] mb-4">
              Puppy Yoga + Matcha Session
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              <p className="bg-[#F3ECE0] py-2 px-4 rounded-full text-xs text-[#4A3E3D] flex items-center gap-2 border border-[#E5D7C5] shadow-sm hover:bg-[#E07A5F] hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faCalendar} className="text-[#E07A5F] text-sm"/>
                Booking: 12:00 PM
              </p>
              <p className="bg-[#F3ECE0] py-2 px-4 rounded-full text-xs text-[#4A3E3D] flex items-center gap-2 border border-[#E5D7C5] shadow-sm hover:bg-[#8A9A86] hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faClock} className="text-[#8A9A86] text-sm"/>
                Duration: 60 Mins
              </p>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Continuous CSS Keyframe Animations */}
      <style>{`
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes floatOverlayFast {
          0%, 100% { transform: translateY(0px) rotate(3deg) scale(1); }
          50% { transform: translateY(-14px) rotate(-2deg) scale(1.04); }
        }
        @keyframes zoomFast {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};

export default About;