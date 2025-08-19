import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Hero, About, Events, Projects, Members } from './sections'

const App = () => {
  return (
    <>
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
