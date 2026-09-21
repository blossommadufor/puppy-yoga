import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";
import mainHeroImg from "../assets/solo1.jpeg"; 
import topRightImg from "../assets/solo2.jpg"; 
import bottomRightImg from "../assets/hero2.jpg"; 
import heroBg from "../assets/bg3.jpg"; 

const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="relative z-10 bg-gray-transparent pt-32 md:pt-36 pb-16 lg:pb-12 min-h-fit lg:min-h-screen px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            type: "spring",
            stiffness: 20,
          }}
          className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.span
            className="bg-gray-200 py-1 px-3 rounded-lg text-xs md:text-sm text-gray-700 inline-flex items-center"
          >
            <FontAwesomeIcon icon={faHeart} className="text-soft mr-2" />
            Paws and Yoga Experience
          </motion.span>
          <h2 className="mt-4 sm:mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Paws and Yoga <br />
            <h2 className="text-soft italic">Wellness + Balance</h2>
          </h2>
          <p className="mt-4 sm:mt-6 md:text-xl text-gray-800 max-w-xl">
            Step out of daily noise and into a tranquil studio space where gentle
            restorative yoga blends seamlessly with warm, unconditional joy of
            puppies and kittens.
          </p>

          <a href="#booking">
            <Button className="mt-6">
            Book a Session
          </Button>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            type: "spring",
            stiffness: 20,
          }}
          className="relative flex justify-center items-center w-full max-w-lg mx-auto mb-10 lg:mb-0"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-xl transform -rotate-3 sm:-rotate-5 border-2 border-warm/30">
              <img 
                src={mainHeroImg} 
                alt="Puppy Yoga Main Class" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 sm:space-y-4 flex flex-col justify-between">
              <div className="h-32 sm:h-44 lg:h-48 rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-lg transform rotate-2 sm:rotate-3 border-2 border-warm/30">
                <img 
                  src={topRightImg} 
                  alt="Puppy interaction" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-28 sm:h-36 lg:h-44 rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-lg border-2 border-warm/30">
                <img 
                  src={bottomRightImg} 
                  alt="Yoga pose with puppy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          <div className="absolute -bottom-6 left-4 sm:left-12 bg-white/90 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl shadow-xl border border-warm/30 flex items-center gap-3 z-20">
            <span className="text-xl sm:text-2xl">🐶</span>
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-soft">All Skill Levels</p>
              <p className="text-xs sm:text-sm font-semibold text-[#2C2C2C]">Beginner Friendly</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;