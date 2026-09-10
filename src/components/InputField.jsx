import React from "react";

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
  error = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-bold text-[#6B5E55] uppercase tracking-wider">
          {label} {required && <span className="text-[#C98F73]">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-[#BFAF9B]/40 bg-white/80 focus:bg-white focus:border-[#7C8D73] focus:ring-2 focus:ring-[#7C8D73]/20 outline-none transition-all text-sm text-[#2C2C2C] placeholder:text-gray-400"
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};

export default InputField;