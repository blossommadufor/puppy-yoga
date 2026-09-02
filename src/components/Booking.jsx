import React, { useState } from "react";
import StepTracker from "./StepTracker";
import StepClassSelect from "./StepClassSelect";
import StepSchedule from "./StepSchedule";
import StepDetailsForm from "./StepDetailsForm";
import BookingSummarySidebar from "./BookingSummarySidebar";
import BookingConfirmation from "./BookingConfirmation";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxReachedStep, setMaxReachedStep] = useState(1);

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [spots, setSpots] = useState(1);
  const [addMatcha, setAddMatcha] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const goToStep = (stepNum) => {
    setCurrentStep(stepNum);
    if (stepNum > maxReachedStep) {
      setMaxReachedStep(stepNum);
    }
  };

  const calculateTotal = () => {
    if (!selectedClass) return 0;
    let total = selectedClass.basePrice * spots;
    if (addMatcha) total += 2500 * spots;
    return total;
  };

  const handleReset = () => {
    setCurrentStep(1);
    setMaxReachedStep(1);
    setSelectedClass(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setSpots(1);
    setAddMatcha(false);
    setFormData({ fullName: "", email: "", phone: "", notes: "" });
  };

  return (
    <div id="booking" className="lg:py-20  py-16 px-7 lg:px-16 flex justify-center items-start">
      <div className="max-w-5xl w-full">
        {currentStep <= 3 && (
          <StepTracker
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            maxReachedStep={maxReachedStep}
          />
        )}

        {currentStep === 4 ? (
          <BookingConfirmation
            selectedClass={selectedClass}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            spots={spots}
            formData={formData}
            totalAmount={calculateTotal()}
            onReset={handleReset}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
            <div className="lg:col-span-2 space-y-6">
              {currentStep === 1 && (
                <StepClassSelect
                  selectedClass={selectedClass}
                  setSelectedClass={setSelectedClass}
                  onNext={() => goToStep(2)}
                />
              )}

              {currentStep === 2 && (
                <StepSchedule
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                  spots={spots}
                  setSpots={setSpots}
                  addMatcha={addMatcha}
                  setAddMatcha={setAddMatcha}
                  onBack={() => setCurrentStep(1)}
                  onNext={() => goToStep(3)}
                />
              )}

              {currentStep === 3 && (
                <StepDetailsForm
                  formData={formData}
                  setFormData={setFormData}
                  onBack={() => setCurrentStep(2)}
                  onSubmit={() => goToStep(4)}
                  totalAmount={calculateTotal()}
                />
              )}
            </div>

            <div className="lg:col-span-1">
              <BookingSummarySidebar
                selectedClass={selectedClass}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                spots={spots}
                addMatcha={addMatcha}
                totalAmount={calculateTotal()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;