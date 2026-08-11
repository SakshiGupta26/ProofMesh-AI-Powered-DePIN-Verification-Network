import React from 'react'
import Navbar from '../components/common/Navbar'

const VerificationPage = () => {
  return (
    <div className='w-full'>
      <div className='w-full border-b border-cyan-500'>
        <Navbar 
        placeholder ={"Search events ,nodes, TXs.."}/>
      </div>
    </div>
  )
}

export default VerificationPage