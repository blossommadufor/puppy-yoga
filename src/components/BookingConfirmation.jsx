import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { availableDates } from "../bookingData";

const BookingConfirmation = ({ selectedClass, selectedDate, selectedTime, spots, formData, totalAmount, onReset }) => {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl text-center max-w-xl mx-auto border border-[#E8DFD5]">
      <FontAwesomeIcon icon={faCheckCircle} className="text-6xl text-[#8A9A86] mb-4" />
      <h2 className="md:text-3xl lg:text-4xl font-extrabold text-[#2C2C2C] mb-2">Booking Confirmed!</h2>
      <p className="text-[#6B5E55] md:text-xl mb-10">
        We've sent a confirmation email to <span className=" text-soft ">{formData.email}</span>.
      </p>

      <div className="bg-[#FAF6F0] p-6 rounded-2xl text-left text-sm space-y-3 mb-8 border border-[#E8DFD5]">
        <div className="flex justify-between">
          <span className="text-gray-500">Session:</span>
          <span className=" text-[#2C2C2C]">{selectedClass?.title}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Date & Time:</span>
          <span className=" text-[#2C2C2C]">
            {availableDates.find((d) => d.dateVal === selectedDate)?.label} @ {selectedTime}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Attendee:</span>
          <span className=" text-[#2C2C2C]">
            {formData.fullName} ({spots} {spots > 1 ? "spots" : "spot"})
          </span>
        </div>
        <div className="flex justify-between border-t pt-3 border-[#E8DFD5]">
          <span className=" text-[#2C2C2C]">Total Paid:</span>
          <span className=" text-[#E07A5F] text-base">₦{totalAmount.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={onReset}
        className="bg-soft text-white py-3 px-8 rounded-xl transition-all"
      >
        Book Another Class
      </button>
    </div>
  );
};

export default BookingConfirmation;