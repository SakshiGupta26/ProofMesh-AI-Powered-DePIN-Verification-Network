import React from 'react'

const NetworkToggle = () => {
  return (
    <div>
      <div className='p-2 border-2 border-cyan-900'>
        <button className='hover:text-cyan-500 hover:bg-gray-800 px-2 rounded-sm'>Mainnet</button>
        <button className='hover:text-cyan-500 hover:bg-gray-800 px-2 rounded-sm'>Testnet</button>
      </div>
    </div>
  )
}

export default NetworkToggle
