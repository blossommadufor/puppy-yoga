import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faCheckCircle,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
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
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#E8DFD5]"
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
            If your email client didn't open automatically, you can also send an email
            directly using the button below.
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
  );
};

export default ContactForm;
