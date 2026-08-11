import React from 'react'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  if(!isOpen){
    return null;
  }
  return (
    <div className='fixed insert-0 z-50 flex items-center justify-center bg-black/60 p-4'>
      <div
      className={`
        w-full
        max-w-lg
        rounded-lg
        border
        border-slate-700
        bg-slate-900
        shadow-xl
        ${className}
        `}
      >

      </div>
    </div>
  )
}

export default Modal
