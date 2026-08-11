import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const variants = {
    primary: 'bg-cyan-500 text-black hover:bg-cyan-400',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700',
    outline:
      'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black',
    danger: 'bg-red-500 text-white hover:bg-red-400',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        p-1
        rounded-lg
        font-medium
        transition
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;