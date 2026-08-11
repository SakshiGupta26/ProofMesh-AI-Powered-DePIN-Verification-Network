import React from 'react'
import SearchBar from './SearchBar'
import WalletConnectButton from './WalletConnectButton'
import NetworkToggle from './NetworkToggle'
import Bellicon from '../ui/Bellicon'

const Navbar = ({placeholder}) => {
  return (
    <div>
      <div className='flex items-center p-2 justify-between w-full'>
      <SearchBar
        
        placeholder={placeholder}
      />
      <div className='flex gap-6 items-center'>
      <NetworkToggle />
      <div className='flex items-center gap-4'>
      <Bellicon />

      <WalletConnectButton />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
