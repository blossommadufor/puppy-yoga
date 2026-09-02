import React from "react";
import { classOptions } from "../bookingData";

const StepClassSelect = ({ selectedClass, setSelectedClass, onNext }) => {
  return (
    <div className="">
      <h2 className="md:text-3xl text-2xl font-bold text-[#2C2C2C] mb-1">Select a Session Experience</h2>
      <p className=" text-[#6B5E55] mb-6">Choose your preferred yoga flow and puppy interaction style.</p>

      <div className="space-y-10">
        {classOptions.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedClass(item)}
            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4 ${
              selectedClass?.id === item.id
                ? "bg-white border-[#E07A5F] shadow-lg scale-[1.01]"
                : "bg-[#FAF6F0]/80 border-transparent hover:border-[#D69F7E]/50"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className=" font-bold uppercase bg-[#E07A5F]/15 text-[#E07A5F] text-sm md:text-base px-2.5 py- rounded-full">
                  {item.tag}
                </span>
                <span className=" text-gray-500">{item.duration} · {item.capacity}</span>
              </div>
              <h3 className="font-bold text-[#2C2C2C] text-lg">{item.title}</h3>
              <p className=" text-[#6B5E55] mt-1">{item.desc}</p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xl  font-bold text-[#2C2C2C]">₦{item.basePrice.toLocaleString()}</span>
              <span className=" text-gray-500 block">per spot</span>
            </div>
          </div>
        ))}
      </div>

      {selectedClass && (
        <div className="mt-8 flex justify-end">
          <button
            onClick={onNext}
            className="bg-[#E07A5F] text-white py-3 px-8 rounded-xl shadow-md hover:bg-[#c86247] transition-all"
          >
            Continue to Schedule →
          </button>
        </div>
      )}
    </div>
  );
};

export default StepClassSelect;