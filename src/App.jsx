import React from 'react'
import Button from './components/Button'
import { ChevronRight } from "lucide-react"

const App = () => {
  return (
    <>
    <div className='font-robot font-semibold text-4xl'>
      CodeClub
    </div>
      <p className='font-roboto text-md text-center'>Join our vibrant community of coders, where we learn, build, and innovate together. <br />
Explore exciting projects, attend workshops, and connect with fellow enthusiasts.</p>
    <div className="buttons-container flex gap-5">
    <Button text='Explore Projects' caps={true}/>
    <Button text='Preview' caps={true} size='sm' className='button-sm'/>
    </div>
    <div className="card">Card</div>
    </>
  )
}

export default App
