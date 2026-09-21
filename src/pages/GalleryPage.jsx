import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Local image import
import galleryImg from "../assets/gallery1.jpeg";

// 20 items using exclusively your image
const GALLERY_ITEMS = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  url: galleryImg,
}));

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2C2C] mt-20 px-4 py-8 sm:px-8 sm:py-12 md:px-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <span className="text-xs uppercase tracking-widest text-[#C98F73] font-semibold">
          Visual Journal
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mt-2 mb-3 sm:mb-4">
          Captured Moments
        </h1>
        <p className="text-[#6B5E55] text-xs sm:text-sm md:text-base max-w-lg mx-auto">
          A collection of our studio sessions and memorable highlights.
        </p>
      </div>

      {/* Clean Uniform Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.url}
              alt={`Gallery item ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors flex items-center justify-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faXmark} className="text-lg" />
            </button>

            {/* Modal Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-black"
            >
              <img
                src={selectedImage.url}
                alt="Full size preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;