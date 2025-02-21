import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = () => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center curser-pointer'>
            <img src={tick} className='w-7' alt="" />





            <p className='text-slate-700 ml-4 text-[17]'>Learn coding  </p>
        </div>
        <img src={delete_icon} alt="" />
    </div>
  )
}

export default Todoitems
