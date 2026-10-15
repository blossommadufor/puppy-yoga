import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faStar,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

import ImpactSlideshow from "./ImpactSlideshow";
import ImpactShelterSection from "./ImpactShelterSection";
import ImpactPhotoShowcase from "./ImpactPhotoShowcase";

const ImpactArticle = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      {/* Article Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#C98F73] mb-3 block">
          Official Impact Narrative • Abuja, Nigeria
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2C2C] tracking-tight leading-tight max-w-3xl mx-auto">
          More Than Yoga: How Paws &amp; Yoga Is Supporting Shelter Puppies Through
          Connection and Socialization
        </h2>
        <div className="w-16 h-1 bg-[#7C8D73] mx-auto mt-6 rounded-full" />
      </div>

      {/* Article Body Content */}
      <div className="space-y-12 text-base sm:text-lg text-[#4A3E3D] leading-relaxed font-normal">
        {/* Opening Intro */}
        <p className="text-lg sm:text-xl font-light text-[#2C2C2C] leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#7C8D73] first-letter:mr-2 first-letter:float-left">
          At Paws &amp; Yoga, we believe that wellness extends beyond the individual. It
          includes the animals we share our world with, the connections we build, and the
          compassion we show to those who need it most.
        </p>

        <p>
          Our mission is to create meaningful experiences that bring people and animals
          together through movement, mindfulness, and positive interaction. Beyond the
          yoga sessions, we are committed to supporting animal wellbeing, encouraging
          puppy socialization, and helping people develop a deeper appreciation for the
          bond between humans and animals.
        </p>

        {/* Modular Slideshow Component */}
        <ImpactSlideshow />

        {/* Modular Shelter Partnership Section */}
        <ImpactShelterSection />

        {/* Section 2: Building a Stronger Human-Animal Connection */}
        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#C98F73]/15 text-[#C98F73] flex items-center justify-center text-sm shrink-0">
              <FontAwesomeIcon icon={faHandHoldingHeart} />
            </span>
            Building a Stronger Human–Animal Connection
          </h3>

          <p>
            At the heart of Paws &amp; Yoga is the belief that the connection between humans
            and animals can be a meaningful part of our wellbeing.
          </p>

          <p>
            Our yoga sessions offer participants an opportunity to slow down, reconnect
            with themselves, and experience the joy of sharing a space with puppies. These
            gentle interactions can encourage empathy, mindfulness, and a greater
            understanding of animal needs.
          </p>

          <p>
            For shelter puppies, these experiences provide opportunities to become familiar
            with people in a positive environment. For participants, they offer a chance to
            appreciate animals beyond their appearance and recognize the importance of
            patience, kindness, and responsible care.
          </p>

          <p>
            We believe that when people have opportunities to connect with animals in
            thoughtful and respectful ways, they can develop a stronger appreciation for
            animal welfare and the importance of creating safe, loving environments for them.
          </p>
        </div>

        {/* Modular Multi-Photo Showcase */}
        <ImpactPhotoShowcase />

        {/* Section 3: Wellness With a Purpose */}
        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] tracking-tight flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#BFAF9B]/25 text-[#7A6959] flex items-center justify-center text-sm shrink-0">
              <FontAwesomeIcon icon={faStar} />
            </span>
            Wellness With a Purpose
          </h3>

          <p>
            Paws &amp; Yoga is creating a space where wellness and compassion meet. By
            combining yoga, community, and animal interaction, we are introducing an
            experience that supports both human wellbeing and a greater awareness of animal
            welfare in Abuja.
          </p>

          <p>
            Our partnership with Don Smart Kennel Animal Shelter reflects our commitment
            to making our experiences about more than relaxation and movement. It is about
            creating opportunities for positive change, encouraging responsible
            relationships with animals, and bringing greater attention to the needs of
            shelter puppies.
          </p>

          <p>
            We are proud to work alongside a partner that shares our commitment to animal
            care, and we look forward to continuing to create experiences that bring people
            closer to animals while keeping their wellbeing at the centre of everything we do.
          </p>
        </div>

        {/* Closing Studio Pull Quote */}
        <div className="my-12 p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#BFAF9B]/50 relative shadow-xs">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-[#C98F73]/30 text-4xl mb-3 block"
          />
          <p className="text-xl sm:text-2xl font-serif italic text-[#2C2C2C] leading-snug">
            "Because at Paws &amp; Yoga, every connection matters. Every gentle interaction
            counts. And wellness is even more meaningful when it extends to the paws beside
            us."
          </p>
          <span className="mt-4 block text-xs font-bold uppercase tracking-wider text-[#7C8D73]">
            — The Paws &amp; Yoga Studio Philosophy
          </span>
        </div>
      </div>
    </article>
  );
};

export default ImpactArticle;
