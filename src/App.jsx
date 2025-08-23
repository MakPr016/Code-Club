import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
import { Hero, About, Events, Projects, Members } from './sections'

const App = () => {
  return (
    <>
    {/* <Background /> */}
    <Navbar />
    <Hero />
    <About />
    <Events />
    <Projects />
    <Members />
    <Footer />
    </>
  )
}

export default App
