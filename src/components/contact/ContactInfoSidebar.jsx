import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfoSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="space-y-6"
    >
      {/* Studio Info Card */}
      <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#E8DFD5] shadow-sm space-y-4">
        <span className="text-xs uppercase font-bold tracking-wider text-[#7C8D73]">
          Direct Studio Details
        </span>

        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#7C8D73]/10 text-[#7C8D73] flex items-center justify-center text-base shrink-0 mt-0.5">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <strong className="block text-xs uppercase font-bold text-[#2C2C2C]">
                Studio Location
              </strong>
              <p className="text-xs sm:text-sm text-[#6B5E55]">
                Abuja, Federal Capital Territory, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C98F73]/15 text-[#C98F73] flex items-center justify-center text-base shrink-0 mt-0.5">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <strong className="block text-xs uppercase font-bold text-[#2C2C2C]">
                Session Days
              </strong>
              <p className="text-xs sm:text-sm text-[#6B5E55]">
                Fridays &amp; Saturdays (By Prior Reservation)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#BFAF9B]/20 text-[#7A6959] flex items-center justify-center text-base shrink-0 mt-0.5">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <strong className="block text-xs uppercase font-bold text-[#2C2C2C]">
                Official Email
              </strong>
              <a
                href="mailto:pawsandyogabj@gmail.com"
                className="text-xs sm:text-sm text-[#7C8D73] hover:underline"
              >
                pawsandyogabj@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Email Channel Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#7C8D73] text-white shadow-lg space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-xl text-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-white/80 font-bold block">
              Official Email Channel
            </span>
            <h3 className="font-bold text-lg sm:text-xl text-white">
              pawsandyogabj@gmail.com
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
          For all partner proposals, shelter sponsorships, corporate events, and general inquiries, our directors respond directly via email.
        </p>

        <a
          href="mailto:pawsandyogabj@gmail.com"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white text-[#7C8D73] font-bold text-xs shadow-sm hover:bg-[#FAF6F0] transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
          <span>Send Direct Email</span>
        </a>
      </div>

      {/* Social Channels Strip */}
      <div className="p-6 rounded-3xl bg-white border border-[#E8DFD5] shadow-xs space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-[#8C7A6B] block">
          Follow Our Social Pawprints
        </span>
        <div className="flex flex-wrap gap-2.5">
          <a
            href="https://www.instagram.com/pawsandyogaabj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-[#7C8D73] hover:text-white text-xs font-semibold text-[#2C2C2C] transition-all"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span>@pawsandyogaabj</span>
          </a>

          <a
            href="https://www.tiktok.com/@pawsandyoga0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-[#7C8D73] hover:text-white text-xs font-semibold text-[#2C2C2C] transition-all"
          >
            <FontAwesomeIcon icon={faTiktok} />
            <span>@pawsandyoga0</span>
          </a>
        </div>
      </div>

      {/* FAQ Quick Jump */}
      <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#BFAF9B]/50 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-[#C98F73] text-lg" />
          <div>
            <p className="text-xs font-bold text-[#2C2C2C]">Got session questions?</p>
            <p className="text-[11px] text-[#6B5E55]">Vaccinations, late arrivals, what to wear</p>
          </div>
        </div>
        <Link
          to="/#faq"
          className="px-3.5 py-1.5 rounded-xl bg-[#7C8D73]/15 text-[#7C8D73] hover:bg-[#7C8D73] hover:text-white text-xs font-bold transition"
        >
          View FAQ
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactInfoSidebar;
