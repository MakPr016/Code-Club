import Navbar from './components/Navbar'
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
    
    <div className="card">Card</div>
    </>
  )
}

export default App
