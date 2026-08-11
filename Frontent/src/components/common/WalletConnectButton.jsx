import React from 'react'
import { Wallet } from 'lucide-react'
const WalletConnectButton = () => {
  return (
    <button className="flex gap-2 items-center h-full border border-gray-500 text-white p-1 px-2 rounded-sm font-semibold hover:bg-gray-700">
      <Wallet />
      <h1>Connect Wallet</h1>
    </button>
  )
}

export default WalletConnectButton
