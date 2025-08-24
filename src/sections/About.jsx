import { useRef, useEffect } from "react"
import AboutCard from "../components/AboutCard"
import { Rocket, BookOpenText, Lightbulb } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedText from "../components/AnimateText"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = sectionRef.current.querySelectorAll(".animated-text")
      const cards = sectionRef.current.querySelectorAll(".about-card")

      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          toggleActions: "play none none none",
        },
      })

      gsap.set(groups[0].querySelectorAll(".wrap > *"), { yPercent: 100, opacity: 0 })
      gsap.set(groups[1].querySelectorAll(".wrap > *"), { yPercent: 100, opacity: 0 })

      gsap.set(cards, {
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
        y: 200,
        transformOrigin: "top center",
      })

      aboutTl
        .to(groups[0].querySelectorAll(".wrap > *"), {
          yPercent: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "power3.out",
        })
        .to(
          groups[1].querySelectorAll(".wrap > *"),
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          cards,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            y: 0, 
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.3,
          },
          "cardsStart"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="min-h-screen w-full py-20">
      <div className="relative mx-auto mb-10 project-titles flex flex-col gap-3 items-center justify-center max-w-3xl max-sm:max-w-[360px]">
        <AnimatedText
          text="About CodeClub"
          type="words"
          tag="h1"
          className="font-wix text-4xl max-sm:text-3xl font-semibold text-center"
        />
        <AnimatedText
          text="Discover our origins, our guiding principles, and the vision that shapes our work."
          type="lines"
          tag="p"
          className="font-roboto text-center text-sm max-sm:text-[12px] text-[#b9b9b9] max-sm:text-center"
        />
      </div>
      <div className="about-cards font-roboto text-[#999] flex flex-col sm:flex-row justify-around sm:justify-center sm:gap-30 items-center gap-5">
        <div className="about-card">
          <AboutCard
            heading={"Mission and Vision"}
            text={
              "CodeClub fosters a vibrant community of coding enthusiasts, empowering individuals to explore, learn, and excel in programming. We envision a future where every member confidently tackles challenges and contributes meaningfully to technology."
            }
            icon={Rocket}
          />
        </div>
        <div className="about-card">
          <AboutCard
            heading={"Founding Story"}
            text={
              "CodeClub was founded in 2020 by a group of passionate students. Recognizing the need for a collaborative space to share knowledge and build projects, they established the club to provide a platform for learning and growth in coding."
            }
            icon={BookOpenText}
          />
        </div>
        <div className="about-card">
          <AboutCard
            heading={"Core Values"}
            text={
              "At CodeClub, we uphold the values of collaboration, innovation, and continuous learning. We believe in the power of teamwork to solve problems, encourage creative approaches to coding, and promote a culture of lifelong learning and skill development."
            }
            icon={Lightbulb}
          />
        </div>
      </div>
    </section>
  )
}

export default About
