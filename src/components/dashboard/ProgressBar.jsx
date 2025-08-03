import React from 'react'

const ProgressBar = ({value}) => {
  return (
    <div className='w-full bg-gray-300 rounded-full h-4'>
        <div className='bg-blue-600 h-4 rounded-full text-white text-xs font-bold flex item-center justify-center transition-all duration-300' style={{width: `${value}%`}}>{value}%</div>
    </div>
  )
}

export default ProgressBar