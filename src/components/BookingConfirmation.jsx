import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { availableDates } from "../bookingData";

const BookingConfirmation = ({
  selectedClass,
  selectedDate,
  selectedTime,
  spots = 1,
  selectedDrink,
  addGripSocks,
  formData,
  totalAmount,
  onReset,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl text-center max-w-xl mx-auto border border-[#E8DFD5]">
      <FontAwesomeIcon icon={faCheckCircle} className="text-6xl text-[#8A9A86] mb-4" />
      <h2 className="md:text-3xl lg:text-4xl font-extrabold text-[#2C2C2C] mb-5 md:mb-10">Booking Confirmed!</h2>

      {/* Studio Location Card */}
      <div className="bg-[#8A9A86]/10 p-4 rounded-2xl mb-6 border border-[#8A9A86]/20 flex items-center justify-between text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#8A9A86] flex items-center justify-center text-white shrink-0">
            <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
          </div>
          <div>
            <span className="text-gray-400 block uppercase  text-[10px] tracking-wider">
              Studio Location
            </span>
            <p className=" text-[#2C2C2C] text-sm">Paws & Yoga Studio</p>
            <p className="text-xs text-gray-600">57 Ebitu Ukiwe street , jabi, abuja</p>
          </div>
        </div>
      </div>

      {/* Summary Details */}
      <div className="bg-[#FAF6F0] p-6 rounded-2xl text-left text-sm space-y-3 mb-8 border border-[#E8DFD5]">
        <div className="flex justify-between">
          <span className="text-gray-500">Session:</span>
          <span className=" text-[#2C2C2C]">{selectedClass?.title}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Date & Time:</span>
          <span className=" text-[#2C2C2C]">
            {availableDates.find((d) => d.dateVal === selectedDate)?.label || selectedDate} @ {selectedTime}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Attendee:</span>
          <span className=" text-[#2C2C2C]">
            {formData.fullName} ({spots} {spots > 1 ? "spots" : "spot"})
          </span>
        </div>

        {selectedDrink && (
          <div className="flex justify-between border-t pt-3 border-[#E8DFD5]">
            <span className="text-gray-500">Included Beverage:</span>
            <span className=" text-[#8A9A86]">{selectedDrink}</span>
          </div>
        )}

        {addGripSocks && (
          <div className="flex justify-between">
            <span className="text-gray-500">Grip Socks ({spots} {spots > 1 ? "pairs" : "pair"}):</span>
            <span className=" text-[#2C2C2C]">₦{(5000 * spots).toLocaleString()}</span>
          </div>
        )}

        <div className="flex justify-between border-t pt-3 border-[#E8DFD5] text-base ">
          <span className="text-[#2C2C2C]">Total Paid:</span>
          <span className="text-[#E07A5F]">₦{totalAmount.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={onReset}
        className="bg-[#8A9A86] hover:bg-[#788874] text-white  py-3 px-8 rounded-xl transition-all cursor-pointer shadow-md"
      >
        Book Another Class
      </button>
    </div>
  );
};

export default BookingConfirmation;