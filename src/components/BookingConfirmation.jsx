import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const BookingConfirmation = ({
  selectedClass,
  selectedDate,
  selectedTime,
  spots,
  selectedDrink,
  addGripSocks,
  formData,
  totalAmount,
  onReset,
  whatsappPhone = "2349018204862",
}) => {
  const handleWhatsAppShare = () => {
    const receiptMessage = `*NEW BOOKING RECEIPT - PAWS & YOGA* 🐾
----------------------------------
*Customer:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

*BOOKING DETAILS:*
• *Session:* ${selectedClass?.title || "N/A"}
• *Date:* ${selectedDate}
• *Time:* ${selectedTime}
• *Spots:* ${spots}
• *Beverage:* ${selectedDrink || "None"}
• *Grip Socks:* ${addGripSocks ? "Yes" : "No"}

*TOTAL AMOUNT:* ₦${totalAmount.toLocaleString()}
----------------------------------
Hi! I'd like to complete my payment for this booking.`;

    const encodedMessage = encodeURIComponent(receiptMessage);
    const fullWhatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

    window.open(fullWhatsappUrl, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl border border-[#E8DFD5] shadow-lg text-center">
      <div className="w-16 h-16 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mx-auto mb-4">
        <FontAwesomeIcon icon={faCheckCircle} className="text-3xl" />
      </div>

      <h2 className="text-2xl font-bold text-[#2C2C2C] mb-2">Booking Requested!</h2>
      <p className="text-[#6B5E55] text-sm mb-6">
        Please share your booking receipt via WhatsApp to finalize payment and reserve your spot.
      </p>

      {/* Receipt Details Box */}
      <div className="bg-[#FAF6F0] p-5 rounded-2xl text-left space-y-3 mb-6 border border-[#E8DFD5] text-xs sm:text-sm">
        <div className="flex justify-between pb-2 border-b border-gray-200">
          <span className="text-gray-500">Name:</span>
          <span className="font-semibold text-[#2C2C2C]">{formData.fullName}</span>
        </div>
        <div className="flex justify-between pb-2 border-b border-gray-200">
          <span className="text-gray-500">Session:</span>
          <span className="font-semibold text-[#2C2C2C]">{selectedClass?.title}</span>
        </div>
        <div className="flex justify-between pb-2 border-b border-gray-200">
          <span className="text-gray-500">Date & Time:</span>
          <span className="font-semibold text-[#2C2C2C]">
            {selectedDate} @ {selectedTime}
          </span>
        </div>
        {selectedDrink && (
          <div className="flex justify-between pb-2 border-b border-gray-200">
            <span className="text-gray-500">Beverage:</span>
            <span className="font-semibold text-[#8A9A86]">{selectedDrink}</span>
          </div>
        )}
        <div className="flex justify-between items-center pt-1 font-bold text-[#2C2C2C] text-base">
          <span>Total Due:</span>
          <span className="text-[#E07A5F] text-lg">
            ₦{totalAmount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* WhatsApp Payment CTA Button */}
      <button
        type="button"
        onClick={handleWhatsAppShare}
        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mb-3 cursor-pointer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
        Send Receipt & Pay on WhatsApp
      </button>

      <button
        type="button"
        onClick={onReset}
        className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors cursor-pointer"
      >
        Book another session
      </button>
    </div>
  );
};

export default BookingConfirmation;