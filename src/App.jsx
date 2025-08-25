import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Background from './components/Background'
import { Hero, About, Events, Projects, Members } from './sections'
import { useState, useEffect } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [animateOut, setAnimateOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleAnimationEnd = () => {
    setLoading(false) 
  }

  return (
    <>
      {/* <Background /> */}
      {loading && (
        <Loading
          animateOut={animateOut}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
      {!loading && (
        <>
          <Navbar />
          <main className='flex flex-col jusitfy-center'>
            <Hero />
            <About />
            <Events />
            <Projects />
            <Members />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
