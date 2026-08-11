import React from 'react'
// ● Online
// ● Offline
// ● Pending
// ● Verified
// ● Failed
// ● Warning
// ● Critical
const Badge = ({children,variant='default',className=''}) => {
    const variants = {
    default: 'bg-slate-700 text-slate-200',
    success: 'bg-green-500/15 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30',
    danger: 'bg-red-500/15 text-red-400 border border-red-500/30',
    info: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
  };
  return (
    <span
    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
