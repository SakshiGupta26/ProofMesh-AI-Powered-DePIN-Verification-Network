import React from 'react'

const Dropdown = ({
  options :[],
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
}) => {
  return (
    <select
    value = {value}
    onChange={onChange}
    disabled = {disabled}
    className={`
      w-full
      rounded-lg
      border
      border-slate-700
      bg-slate-900
      px-4
      py-2.5
      text-sm
      text-white
      outline-none
      focus:border-cyan-500
      focus:ring-1
      focus:ring-cyan-500
      disable:cursor-not-allowed
      disable:opacity-50
      ${className}
      `}
    >
       <option value="" disabled>{placeholder}</option>
       {
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))
       }
    </select>
  )
}

export default Dropdown
