import React from 'react'
import Navbar from '../components/common/Navbar'


const NodesPage = () => {
  return (
    <div className='w-full'>
      <div className='w-full border-b border-cyan-500'>
        <Navbar 
        placeholder={'Search Node Id, IP...'}/>
      </div>
    </div>
  )
}

export default NodesPage
