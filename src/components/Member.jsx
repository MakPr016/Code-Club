import React from 'react'
import { Instagram } from "lucide-react"

const Member = () => {
    return (
        <div className='font-robot card h-60 w-53 rounded-2xl'>
            <div className='bg-muted w-12 h-12 rounded-full'></div>

            <div className='flex flex-col justify-center items-center gap-1'>
                <h3 className='font-semibold text-md'>Member Name</h3>
                <p className='text-[12px] text-[#999]'>POSITION</p>
            </div>

            <div className='flex justify-center items-center gap-2 mt-8'>
                <Instagram className='text-[#999]'/>
            </div>
        </div>
    )
}

export default Member
