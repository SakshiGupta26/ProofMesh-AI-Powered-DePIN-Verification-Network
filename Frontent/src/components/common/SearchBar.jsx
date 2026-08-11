import React from 'react'

const SearchBar = ({placeholder}) => {
  return (
    <div >
      <input 
        className='bg-gray-700 border  border-cyan-500 p-2 focus:outline-none  placeholder-gray-500'
        type='text'
        placeholder={placeholder}
      />
      
    </div>
  )
}

export default SearchBar
