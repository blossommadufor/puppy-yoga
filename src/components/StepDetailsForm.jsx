import React from "react";
import InputField from "./InputField";

const StepDetailsForm = ({ formData, setFormData, onSubmit, totalAmount }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDetailsValid = formData.fullName && formData.email && formData.phone;

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#2C2C2C] mb-1 text-center sm:text-left">
        Attendee Details
      </h2>
      <p className="text-sm text-[#6B5E55] mb-6 text-center sm:text-left">
        Fill in your information to secure your mats.
      </p>

      <form
        className="bg-white p-6 rounded-2xl border border-[#E8DFD5] space-y-4 shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Jane Doe"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="jane@example.com"
            required
          />

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+234 800 000 0000"
            required
          />
        </div>

        <div>
          <label className="uppercase text-[#E07A5F] block mb-3 text-xs font-bold tracking-wider">
            Special Notes / Allergies (Optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={3}
            placeholder="Let us know if you have any dog allergies or yoga physical accommodations."
            className="w-full p-3 rounded-xl border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-[#E07A5F]"
          />
        </div>
      </form>

      {/* Button Wrapper Centered */}
      <div className="mt-8 flex justify-center items-center">
        <button
          disabled={!isDetailsValid}
          onClick={onSubmit}
          className={`w-full sm:w-auto py-3.5 px-8 rounded-xl shadow-md transition-all font-semibold text-center text-base ${
            isDetailsValid
              ? "bg-[#8A9A86] text-white hover:bg-[#778873] cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Complete Booking (₦{totalAmount.toLocaleString()})
        </button>
      </div>
    </div>
  );
};

export default StepDetailsForm;