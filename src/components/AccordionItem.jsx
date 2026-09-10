import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-[#7C8D73] text-[#FAF6F0] border-[#7C8D73] shadow-md"
          : "bg-white text-[#2C2C2C] border-[#BFAF9B]/40 hover:border-[#7C8D73]/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
      >
        <span
          className={`sm:text-xl transition-colors ${
            isOpen ? "text-[#FAF6F0]" : "text-[#7C8D73]"
          }`}
        >
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-[#BFAF9B] text-[#2C2C2C] rotate-180 shadow-sm"
              : "bg-[#7C8D73]/10 text-[#7C8D73]"
          }`}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-6 sm:px-6 pt-0 text-[#FAF6F0]/90 leading-relaxed border-t border-[#BFAF9B]/30 mt-1">
          <p className="pt-3">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;