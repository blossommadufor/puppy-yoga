import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faCheckCircle,
  faHandHoldingHeart,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "Shelter / Rescue Partnership",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `[Paws & Yoga Inquiry] ${formData.purpose} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Paws & Yoga Studio Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nInquiry Type: ${formData.purpose}\n\nMessage:\n${formData.message}\n\nWarm regards,\n${formData.name}`
    );

    // Open user's default email client addressed to pawsandyogabj@gmail.com
    window.location.href = `mailto:pawsandyogabj@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2C2C] flex flex-col justify-between pt-24 sm:pt-28">
      <main className="flex-1">
        {/* ======================================================== */}
        {/* CONTACT HERO SECTION */}
        {/* ======================================================== */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-14 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#7C8D73]/10 text-[#7C8D73] border border-[#7C8D73]/20 mb-4"
            >
              <FontAwesomeIcon icon={faPaw} className="text-[#C98F73] text-[10px]" />
              Partner With Us &amp; Connect
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2C2C2C] tracking-tight leading-tight"
            >
              Let's Create <br />
              <span className="font-serif italic font-normal text-[#7C8D73]">Meaningful Moments</span> Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-[#6B5E55] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Whether you are an animal shelter, veterinary hospital, wellness partner, corporate team,
              or a guest with questions, we would love to hear from you.
            </motion.p>
          </div>

          {/* Grid: Form on Left, Direct Channels on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#E8DFD5]"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#FAF6F0]">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2C2C2C]">
                    Send a Message or Partner Proposal
                  </h2>
                  <p className="text-xs text-[#6B5E55] mt-1">
                    Fill out the form below to connect directly with our studio directors.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#7C8D73]/15 text-[#7C8D73] flex items-center justify-center text-lg">
                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#7C8D73]/20 text-[#7C8D73] flex items-center justify-center text-3xl mx-auto">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C2C2C]">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-[#6B5E55] max-w-md mx-auto leading-relaxed">
                    Your message draft has been prepared for <strong>pawsandyogabj@gmail.com</strong>.
                    If your email client didn't open automatically, you can also send an email directly using the button below.
                  </p>
                  <div className="pt-2">
                    <a
                      href="mailto:pawsandyogabj@gmail.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#7C8D73] text-white font-bold text-sm shadow-md hover:bg-[#687760] transition cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                      <span>Email pawsandyogabj@gmail.com</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A3E3D] mb-1">
                        Your Full Name <span className="text-[#C98F73]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Amina Bello"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5] text-[#2C2C2C] focus:outline-none focus:border-[#7C8D73] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#4A3E3D] mb-1">
                        Your Email Address <span className="text-[#C98F73]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="amina@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5] text-[#2C2C2C] focus:outline-none focus:border-[#7C8D73] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A3E3D] mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5] text-[#2C2C2C] focus:outline-none focus:border-[#7C8D73] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#4A3E3D] mb-1">
                        Inquiry Purpose <span className="text-[#C98F73]">*</span>
                      </label>
                      <select
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5] text-[#2C2C2C] focus:outline-none focus:border-[#7C8D73] transition cursor-pointer"
                      >
                        <option value="Shelter / Rescue Partnership">
                          🐾 Animal Shelter / Rescue Partnership
                        </option>
                        <option value="Corporate Wellness & Private Events">
                          🏢 Corporate Wellness / Private Event
                        </option>
                        <option value="Membership & Pack Inquiries">
                          ✨ Membership &amp; Pack Questions
                        </option>
                        <option value="Veterinary & Care Collaboration">
                          🩺 Veterinary / Animal Care Collaboration
                        </option>
                        <option value="General Studio Question">
                          🧘 General Question / Customer Care
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4A3E3D] mb-1">
                      Message / Partnership Proposal <span className="text-[#C98F73]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about yourself, your shelter/brand, or what you would like to collaborate on..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#E8DFD5] text-[#2C2C2C] focus:outline-none focus:border-[#7C8D73] transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-[#7C8D73] hover:bg-[#687760] text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                    <span>Send Email Inquiry</span>
                  </button>
                  <p className="text-[11px] text-center text-[#6B5E55]">
                    Your default email application will open addressed to pawsandyogabj@gmail.com
                  </p>
                </form>
              )}
            </motion.div>

            {/* Channels & Location Column */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-5 space-y-6"
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
                      <strong className="block text-xs uppercase font-bold text-[#2C2C2C]">Studio Location</strong>
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
                      <strong className="block text-xs uppercase font-bold text-[#2C2C2C]">Session Days</strong>
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
                      <strong className="block text-xs uppercase font-bold text-[#2C2C2C]">Official Email</strong>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
