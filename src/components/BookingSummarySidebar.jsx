import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { availableDates } from "../bookingData";

const BookingSummarySidebar = ({ selectedClass, selectedDate, selectedTime, spots, addMatcha, totalAmount }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#E8DFD5] shadow-lg sticky top-8">
      <h3 className="text-lg  text-[#2C2C2C] mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
        <span>Booking Summary</span>
        <span className="  bg-[#FAF6F0] px-2.5 py-1 rounded-full text-[#E07A5F]">Live</span>
      </h3>

      {!selectedClass ? (
        <div className="text-center py-8 text-gray-400">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-3xl mb-2 opacity-50" />
          <p className="">Select a session on the left to begin your booking details.</p>
        </div>
      ) : (
        <div className="space-y-4 ">
          <div>
            <span className="text-gray-400 block uppercase  text-[10px]">Session</span>
            <p className=" text-[#2C2C2C] text-sm my-2">{selectedClass.title}</p>
            <span className="text-gray-500">{selectedClass.duration}</span>
          </div>

          {selectedDate && selectedTime ? (
            <div className="pt-5 border-t border-gray-100">
              <span className="text-gray-400 block uppercase  text-[10px]">Date & Time</span>
              <p className=" text-[#2C2C2C] text-sm my-2">
                {availableDates.find((d) => d.dateVal === selectedDate)?.label}
              </p>
              <p className="text-[#E07A5F] font-semibold">{selectedTime}</p>
            </div>
          ) : (
            <div className="pt-3 border-t border-gray-100 text-gray-400 italic">
              Select date & time next...
            </div>
          )}

          <div className="pt-3 border-t border-gray-100 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Base price ({spots} {spots > 1 ? "spots" : "spot"}):</span>
              <span className=" text-[#2C2C2C]">₦{(selectedClass.basePrice * spots).toLocaleString()}</span>
            </div>
            {addMatcha && (
              <div className="flex justify-between text-gray-600">
                <span>Matcha add-on:</span>
                <span className=" text-[#2C2C2C]">₦{(2500 * spots).toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="pt-3 border-t-2 border-dashed border-gray-200 flex justify-between items-center text-sm">
            <span className=" text-[#2C2C2C]">Total Amount</span>
            <span className="font-extrabold text-[#E07A5F] text-lg">₦{totalAmount.toLocaleString()}</span>
          </div>

          <div className="bg-[#FAF6F0] p-3 rounded-xl flex items-center gap-2 text-[11px] text-[#6B5E55]">
            <FontAwesomeIcon icon={faShieldAlt} className="text-[#8A9A86]" />
            <span>Free cancellation up to 24 hours prior.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummarySidebar;