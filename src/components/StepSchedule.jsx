import React from "react";
import { availableDates, timeSlotsByDate } from "../bookingData";

const StepSchedule = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  spots,
  setSpots,
  selectedDrink,
  setSelectedDrink,
  addGripSocks,
  setAddGripSocks,
  onBack,
  onNext,
}) => {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="text-gray-500 hover:text-[#2C2C2C] mb-4 inline-flex items-center gap-1 transition-colors cursor-pointer text-sm"
      >
        ← Back to Session Selection
      </button>

      <h2 className="text-2xl font-bold text-[#2C2C2C] mb-1">Pick Date & Time</h2>
      <p className="text-[#6B5E55] mb-6">Select when you'd like to attend your session.</p>

      {/* Dates */}
      <label className="font-bold text-xs uppercase text-[#2C2C2C] tracking-wide block mb-3">
        Available Dates
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {availableDates.map((d) => (
          <button
            key={d.dateVal}
            type="button"
            onClick={() => {
              setSelectedDate(d.dateVal);
              setSelectedTime(null);
            }}
            className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all ${
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
          <label className="font-bold text-xs uppercase text-[#2C2C2C] tracking-wide block mb-3">
            Available Time Slots
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {timeSlotsByDate[selectedDate]?.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
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
        <div className="bg-white p-5 rounded-2xl border border-[#E8DFD5] space-y-5 shadow-sm">
          <h4 className="font-bold text-xs uppercase text-[#2C2C2C] tracking-wide">
            Customize Experience
          </h4>

          {/* Number of Spots */}
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[#2C2C2C] font-medium block">Number of Spots</span>
              <span className="text-xs text-gray-500">How many tickets are you booking?</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSpots(Math.max(1, spots - 1))}
                className="w-8 h-8 rounded-full bg-gray-100 font-bold hover:bg-gray-200 text-[#2C2C2C] transition-colors"
              >
                -
              </button>
              <span className="font-bold text-[#2C2C2C] min-w-[1rem] text-center">{spots}</span>
              <button
                type="button"
                onClick={() => setSpots(spots + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 font-bold hover:bg-gray-200 text-[#2C2C2C] transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Included Drink Choice */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <div>
              <span className="text-[#2C2C2C] font-medium block">Complimentary Drink</span>
              <span className="text-xs text-gray-500">Included with your ticket</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <label
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedDrink === "A cup of Matcha"
                    ? "border-[#8A9A86] bg-[#8A9A86]/10 font-medium"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-sm text-[#2C2C2C]">A cup of Matcha</span>
                <input
                  type="radio"
                  name="drinkChoice"
                  value="A cup of Matcha"
                  checked={selectedDrink === "A cup of Matcha"}
                  onChange={(e) => setSelectedDrink(e.target.value)}
                  className="accent-[#8A9A86] w-4 h-4"
                />
              </label>

              <label
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedDrink === "A cup of Coffee"
                    ? "border-[#8A9A86] bg-[#8A9A86]/10 font-medium"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-sm text-[#2C2C2C]">A cup of Coffee</span>
                <input
                  type="radio"
                  name="drinkChoice"
                  value="A cup of Coffee"
                  checked={selectedDrink === "A cup of Coffee"}
                  onChange={(e) => setSelectedDrink(e.target.value)}
                  className="accent-[#8A9A86] w-4 h-4"
                />
              </label>
            </div>
          </div>

          {/* Optional Add-on: Grip Socks */}
          <div className="pt-4 border-t border-gray-100">
            <label className="flex justify-between items-center cursor-pointer">
              <div>
                <span className="text-[#2C2C2C] font-medium block">Add Studio Grip Socks</span>
                <span className="text-xs text-gray-500">
                  Optional (+₦5,000 per pair). Feel free to bring your own!
                </span>
              </div>
              <input
                type="checkbox"
                checked={addGripSocks}
                onChange={(e) => setAddGripSocks(e.target.checked)}
                className="w-5 h-5 accent-[#8A9A86] rounded cursor-pointer shrink-0"
              />
            </label>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-500 hover:text-[#2C2C2C] py-3 px-4 rounded-xl transition-all font-medium text-sm"
        >
          ← Back
        </button>
        {selectedDate && selectedTime && (
          <button
            type="button"
            onClick={onNext}
            className="bg-[#E07A5F] text-white py-3 px-8 rounded-xl shadow-md hover:bg-[#c86247] transition-all font-medium text-sm"
          >
            Enter Details →
          </button>
        )}
      </div>
    </div>
  );
};

export default StepSchedule;