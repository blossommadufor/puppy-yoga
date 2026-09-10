import React from "react";

const Button = ({ 
  children, 
  variant = "soft", 
  onClick, 
  className = "", 
  type = "button" 
}) => {
  const baseStyles = "py-3 px-6 rounded-lg font-medium transition-colors focus:outline-none";

  const variants = {
    soft: "bg-[#C98F73] hover:bg-[#BFAF9B] text-white",
    olive: "bg-[#7C8D73] hover:bg-[#6b7a63] text-white",
    outline: "border-2 border-[#C98F73] text-[#C98F73] hover:bg-[#C98F73] hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.soft} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;