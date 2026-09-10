import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faqData } from "../faqData";
import AccordionItem from "./AccordionItem";

const FaqSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#FAF6F0] text-[#2C2C2C] py-16 px-7 lg:px-16 border-t-2 border-[#7C8D73]/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#7C8D73] bg-[#7C8D73]/10 px-4 py-1.5 rounded-full border border-[#7C8D73]/20 shadow-sm mb-3">
            <FontAwesomeIcon icon={faQuestionCircle} /> Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7C8D73] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6B5E55] mt-2 max-w-lg mx-auto font-medium">
            Everything you need to know about our puppy yoga flows, studio safety, and booking policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-center bg-[#7C8D73] text-[#FAF6F0] rounded-2xl p-6 shadow-sm border border-[#7C8D73]">
          <p>Still have questions? We’re happy to help!</p>
          <p className="text-[#FAF6F0]/80 mt-1">
            Reach out directly via email at{" "}
            <a
              href="mailto:hello@pawsandyoga.com"
              className="text-[#BFAF9B] underline hover:text-[#FAF6F0] transition-colors"
            >
              hello@pawsandyoga.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;