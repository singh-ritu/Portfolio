import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "sm",
  onClick,
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {

  const baseStyles = "font-semibold rounded-lg border border-gray-200 shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-400 focus:ring-pink-500",
    secondary: "bg-cyan-500 text-white hover:bg-cyan-400 focus:ring-cyan-500",
    outline: "bg-transparent border border-gray-200 shadow-md text-gray-600 hover:bg-pink-50 focus:ring-gray-500",
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >

      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;