import React from 'react'
import Navbar from '../components/common/Navbar'
import { User } from 'lucide-react'

const ReputationPage = () => {
  return (
    <div className='w-full'>
      <div className='flex w-full gap-2 items-center border-b border-cyan-500 '>
        
        <div className='flex-1'>
          <Navbar />
        </div>

        <User
          size={30}
          className='rounded-full border border-white'
        />

      </div>
    </div>
  )
}

export default ReputationPage