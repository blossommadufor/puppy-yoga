import React from "react";

const StepTracker = ({ currentStep, setCurrentStep, maxReachedStep }) => {
  const steps = [
    { num: 1, label: "Select Class" },
    { num: 2, label: "Schedule" },
    { num: 3, label: "Your Details" },
  ];

  return (
    <div className="flex items-center justify-between max-w-xl mx-auto mb-10 lg:mb-16 text-xs md:text-lg lg:text-xl font-semibold">
      {steps.map((step, idx) => {
        const isClickable = step.num <= maxReachedStep && step.num !== currentStep;

        return (
          <React.Fragment key={step.num}>
            <div
              onClick={() => isClickable && setCurrentStep(step.num)}
              className={`flex items-center gap-2 ${
                isClickable ? "cursor-pointer hover:opacity-80" : ""
              } ${currentStep >= step.num ? "text-[#E07A5F]" : "text-gray-400"}`}
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  currentStep >= step.num
                    ? "bg-[#E07A5F] text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.num}
              </span>
              <span>{step.label}</span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] mx-3 ${
                  currentStep > step.num ? "bg-[#E07A5F]" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepTracker;