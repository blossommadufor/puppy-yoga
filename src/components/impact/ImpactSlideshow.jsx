import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

// Photos for the slideshow
import pupsImg from "../../assets/pups.jpeg";
import cheersImg from "../../assets/cheers.jpeg";
import solo4Img from "../../assets/solo4.jpeg";
import connectionImg from "../../assets/gallery14.jpg";
import solo1Img from "../../assets/solo1.jpeg";

const SLIDESHOW_IMAGES = [
  {
    src: pupsImg,
    tag: "Shelter Care",
    title: "Gentle Socialization on the Mat",
    subtitle: "Shelter puppies experiencing positive human touch and calm bonding early in life.",
  },
  {
    src: cheersImg,
    tag: "Connection",
    title: "Pure Joy & Reciprocal Calm",
    subtitle: "Restorative yoga meets the warm, unconditional happiness of rescue animals.",
  },
  {
    src: solo4Img,
    tag: "Exploration",
    title: "Building Confidence Step by Step",
    subtitle: "Safe, supportive environments help shelter animals explore the world without fear.",
  },
  {
    src: connectionImg,
    tag: "Mindfulness",
    title: "Mindful Touch & Affection",
    subtitle: "Cultivating patience, kindness, and deep appreciation for animal wellbeing.",
  },
  {
    src: solo1Img,
    tag: "Adoption Pathway",
    title: "Preparing Paws for Loving Homes",
    subtitle: "Every interaction brings rescue animals one step closer to loving forever families.",
  },
];

// Fluid directional slide + fade variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? "-100%" : direction < 0 ? "100%" : 0,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  }),
};

const ImpactSlideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap around index safely
  const imageIndex =
    ((page % SLIDESHOW_IMAGES.length) + SLIDESHOW_IMAGES.length) %
    SLIDESHOW_IMAGES.length;

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  const jumpToSlide = (index) => {
    const diff = index - imageIndex;
    if (diff !== 0) {
      setPage([page + diff, diff > 0 ? 1 : -1]);
    }
  };

  // Auto-advance every 4.5 seconds; resets cleanly whenever `page` changes
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [page]);

  const currentImage = SLIDESHOW_IMAGES[imageIndex];

  return (
    <div className="my-10">
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#FAF6F0] bg-[#1E261A] h-[360px] sm:h-[430px] md:h-[480px] select-none group">
        {/* Animated Slide Layer */}
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full h-full object-cover object-center pointer-events-none"
              />
              {/* Translucent Bottom Gradient for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#7C8D73] shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#7C8D73] animate-pulse" />
            Active Socialization
          </span>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/40 text-white backdrop-blur-xs border border-white/20">
            {currentImage.tag}
          </span>
        </div>

        {/* Bottom Slide Info / Caption */}
        <div className="absolute bottom-5 left-5 right-5 z-20 text-white pointer-events-none">
          <motion.div
            key={`caption-${imageIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 drop-shadow-sm">
              {currentImage.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl font-normal leading-relaxed drop-shadow-xs">
              {currentImage.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Previous Navigation Arrow Button */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 active:scale-95 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer shadow-lg hover:shadow-xl focus:outline-none"
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
        </button>

        {/* Next Navigation Arrow Button */}
        <button
          type="button"
          onClick={() => paginate(1)}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 active:scale-95 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer shadow-lg hover:shadow-xl focus:outline-none"
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5">
          {SLIDESHOW_IMAGES.map((_, dotIdx) => {
            const isActive = dotIdx === imageIndex;
            return (
              <button
                key={dotIdx}
                type="button"
                onClick={() => jumpToSlide(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive ? "w-6 bg-white shadow-sm" : "w-2 bg-white/45 hover:bg-white/70"
                }`}
                aria-label={`Jump to slide ${dotIdx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImpactSlideshow;
