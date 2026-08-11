import React from 'react'
import SearchBar from '../../../components/common/SearchBar'
import WalletConnectButton from '../../../components/common/WalletConnectButton'
import NetworkToggle from '../../../components/common/NetworkToggle'
import Bellicon from '../../../components/ui/Bellicon'

const NodeFilters = () => {
  return (
    <div className='flex items-center border-b p-2 border-cyan-500 justify-between w-full'>
      <SearchBar
      
        placeholder={'Search Node ID, IP...'}
      />
      <div className='flex gap-6 items-center'>
      <NetworkToggle />
      <div className='flex items-center gap-4'>
      <Bellicon />

      <WalletConnectButton />
      </div>
      </div>
    </div>
  )
}

export default NodeFilters