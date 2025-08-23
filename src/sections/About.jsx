import AboutCard from '../components/AboutCard'
import { Rocket, BookOpenText, Lightbulb } from "lucide-react"
import gsap from 'gsap'


const About = () => {
  return (
    <section id='about' className='min-h-screen w-full'>
      <div className="relative mx-auto project-titles flex flex-col gap-3 items-center justify-center max-w-3xl max-sm:max-w-[360px] py-10">
          <h1 className="font-wix font-semibold text-4xl max-sm:text-3xl max-sm:font-semibold max-sm:text-center">
            About CodeClub
          </h1>
          <p className="font-roboto text-center text-sm max-sm:text-[12px] text-[#b9b9b9] max-sm:text-center">
            Discover our origins, our guiding principles, and the vision that shapes our work.
          </p>
      </div>
      <div className='about-cards font-roboto text-[#999] flex flex-col sm:flex-row justify-around sm:justify-center sm:gap-30 items-center gap-5'>
        <AboutCard 
          heading={"Mission and Vision"}
          text={"CodeClub fosters a vibrant community of coding enthusiasts, empowering individuals to explore, learn, and excel in programming. We envision a future where every member confidently tackles challenges and contributes meaningfully to technology."}
          icon={Rocket}
        />
        <AboutCard 
          heading={"Founding Story"}
          text={"CodeClub was founded in 2020 by a group of passionate students. Recognizing the need for a collaborative space to share knowledge and build projects, they established the club to provide a platform for learning and growth in coding."}
          icon={BookOpenText}
        />
        <AboutCard 
          heading={"Core Values"}
          text={"At CodeClub, we uphold the values of collaboration, innovation, and continuous learning. We believe in the power of teamwork to solve problems, encourage creative approaches to coding, and promote a culture of lifelong learning and skill development."}
          icon={Lightbulb}
        />
      </div>
    </section>
  )
}

export default About
