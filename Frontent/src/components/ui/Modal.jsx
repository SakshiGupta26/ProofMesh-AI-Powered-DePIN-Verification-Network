import React from 'react';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div
        className={`
          w-full
          max-w-lg
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          shadow-2xl
          ${className}
        `}
      >
        <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4">
          <h2 className="text-lg font-semibold text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-xl text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;