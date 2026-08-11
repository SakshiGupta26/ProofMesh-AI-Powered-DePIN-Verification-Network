import React from 'react'

const Card = ({childern, className=''}) => {
  return (
    <div
    className={`rounded-xl border border-slate-700 bg-slate-600 p-4 shadow-lg ${className}`}>
      {childern}
    </div>
  )
}

export default Card
