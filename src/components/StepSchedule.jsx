import React from "react";
import { availableDates, timeSlotsByDate } from "../bookingData";

const StepSchedule = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  spots,
  setSpots,
  addMatcha,
  setAddMatcha,
  onBack,
  onNext,
}) => {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="text-gray-500 hover:text-[#2C2C2C] mb-4 inline-flex items-center gap-1 transition-colors cursor-pointer"
      >
        ← Back to Session Selection
      </button>

      <h2 className="text-2xl  text-[#2C2C2C] mb-1">Pick Date & Time</h2>
      <p className=" text-[#6B5E55] mb-6">Select when you'd like to attend your session.</p>

      {/* Dates */}
      <label className="  uppercase text-[#2C2C2C] tracking-wide block mb-3">Available Dates</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {availableDates.map((d) => (
          <button
            key={d.dateVal}
            onClick={() => {
              setSelectedDate(d.dateVal);
              setSelectedTime(null);
            }}
            className={`py-3 px-4 rounded-xl   border transition-all ${
              selectedDate === d.dateVal
                ? "bg-[#8A9A86] border-[#8A9A86] text-white shadow-md"
                : "bg-white border-[#E8DFD5] text-[#2C2C2C] hover:border-[#8A9A86]"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Times */}
      {selectedDate && (
        <div>
          <label className="uppercase text-[#2C2C2C] tracking-wide block mb-3">Available Time Slots</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {timeSlotsByDate[selectedDate]?.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 px-4 rounded-xl border transition-all ${
                  selectedTime === time
                    ? "bg-[#E07A5F] border-[#E07A5F] text-white shadow-md"
                    : "bg-white border-[#E8DFD5] text-[#2C2C2C] hover:border-[#E07A5F]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Customizations */}
      {selectedDate && selectedTime && (
        <div className="bg-white p-5 rounded-2xl border border-[#E8DFD5] space-y-4">
          <h4 className="  uppercase text-[#2C2C2C] tracking-wide">Customize Experience</h4>
          
          <div className="flex justify-between items-center">
            <span className="text-[#2C2C2C]">Number of Spots</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSpots(Math.max(1, spots - 1))}
                className="w-8 h-8 rounded-full bg-gray-100  hover:bg-gray-200"
              >
                -
              </button>
              <span className="  text-[#2C2C2C]">{spots}</span>
              <button
                onClick={() => setSpots(spots + 1)}
                className="w-8 h-8 rounded-full bg-gray-100  hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div>
              <span className="text-[#2C2C2C] block">Add Ceremonial Matcha</span>
              <span className="text-xs text-gray-500">+₦2,500 per spot</span>
            </div>
            <input
              type="checkbox"
              checked={addMatcha}
              onChange={(e) => setAddMatcha(e.target.checked)}
              className="w-5 h-5 accent-[#8A9A86] rounded cursor-pointer"
            />
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-500 hover:text-[#2C2C2C] py-3 px-4 rounded-xl transition-all"
        >
          ← Back
        </button>
        {selectedDate && selectedTime && (
          <button
            onClick={onNext}
            className="bg-[#E07A5F] text-white  py-3 px-8 rounded-xl shadow-md hover:bg-[#c86247] transition-all"
          >
            Enter Details →
          </button>
        )}
      </div>
    </div>
  );
};

export default StepSchedule;