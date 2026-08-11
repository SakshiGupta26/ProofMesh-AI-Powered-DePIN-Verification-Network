import React from 'react'
import { User } from 'lucide-react'
import DashboradNav from '../features/dashboard/DashboradNav'

const Dashboard = () => {
  return (
    <div className='w-full'>
      <div className='flex w-full gap-2 items-center border-b border-cyan-500 '>
        
        <div className='flex-1'>
          <DashboradNav/>
        </div>

        <User
          size={30}
          className='rounded-full border border-white'
        />
        
      </div>
    </div>
  )
}

export default Dashboard
