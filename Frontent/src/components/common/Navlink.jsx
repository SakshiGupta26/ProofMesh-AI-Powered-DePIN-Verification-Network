import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = ({ icon: Icon, name, path }) => {
  return (
    <NavLink 
    className={({ isActive }) =>
    `flex gap-4 rounded-sm p-1  hover:bg-gray-800 ${
      isActive ? 
      "bg-gray-800 text-[#3AB7FF] border-r-4" :
       "text-[#bbcabf]"
    }`
  }
    to={`/${path}`}>
      <Icon />
      <h1>{name}</h1>
    </NavLink>
  )
}

export default Navlink