import React from 'react'
import Button from '../components/Button'

const Hero = () => {
    return (
        <section id='hero' className='w-full h-screen'>
            <h1 className='font-wix text-3xl font-semibold'>Build the Future,<br></br>One Step at a Time</h1>
            <p className='font-roboto text-md text-center'>Join our vibrant community of coders, where we learn, build, and innovate together. <br />
                Explore exciting projects, attend workshops, and connect with fellow enthusiasts.</p>
            <div className="buttons-container flex gap-5">
                <Button text='Explore Projects' caps={true} />
                <Button text='Preview' caps={true} size='sm' className='button-sm' />
            </div>
        </section>
    )
}

export default Hero
