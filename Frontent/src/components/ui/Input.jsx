import React from 'react'

const Input = ({
  type: text,
  placeholder = '',
  value,
  onChange,
  name,
  disable = false,
  className=''

}) => {
  return (
    <input 
    className={`w-full rounded-lg border
       border-slate-700 bg-slate-900
        px-4 text-sm text-white outline-none
         placeholder-slate-500 foucs:border-cyan-500
          focus:ring-1 focus:ring-cyan-500 
          disabled:cursor-not-allow disabled:opacity-50 
          ${className}`}
    
    />
  )
}

export default Input
