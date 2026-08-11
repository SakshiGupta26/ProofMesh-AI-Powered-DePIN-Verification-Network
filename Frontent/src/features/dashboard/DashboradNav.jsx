import React from 'react'
import NetworkToggle from '../../components/common/NetworkToggle'
import Bellicon from '../../components/ui/Bellicon'
import WalletConnectButton from '../../components/common/WalletConnectButton'
const DashboradNav = () => {
  return (
    <div>
      <div className='flex items-center p-2 justify-between w-full'>
      <div className='flex gap-4'>
        <h1 className='text-gray-400 hover:text-cyan-500'>Ethereum</h1>
        <h1 className='text-gray-400 hover:text-cyan-500'>Polygon</h1>
        <h1 className='text-gray-400 hover:text-cyan-500'>Base</h1>
      </div>
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

export default DashboradNav
