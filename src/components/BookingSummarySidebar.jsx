import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faShieldAlt,
  faGlassWater,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { availableDates } from "../bookingData";

const BookingSummarySidebar = ({
  selectedClass,
  selectedDate,
  selectedTime,
  spots = 1,
  selectedDrink,
  addGripSocks,
}) => {
  const basePriceTotal = selectedClass ? selectedClass.basePrice * spots : 0;
  const gripSocksTotal = addGripSocks ? 5000 * spots : 0;
  const totalAmount = basePriceTotal + gripSocksTotal;

  // Format drink name: replace "Iced" with "A cup of" or format selected drink string
  const formattedDrink = selectedDrink
    ? selectedDrink.replace(/^Iced\s+/i, "A cup of ")
    : null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#E8DFD5] shadow-lg sticky top-8">
      <h3 className="text-lg  text-[#2C2C2C] mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
        <span>Booking Summary</span>
        <span className="text-xs  bg-[#FAF6F0] px-2.5 py-1 rounded-full text-[#E07A5F]">
          Live
        </span>
      </h3>

      {!selectedClass ? (
        <div className="text-center py-8 text-gray-400">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-3xl mb-2 opacity-50" />
          <p className="text-sm">Select a session on the left to begin your booking details.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Session Info */}
          <div>
            <span className="text-gray-400 block uppercase  text-[10px] tracking-wider">
              Session
            </span>
            <p className=" text-[#2C2C2C] text-sm mt-1">{selectedClass.title}</p>
            <span className="text-xs text-gray-500">{selectedClass.duration}</span>
          </div>

          {/* Date & Time */}
          {selectedDate && selectedTime ? (
            <div className="pt-3 border-t border-gray-100">
              <span className="text-gray-400 block uppercase  text-[10px] tracking-wider">
                Date & Time
              </span>
              <p className=" text-[#2C2C2C] text-sm mt-1">
                {availableDates.find((d) => d.dateVal === selectedDate)?.label || selectedDate}
              </p>
              <p className="text-xs text-[#E07A5F] ">{selectedTime}</p>
            </div>
          ) : (
            <div className="pt-3 border-t border-gray-100 text-gray-400 text-xs italic">
              Select date & time next...
            </div>
          )}

          {/* Complimentary Drink (Only renders after user selection) */}
          {formattedDrink && (
            <div className="pt-3 border-t border-gray-100">
              <span className="text-gray-400 block uppercase  text-[10px] tracking-wider">
                Included Beverage
              </span>
              <p className="text-xs  text-[#8A9A86] mt-1 flex items-center gap-1.5">
                <FontAwesomeIcon icon={faGlassWater} />
                {formattedDrink} (Complimentary)
              </p>
            </div>
          )}

          {/* Pricing Breakdown */}
          <div className="pt-3 border-t border-gray-100 space-y-2 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>
                Base price ({spots} {spots > 1 ? "spots" : "spot"}):
              </span>
              <span className=" text-[#2C2C2C]">
                ₦{basePriceTotal.toLocaleString()}
              </span>
            </div>

            {addGripSocks && (
              <div className="flex justify-between text-gray-600">
                <span>Grip Socks ({spots} {spots > 1 ? "pairs" : "pair"}):</span>
                <span className=" text-[#2C2C2C]">
                  ₦{gripSocksTotal.toLocaleString()}
                </span>
              </div>
            )}
          </div>

          {/* Total Amount */}
          <div className="pt-3 border-t-2 border-dashed border-gray-200 flex justify-between items-center text-sm">
            <span className=" text-[#2C2C2C]">Total Amount</span>
            <span className="font-extrabold text-[#E07A5F] text-xl">
              ₦{totalAmount.toLocaleString()}
            </span>
          </div>

          {/* Policy Notice */}
          <div className="bg-[#FAF6F0] p-3 rounded-xl flex items-center gap-2 text-[11px] text-[#6B5E55]">
            <FontAwesomeIcon icon={faShieldAlt} className="text-[#8A9A86] shrink-0" />
            <span>Free cancellation up to 24 hours prior.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummarySidebar;