import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlay } from "@fortawesome/free-solid-svg-icons";

// Local image import
import galleryImg from "../assets/gallery1.jpeg";

// Array of 20 items (mix of images and videos)
const GALLERY_ITEMS = Array.from({ length: 20 }, (_, index) => {
  const isVideo = index === 3 || index === 11 || index === 18; // Example: items 4, 12, and 19 are videos
  return {
    id: index + 1,
    type: isVideo ? "video" : "image",
    category: ["Events", "Classes", "Styling", "Studio"][index % 4],
    url: isVideo
      ? "https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video file path (e.g., '../assets/video1.mp4')
      : galleryImg,
  };
});

const CATEGORIES = ["All", "Events", "Classes", "Styling", "Studio"];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2C2C] px-4 py-8 sm:px-8 sm:py-12 md:px-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <span className="text-xs uppercase tracking-widest text-[#C98F73] font-semibold">
          Visual Journal
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mt-2 mb-3 sm:mb-4">
          Captured Moments
        </h1>
        <p className="text-[#6B5E55] text-xs sm:text-sm md:text-base max-w-lg mx-auto">
          Explore our collection of studio sessions, style showcases, and peaceful moments.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#2C2C2C] text-[#FAF6F0] shadow-md"
                  : "bg-white/80 text-[#6B5E55] hover:bg-white hover:text-[#2C2C2C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Container (2 columns on mobile, scaling up to 4 on desktop) */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group bg-stone-200"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                  {/* Play Indicator Badge */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faPlay} className="text-xs sm:text-lg ml-0.5 sm:ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={item.url}
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors flex items-center justify-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faXmark} className="text-lg" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-black"
            >
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.url}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt="Full size view"
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;