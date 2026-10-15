import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faCheck,
  faStar,
  faCrown,
  faHeart,
  faGift,
  faCakeCandles,
  faCalendarCheck,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WHATSAPP_BASE = "https://wa.me/message/XVUM4TSF7MFXD1";

const MEMBERSHIP_PLANS = [
  {
    id: "paw-pass",
    num: "01",
    name: "PAW PASS",
    theme: "warm",
    primaryColor: "#BFAF9B",
    accentBg: "bg-[#BFAF9B]/15",
    accentText: "text-[#8C7A6B]",
    borderHover: "hover:border-[#BFAF9B]",
    badgeBg: "bg-[#BFAF9B]/20 text-[#6B5A4B]",
    btnClass: "bg-[#BFAF9B] hover:bg-[#a89680] text-white",
    basePrice: 65000,
    monthlySavings: "₦5,000",
    classesPerMonth: "2 Paw Yoga classes per month",
    classesHighlight: "2 Classes / Month",
    subtitle: "For those who want a little monthly dose of puppy & kitten cuddles + wellness.",
    features: [
      "2 Paws & Yoga classes per month",
      "Access to weekly puppy/kitten sessions",
      "Priority booking",
      "Member-only pricing",
      "Access to breed-themed classes",
      "Member updates & announcements",
      "Birthday perk 🎂",
    ],
  },
  {
    id: "paw-bestie",
    num: "02",
    name: "PAW BESTIE",
    isPopular: true,
    theme: "olive",
    primaryColor: "#7C8D73",
    accentBg: "bg-[#7C8D73]/15",
    accentText: "text-[#5C6D53]",
    borderHover: "hover:border-[#7C8D73]",
    badgeBg: "bg-[#7C8D73] text-white",
    btnClass: "bg-[#7C8D73] hover:bg-[#687760] text-white shadow-md shadow-[#7C8D73]/25",
    basePrice: 90000,
    monthlySavings: "₦15,000",
    classesPerMonth: "3 Paw Yoga classes per month",
    classesHighlight: "3 Classes / Month",
    subtitle: "For the ones who are ready to make Paw Yoga part of their regular routine.",
    features: [
      "3 Paws & Yoga classes per month",
      "Everything included in Paw Pass",
      "Earlier access to class bookings",
      "Priority access to limited-capacity sessions",
      "Access to special/seasonal Paws & Yoga experiences",
      "Member-only surprises 🎁",
      "Special rates on selected Paws & Yoga events",
    ],
  },
  {
    id: "paw-og",
    num: "03",
    name: "PAW OG",
    theme: "soft",
    primaryColor: "#C98F73",
    accentBg: "bg-[#C98F73]/15",
    accentText: "text-[#B36E4E]",
    borderHover: "hover:border-[#C98F73]",
    badgeBg: "bg-[#C98F73]/20 text-[#A25D3D]",
    btnClass: "bg-[#C98F73] hover:bg-[#b57a5e] text-white shadow-md shadow-[#C98F73]/25",
    basePrice: 112000,
    monthlySavings: "₦28,000",
    classesPerMonth: "4 Paw Yoga classes per month",
    classesHighlight: "1 Class Every Week",
    subtitle: "For the true Paws & Yoga girlies. One class every single week.",
    features: [
      "4 Paws & Yoga classes per month",
      "Everything included in Paw Bestie",
      "First access to weekly classes",
      "Priority access to highly requested breeds",
      "Early access to new class experiences",
      "Exclusive OG member perks",
      "Special birthday surprise 🎂",
      "Member-only event invitations",
      "One friend discount per month",
      "Occasional complimentary Paws & Yoga extras",
    ],
  },
];

