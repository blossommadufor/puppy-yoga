import React, { useState } from "react";
import { classOptions } from "../bookingData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const StepClassSelect = ({ selectedClass, setSelectedClass, onNext }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item) => {
    setSelectedClass(item);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    onNext();
  };

  return (
    <div className="relative">
      <h2 className="md:text-3xl text-2xl font-bold text-[#2C2C2C] mb-1">
        Select a Session Experience
      </h2>
      <p className="text-[#6B5E55] mb-6">
        Choose your preferred yoga flow and puppy interaction style.
      </p>

      <div className="space-y-6">
        {classOptions.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4 ${
              selectedClass?.id === item.id
                ? "bg-white border-[#E07A5F] shadow-lg scale-[1.01]"
                : "bg-[#FAF6F0]/80 border-transparent hover:border-[#D69F7E]/50"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold uppercase bg-[#E07A5F]/15 text-[#E07A5F] text-xs px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                <span className="text-xs md:text-sm text-gray-500">
                  {item.duration} · {item.capacity}
                </span>
              </div>
              <h3 className="font-bold text-[#2C2C2C] text-lg">{item.title}</h3>
              <p className="text-[#6B5E55] mt-1 text-sm md:text-base">{item.desc}</p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="text-xl font-bold text-[#2C2C2C]">
                ₦{item.basePrice.toLocaleString()}
              </span>
              <span className="text-xs text-gray-500 block">per spot</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-[#FAF6F0]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <span className="font-bold uppercase bg-[#E07A5F]/15 text-[#E07A5F] text-xs px-2.5 py-1 rounded-full">
                {selectedClass.tag}
              </span>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mt-2">
                {selectedClass.title}
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                {selectedClass.duration} · {selectedClass.capacity}
              </p>
            </div>

            {/* Description */}
            <p className="text-[#6B5E55] text-sm mb-6">{selectedClass.desc}</p>

            {/* Included Benefits */}
            <div className="mb-8 bg-[#FAF6F0] p-4 rounded-2xl">
              <h4 className="font-bold text-[#2C2C2C] text-sm mb-3">
                What’s Included:
              </h4>
              <ul className="space-y-2.5">
                {selectedClass.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-[#2C2C2C]">
                    <div className="bg-[#E07A5F]/20 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                      <FontAwesomeIcon icon={faCheck} className="text-[#E07A5F] text-xs" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-gray-100">
              <div>
                <span className="text-xs text-gray-500 block">Total Price</span>
                <span className="text-2xl font-bold text-[#2C2C2C]">
                  ₦{selectedClass.basePrice.toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleConfirm}
                className="w-full sm:w-auto bg-[#E07A5F] text-white py-3 px-6 rounded-xl shadow-md hover:bg-[#c86247] transition-all font-medium"
              >
                Continue to Schedule →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepClassSelect;