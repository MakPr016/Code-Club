import React from 'react'
import { Rocket, BookOpenText, Lightbulb } from "lucide-react"

const AboutCard = ({heading, text, icon:Icon=Rocket}) => {
  return (
    <div className="card w-75 h-90 p-4 gap-2 flex flex-col justify-end items-baseline">
          {<Icon className='w-8 h-8'/>}
          <h4 className='text-lg font-semibold'>{heading}</h4>
          <p className='text-sm'>{text}</p>
        </div>
  )
}

export default AboutCard