const MembershipSection = () => {
  const getWhatsAppLink = (plan) => {
    const priceText = `₦${plan.basePrice.toLocaleString()}/month`;
    const message = `Hi Paws & Yoga! 🐾 I would like to sign up for the *${plan.name}* membership (${priceText}). Please guide me through onboarding!`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="membership" className="relative py-20 lg:py-28 bg-[#FAF6F0] overflow-hidden">
      {/* Ambient background blur elements matching the 3 theme colors */}
      <div className="absolute top-12 left-10 w-80 h-80 bg-[#7C8D73]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C98F73]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#BFAF9B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#7C8D73]/10 text-[#7C8D73] border border-[#7C8D73]/20 mb-4"
          >
            <FontAwesomeIcon icon={faPaw} className="text-[#C98F73] text-[11px]" />
            Find Your Paw Plan
          </motion.div>

          {/* Clean stylized Paw Brand Icon on header */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#7C8D73]/15 text-[#7C8D73] flex items-center justify-center text-xl shadow-xs">
              <FontAwesomeIcon icon={faPaw} />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2C2C2C] tracking-tight leading-tight"
          >
            Make <span className="font-serif italic font-normal text-[#7C8D73]">Paw Yoga</span> Your Ritual
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[#6B5E55] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Monthly classes. Better value. Consistent dopamine &amp; gentle cuddles with our playful puppies and kittens. Built to bring you back.
          </motion.p>

          {/* Flat Monthly Subscription Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#BFAF9B]/50 shadow-xs text-xs sm:text-sm font-semibold text-[#5C6D53]"
          >
            <FontAwesomeIcon icon={faShieldHeart} className="text-[#7C8D73]" />
            <span>Monthly Subscription · Cancel Anytime</span>
          </motion.div>
        </div>

        {/* 3 Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch pt-6">
          {MEMBERSHIP_PLANS.map((plan, idx) => {
            const isOlive = plan.theme === "olive";
            const isWarm = plan.theme === "warm";
            const isSoft = plan.theme === "soft";

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 bg-white border-2 transition-all duration-300 shadow-md hover:shadow-2xl ${
                  isOlive
                    ? "border-[#7C8D73] ring-4 ring-[#7C8D73]/15 md:-translate-y-2"
                    : isSoft
                    ? "border-[#C98F73]/50 hover:border-[#C98F73]"
                    : "border-[#BFAF9B]/50 hover:border-[#BFAF9B]"
                }`}
              >
                {/* Most Popular Floating Badge for Tier 2 */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#7C8D73] text-white shadow-lg border border-white/40">
                      <FontAwesomeIcon icon={faCrown} className="text-amber-200 text-[10px]" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Header: Tier number & Custom Paw Logo icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full ${plan.badgeBg}`}>
                      {plan.num} — {plan.name}
                    </span>

                    {/* Dedicated Paw Icon with the Card's Brand Color */}
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-2xs transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${plan.primaryColor}1A`,
                        color: plan.primaryColor,
                      }}
                      title="Paws & Yoga Member Paw"
                    >
                      <FontAwesomeIcon icon={faPaw} />
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-[#6B5E55] min-h-[40px] leading-relaxed mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Price Block */}
                  <div className="pb-6 border-b border-[#FAF6F0] mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C2C2C] tracking-tight">
                        ₦{plan.basePrice.toLocaleString()}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#8C7A6B]">
                        /month
                      </span>
                    </div>

                    {/* Monthly Savings Tag */}
                    <div className="mt-3 flex items-center justify-between">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${plan.primaryColor}18`,
                          color: plan.primaryColor,
                        }}
                      >
                        <FontAwesomeIcon icon={faStar} className="text-[10px]" />
                        You save {plan.monthlySavings} every month
                      </span>
                    </div>

                    {/* Highlighted Classes Allowance */}
                    <div className="mt-3 py-2 px-3.5 rounded-xl bg-stone-50 border border-stone-200/70 flex items-center justify-between text-xs">
                      <span className="text-[#6B5E55] font-medium">Monthly Allocation:</span>
                      <strong className="text-[#2C2C2C] font-bold">{plan.classesHighlight}</strong>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3E3D]">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] text-white shadow-2xs"
                            style={{ backgroundColor: plan.primaryColor }}
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 ${plan.btnClass}`}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
                    <span>Join {plan.name}</span>
                  </a>
                  <p className="text-[11px] text-center text-[#8C7A6B] mt-2">
                    Instant activation via Member Concierge
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Member Perks / Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DFD5] shadow-xs flex flex-wrap items-center justify-around gap-6 text-center"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#7C8D73]/15 text-[#7C8D73] flex items-center justify-center text-lg">
              <FontAwesomeIcon icon={faPaw} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#2C2C2C]">All Paws &amp; Kittens Included</p>
              <p className="text-[11px] text-[#6B5E55]">Supervised socialization during every flow</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#C98F73]/15 text-[#C98F73] flex items-center justify-center text-lg">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#2C2C2C]">Priority Booking Window</p>
              <p className="text-[11px] text-[#6B5E55]">Reserve your spot before public slots drop</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#BFAF9B]/20 text-[#6B5A4B] flex items-center justify-center text-lg">
              <FontAwesomeIcon icon={faShieldHeart} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#2C2C2C]">Flexible &amp; Friendly</p>
              <p className="text-[11px] text-[#6B5E55]">Pause or switch plans whenever you need</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
