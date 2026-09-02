import React from "react";

const StepDetailsForm = ({ formData, setFormData, onSubmit, totalAmount }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDetailsValid = formData.fullName && formData.email && formData.phone;

  return (
    <div>
      <h2 className="text-2xl  text-[#2C2C2C] mb-1">Attendee Details</h2>
      <p className="text-sm text-[#6B5E55] mb-6">Fill in your information to secure your mats.</p>

      <form className="bg-white p-6 rounded-2xl border border-[#E8DFD5] space-y-4 shadow-sm" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="  uppercase text-[#E07A5F] block mb-3">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Jane Doe"
            className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E07A5F]"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="  uppercase text-[#E07A5F] block mb-3">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="jane@example.com"
              className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E07A5F]"
              required
            />
          </div>
          <div>
            <label className="  uppercase text-[#E07A5F] block mb-3">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+234 800 000 0000"
              className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E07A5F]"
              required
            />
          </div>
        </div>

        <div>
          <label className="  uppercase text-[#E07A5F] block mb-3">Special Notes / Allergies (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={3}
            placeholder="Let us know if you have any dog allergies or yoga physical accommodations."
            className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E07A5F]"
          />
        </div>
      </form>

      <div className="mt-8 flex justify-end">
        <button
          disabled={!isDetailsValid}
          onClick={onSubmit}
          className={` py-3 px-8 rounded-xl shadow-md transition-all ${
            isDetailsValid
              ? "bg-[#8A9A86] text-white hover:bg-[#778873]"
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