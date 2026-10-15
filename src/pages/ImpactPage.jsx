import React from "react";
import { motion } from "framer-motion";
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
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

// Best suited photos from studio assets
import pupsImg from "../assets/pups.jpeg";
import shelterPupImg from "../assets/solo3.jpg";
import connectionImg from "../assets/gallery14.jpg";

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2C2C] flex flex-col justify-between pt-16 sm:pt-20">
      <main className="flex-1">
        {/* ======================================================== */}
        {/* FULL WIDTH HERO SECTION */}
        {/* ======================================================== */}
        <section className="w-full bg-[#7C8D73] text-white py-20 sm:py-28 md:py-32 px-6 sm:px-12 lg:px-24 relative overflow-hidden text-center">
          {/* Subtle background ambient circles */}
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#FAF6F0]/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 max-w-4xl mx-auto space-y-5"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white backdrop-blur-xs border border-white/20">
              <FontAwesomeIcon icon={faPaw} className="text-[#BFAF9B]" />
              Animal Welfare &amp; Community Outreach · Abuja, Nigeria
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight">
              Our <span className="font-serif italic text-[#FAF6F0]">Impact</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              More than yoga on a mat. We are dedicated to creating meaningful, restorative
              connections between people and shelter animals through movement, mindfulness,
              and positive socialization.
            </p>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* EDITORIAL ARTICLE SECTION */}
        {/* ======================================================== */}
        <article className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          {/* Article Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#C98F73] mb-2 block">
              Official Impact Narrative • Abuja, Nigeria
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2C2C] tracking-tight leading-tight max-w-3xl mx-auto">
              More Than Yoga: How Paws &amp; Yoga Is Supporting Shelter Puppies Through Connection and Socialization
            </h1>
            <div className="w-16 h-1 bg-[#7C8D73] mx-auto mt-6 rounded-full" />
          </div>

          {/* Article Body Content */}
          <div className="space-y-10 text-base sm:text-lg text-[#4A3E3D] leading-relaxed font-normal">
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

            {/* Photo Inset 1: Pups Together */}
            <div className="my-8 rounded-3xl overflow-hidden shadow-lg border border-[#FAF6F0]">
              <img
                src={pupsImg}
                alt="Shelter puppies resting safely during supervised socialization"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-3 bg-white text-center text-xs text-[#6B5E55] italic">
                Shelter puppies receiving gentle, supervised affection during our restorative sessions.
              </div>
            </div>

            {/* Section 1: Don Smart Shelter Partnership */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#7C8D73]/15 text-[#7C8D73] flex items-center justify-center text-sm shrink-0">
                  <FontAwesomeIcon icon={faShieldCat} />
                </span>
                Our Partnership with Don Smart Kennel Animal Shelter, Abuja
              </h2>

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

            {/* Photo Inset 2: Solo Connection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={shelterPupImg}
                  alt="A shelter puppy exploring during yoga"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={connectionImg}
                  alt="Mindful connection between human and dog"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Section 2: Building a Stronger Human-Animal Connection */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#C98F73]/15 text-[#C98F73] flex items-center justify-center text-sm shrink-0">
                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                </span>
                Building a Stronger Human–Animal Connection
              </h2>

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

            {/* Section 3: Wellness With a Purpose */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#BFAF9B]/25 text-[#7A6959] flex items-center justify-center text-sm shrink-0">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                Wellness With a Purpose
              </h2>

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
