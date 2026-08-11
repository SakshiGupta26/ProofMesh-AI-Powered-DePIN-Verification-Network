import React from 'react'

const Button = ({ name }) => {
  return (
    <div className="flex justify-center items-center bg-[#3AB7FF] text-white p-2 rounded-xl font-semibold hover:bg-[#2b89bf]">
      <h1>{name}</h1>
    </div>
  )
}

export default Button