import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
  faExpand,
  faPaw,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Button from "../components/Button";

// All 15 studio gallery images
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpeg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpeg";
import gallery13 from "../assets/gallery13.jpg";
import gallery14 from "../assets/gallery14.jpg";
import gallery15 from "../assets/gallery15.jpeg";

const GALLERY_IMAGES = [
  { id: 2, src: gallery2, alt: "Puppy Yoga moment 2" },
  { id: 3, src: gallery3, alt: "Puppy Yoga moment 3" },
  { id: 4, src: gallery4, alt: "Puppy Yoga moment 4" },
  { id: 5, src: gallery5, alt: "Puppy Yoga moment 5" },
  { id: 6, src: gallery6, alt: "Puppy Yoga moment 6" },
  { id: 7, src: gallery7, alt: "Puppy Yoga moment 7" },
  { id: 8, src: gallery8, alt: "Puppy Yoga moment 8" },
  { id: 9, src: gallery9, alt: "Puppy Yoga moment 9" },
  { id: 10, src: gallery10, alt: "Puppy Yoga moment 10" },
  { id: 11, src: gallery11, alt: "Puppy Yoga moment 11" },
  { id: 12, src: gallery12, alt: "Puppy Yoga moment 12" },
  { id: 13, src: gallery13, alt: "Puppy Yoga moment 13" },
  { id: 14, src: gallery14, alt: "Puppy Yoga moment 14" },
  { id: 15, src: gallery15, alt: "Puppy Yoga moment 15" },
];

const HIGHLIGHT_BADGES = [
  { icon: faPaw, text: "100% Cuddle Guaranteed" },
  { icon: faHeart, text: "All Levels Welcome" },
  { icon: faPaw, text: "Restorative Flow" },
  { icon: faHeart, text: "Pure Serotonin" },
];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }
  }, [selectedIndex]);

  const showPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  const activeImage = selectedIndex !== null ? GALLERY_IMAGES[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2C2C] flex flex-col justify-between pt-28 sm:pt-32">
      <main className="px-4 sm:px-8 md:px-12 lg:px-16 flex-1">
        {/* Header Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#7C8D73]/10 text-[#7C8D73] border border-[#7C8D73]/20">
              <FontAwesomeIcon icon={faPaw} className="text-[#C98F73] text-[10px]" />
              Visual Journal & Studio Moments
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-4 mb-4 text-[#2C2C2C]"
          >
            Moments of Joy & Serenity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B5E55] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          >
            A visual diary of mindful movements, joyful tail wags, and cozy puppy cuddles
            captured during our weekly restorative studio sessions.
          </motion.p>

          {/* Quick Studio Highlight Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6"
          >
            {HIGHLIGHT_BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-sm text-[#6B5E55] text-xs font-medium border border-[#BFAF9B]/40 shadow-xs"
              >
                <FontAwesomeIcon icon={badge.icon} className="text-[#C98F73] text-[10px]" />
                {badge.text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Responsive Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 max-w-7xl mx-auto">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
              className="break-inside-avoid mb-6 group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-stone-100 border border-[#BFAF9B]/30 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Ambient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                {/* Top Badge */}
                <div className="flex items-center justify-between w-full">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white border border-white/25">
                    <FontAwesomeIcon icon={faPaw} className="text-[#C98F73] text-[10px]" />
                    Studio Session
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/35 transition-colors">
                    <FontAwesomeIcon icon={faExpand} className="text-xs" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warm Studio Call-to-Action Section */}
        <div className="max-w-4xl mx-auto mt-16 sm:mt-24 mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7C8D73] to-[#5F7057] text-white p-8 sm:p-12 text-center shadow-xl border border-white/10">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 text-white backdrop-blur-sm mb-4 border border-white/20">
                <FontAwesomeIcon icon={faHeart} className="text-[#C98F73]" />
                Experience The Serotonin
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4">
                Ready to meet our sweet pups?
              </h2>
              <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal leading-relaxed">
                Reserve your spot for an upcoming restorative session. Mats, cuddles, and refreshing
                beverages are all prepared for you.
              </p>
              <a href="/#booking">
                <Button
                  variant="soft"
                  className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Book a Session
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Deluxe Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 select-none"
          >
            {/* Top Toolbar */}
            <div
              className="w-full max-w-5xl flex items-center justify-between text-white z-20 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium tracking-wide">
                  {selectedIndex + 1} / {GALLERY_IMAGES.length}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-stone-300">
                  <FontAwesomeIcon icon={faPaw} className="text-[#C98F73] text-[10px]" />
                  Studio Moments
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
                aria-label="Close image preview"
              >
                <FontAwesomeIcon icon={faXmark} className="text-lg" />
              </button>
            </div>

            {/* Central Media & Navigation */}
            <div
              className="relative w-full flex-1 flex items-center justify-center my-2 max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Previous photo"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-base" />
              </button>

              {/* Image Container */}
              <motion.div
                key={activeImage.id}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative max-h-full max-w-full flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-h-[72vh] sm:max-h-[78vh] w-auto max-w-[92vw] sm:max-w-[85vw] object-contain rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Next photo"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-base" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="w-full max-w-2xl text-center text-white/80 z-20 pt-2 pb-1 text-xs sm:text-sm font-normal"
              onClick={(e) => e.stopPropagation()}
            >
              Use arrow keys <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">←</span> and <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">→</span> to browse, or <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">Esc</span> to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consistent Page Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;