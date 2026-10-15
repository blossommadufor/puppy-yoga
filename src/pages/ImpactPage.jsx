import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faHeart,
  faHandHoldingHeart,
  faShieldCat,
  faArrowRight,
  faQuoteLeft,
  faStar,
  faChevronLeft,
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

// Studio photos for hero, active slideshow, and photo insets
import heroBgImg from "../assets/cheers.jpeg";
import pupsImg from "../assets/pups.jpeg";
import shelterPupImg from "../assets/solo3.jpg";
import connectionImg from "../assets/gallery14.jpg";
import solo1Img from "../assets/solo1.jpeg";
import solo2Img from "../assets/solo2.jpg";
import solo4Img from "../assets/solo4.jpeg";
import solo5Img from "../assets/solo5.jpg";
import gallery6Img from "../assets/gallery6.jpeg";

const SLIDESHOW_IMAGES = [
  {
    src: pupsImg,
    tag: "Shelter Care",
    title: "Gentle Socialization on the Mat",
    subtitle: "Shelter puppies experiencing positive human touch and calm bonding early in life.",
  },
  {
    src: heroBgImg,
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

const ImpactPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advancing active slideshow every 3.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDESHOW_IMAGES.length) % SLIDESHOW_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2C2C] flex flex-col justify-between pt-16 sm:pt-20">
      <main className="flex-1">
        {/* ======================================================== */}
        {/* FULL WIDTH HERO SECTION WITH PICTURE BG & SOFT BLUR */}
        {/* ======================================================== */}
        <section className="relative w-full text-white py-24 sm:py-32 md:py-36 px-6 sm:px-12 lg:px-24 overflow-hidden text-center flex items-center justify-center">
          {/* Background Studio Picture with Blur & Depth */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={heroBgImg}
              alt="Paws and Yoga impact cuddle moment"
              className="w-full h-full object-cover object-center filter blur-[3px] scale-105 transform"
            />
            {/* Rich Olive/Forest Translucent Gradient Overlay for High Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#212A1E]/85 via-[#3B4934]/82 to-[#1E261A]/92 backdrop-blur-2xs" />
          </div>

          {/* Ambient Lighting Accents */}
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#FAF6F0]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#C98F73]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Hero Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-4xl mx-auto space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 text-[#FAF6F0] backdrop-blur-md border border-white/25 shadow-sm">
              <FontAwesomeIcon icon={faPaw} className="text-[#BFAF9B]" />
              Animal Welfare &amp; Community Outreach · Abuja, Nigeria
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight drop-shadow-sm">
              Our <span className="font-serif italic text-[#FAF6F0]">Impact</span>
            </h1>

            <p className="text-white/95 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
              More than yoga on a mat. We are dedicated to creating meaningful, restorative
              connections between people and shelter animals through movement, mindfulness,
              and positive socialization.
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-white/80 font-bold">
              <span>Don Smart Kennel Partner</span>
              <span>•</span>
              <span>Abuja, Nigeria</span>
            </div>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* EDITORIAL ARTICLE SECTION WITH ACTIVE DYNAMIC PHOTOS */}
        {/* ======================================================== */}
        <article className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          {/* Article Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#C98F73] mb-3 block">
              Official Impact Narrative • Abuja, Nigeria
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2C2C] tracking-tight leading-tight max-w-3xl mx-auto">
              More Than Yoga: How Paws &amp; Yoga Is Supporting Shelter Puppies Through Connection and Socialization
            </h2>
            <div className="w-16 h-1 bg-[#7C8D73] mx-auto mt-6 rounded-full" />
          </div>

          {/* Article Body Content */}
          <div className="space-y-12 text-base sm:text-lg text-[#4A3E3D] leading-relaxed font-normal">
            {/* Opening Intro */}
            <p className="text-lg sm:text-xl font-light text-[#2C2C2C] leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#7C8D73] first-letter:mr-2 first-letter:float-left">
              At Paws &amp; Yoga, we believe that wellness extends beyond the individual. It includes the animals we
              share our world with, the connections we build, and the compassion we show to those who need it
              most.
            </p>

            <p>
              Our mission is to create meaningful experiences that bring people and animals together through
              movement, mindfulness, and positive interaction. Beyond the yoga sessions, we are committed to
              supporting animal wellbeing, encouraging puppy socialization, and helping people develop a deeper
              appreciation for the bond between humans and animals.
            </p>

            {/* ======================================================== */}
            {/* ACTIVE COMPONENT 1: ACTIVE CROSS-FADING SLIDESHOW */}
            {/* ======================================================== */}
            <div className="my-10">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#FAF6F0] bg-[#2C2C2C] h-[340px] sm:h-[420px] md:h-[460px] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={SLIDESHOW_IMAGES[currentSlide].src}
                      alt={SLIDESHOW_IMAGES[currentSlide].title}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Subtle Gradient Shade at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Badge: Active Auto Indicator */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 text-[#7C8D73] shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#7C8D73] animate-pulse" />
                    Active Socialization Moments
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/40 text-white backdrop-blur-xs border border-white/20">
                    {SLIDESHOW_IMAGES[currentSlide].tag}
                  </span>
                </div>

                {/* Bottom Overlay Info Text */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                    {SLIDESHOW_IMAGES[currentSlide].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 max-w-xl font-normal leading-relaxed">
                    {SLIDESHOW_IMAGES[currentSlide].subtitle}
                  </p>
                </div>

                {/* Previous / Next Manual Navigation Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/35 hover:bg-black/60 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer opacity-70 group-hover:opacity-100"
                  aria-label="Previous photo"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/35 hover:bg-black/60 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer opacity-70 group-hover:opacity-100"
                  aria-label="Next photo"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                </button>

                {/* Pagination Dots */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                  {SLIDESHOW_IMAGES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentSlide(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === dotIdx ? "w-6 bg-white" : "w-2 bg-white/45"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Section 1: Don Smart Shelter Partnership */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#7C8D73]/15 text-[#7C8D73] flex items-center justify-center text-sm shrink-0">
                  <FontAwesomeIcon icon={faShieldCat} />
                </span>
                Our Partnership with Don Smart Kennel Animal Shelter, Abuja
              </h3>

              <p>
                As part of our commitment to animal welfare, Paws &amp; Yoga partners with <strong>Don Smart Kennel Animal
                Shelter in Abuja, Nigeria</strong>, to support the wellbeing and social development of shelter puppies.
              </p>

              <p>
                We recognize that socialization plays an important role in a puppy's development. Positive, gentle, and
                supervised interactions with people can help puppies become more comfortable around humans,
                explore new experiences, and develop the confidence needed to navigate different environments.
              </p>

              <p>
                Through this partnership, we aim to create opportunities for shelter puppies to experience positive
                human interaction in a calm, supportive setting. By incorporating puppies into our yoga experiences, we
                hope to encourage healthier social behaviors, nurture their confidence, and create meaningful moments
                of connection.
              </p>

              <p className="p-5 rounded-2xl bg-[#7C8D73]/10 border-l-4 border-[#7C8D73] text-sm sm:text-base text-[#2C2C2C] italic">
                "Our goal is not simply to bring puppies into a wellness space, but to make every interaction a positive
                experience that prioritizes their comfort, safety, and individual needs."
              </p>
            </div>

            {/* ======================================================== */}
            {/* ACTIVE COMPONENT 2: DYNAMIC ORGANIC SHAPES & FLOATING ANIMATION */}
            {/* ======================================================== */}
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

            {/* Section 2: Building a Stronger Human-Animal Connection */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#C98F73]/15 text-[#C98F73] flex items-center justify-center text-sm shrink-0">
                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                </span>
                Building a Stronger Human–Animal Connection
              </h3>

              <p>
                At the heart of Paws &amp; Yoga is the belief that the connection between humans and animals can be a
                meaningful part of our wellbeing.
              </p>

              <p>
                Our yoga sessions offer participants an opportunity to slow down, reconnect with themselves, and
                experience the joy of sharing a space with puppies. These gentle interactions can encourage empathy,
                mindfulness, and a greater understanding of animal needs.
              </p>

              <p>
                For shelter puppies, these experiences provide opportunities to become familiar with people in a
                positive environment. For participants, they offer a chance to appreciate animals beyond their
                appearance and recognize the importance of patience, kindness, and responsible care.
              </p>

              <p>
                We believe that when people have opportunities to connect with animals in thoughtful and respectful
                ways, they can develop a stronger appreciation for animal welfare and the importance of creating safe,
                loving environments for them.
              </p>
            </div>

            {/* ======================================================== */}
            {/* ACTIVE COMPONENT 3: STAGGERED MULTI-PHOTO SHOWCASE */}
            {/* ======================================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
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

            {/* Section 3: Wellness With a Purpose */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#BFAF9B]/25 text-[#7A6959] flex items-center justify-center text-sm shrink-0">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                Wellness With a Purpose
              </h3>

              <p>
                Paws &amp; Yoga is creating a space where wellness and compassion meet. By combining yoga, community,
                and animal interaction, we are introducing an experience that supports both human wellbeing and a
                greater awareness of animal welfare in Abuja.
              </p>

              <p>
                Our partnership with Don Smart Kennel Animal Shelter reflects our commitment to making our
                experiences about more than relaxation and movement. It is about creating opportunities for positive
                change, encouraging responsible relationships with animals, and bringing greater attention to the needs
                of shelter puppies.
              </p>

              <p>
                We are proud to work alongside a partner that shares our commitment to animal care, and we look
                forward to continuing to create experiences that bring people closer to animals while keeping their
                wellbeing at the centre of everything we do.
              </p>
            </div>

            {/* Elegant Closing Pull Quote */}
            <div className="my-12 p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#BFAF9B]/50 relative shadow-xs">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-[#C98F73]/30 text-4xl mb-3 block" />
              <p className="text-xl sm:text-2xl font-serif italic text-[#2C2C2C] leading-snug">
                "Because at Paws &amp; Yoga, every connection matters. Every gentle interaction counts. And wellness is
                even more meaningful when it extends to the paws beside us."
              </p>
              <span className="mt-4 block text-xs font-bold uppercase tracking-wider text-[#7C8D73]">
                — The Paws &amp; Yoga Studio Philosophy
              </span>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* PARTNER WITH US SECTION -> LEADS TO CONTACT PAGE */}
        {/* ======================================================== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#7C8D73] to-[#55664C] text-white p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden border border-white/10"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF6F0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white backdrop-blur-xs border border-white/20">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="text-amber-200" />
                Shelters, Rescues &amp; Corporate Collaborations
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
                Want to Partner with <br />
                <span className="font-serif italic text-[#FAF6F0]">Paws &amp; Yoga Abuja?</span>
              </h2>

              <p className="text-white/85 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                Whether you run an animal shelter, veterinary practice, wellness brand, or represent a corporate team
                looking to sponsor rescue puppy sessions, we would love to collaborate for meaningful animal welfare in Abuja.
              </p>

              <div className="pt-2 flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#7C8D73] font-bold text-sm shadow-xl hover:bg-[#FAF6F0] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Partner With Us &amp; Contact Our Team</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImpactPage;
