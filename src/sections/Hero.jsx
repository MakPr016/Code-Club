import { useEffect, useRef } from "react"
import Button from "../components/Button"
import AnimatedText from "../components/AnimateText"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MaskIn from "../components/MaskIn"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const sectionRef = useRef(null)
  const tlRef = useRef(null)

  useEffect(() => {
    const words = sectionRef.current.querySelectorAll(".animated-text .wrap > *")
    const groups = sectionRef.current.querySelectorAll(".animated-text")

    gsap.set(words, { yPercent: 100, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "play none none none",
      },
    })

    tl.to(groups[0].querySelectorAll(".wrap > *"), {
      yPercent: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "power3.out",
    })
      .to(groups[1].querySelectorAll(".wrap > *"), {
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power3.out",
      }, "-=0.2")
      .to(groups[2].querySelectorAll(".wrap > *"), {
        yPercent: 0,
        opacity: 1,
        stagger: -0.05,
        ease: "power3.out",
      }, "-=0.3")
      .to(groups[3].querySelectorAll(".wrap > *"), {
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power3.out",
      }, "-=0.4")

    tlRef.current = tl
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="w-full h-screen flex flex-col justify-center items-center gap-10 max-sm:gap-8"
    >
      <div>
        <AnimatedText
          text="Build the Future,"
          type="words"
          tag="h1"
          className="font-wix text-4xl max-sm:text-3xl font-semibold text-center"
        />
        <AnimatedText
          text="One Step at a Time"
          type="words"
          tag="h1"
          className="font-wix text-4xl max-sm:text-3xl font-semibold text-center"
        />
      </div>
      <div>
        <AnimatedText
          text="Join our vibrant community of coders, where we learn, build, and innovate together."
          type="lines"
          tag="p"
          duration={0.3}
          className="font-roboto text-md max-sm:text-[12px] text-center"
        />
        <AnimatedText
          text="Explore exciting projects, attend workshops, and connect with fellow enthusiasts."
          type="lines"
          tag="p"
          duration={0.3}
          className="font-roboto text-md max-sm:text-[12px] text-center"
        />
      </div>
      <div className="buttons-container flex flex-row max-sm:flex-col items-center gap-5 max-sm:gap-3">
        <MaskIn timeline={tlRef.current} delay={0.3}>
          <Button
            text="Explore Events"
            caps={true}
            onClick={() => {
              const el = document.getElementById("events");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          />
        </MaskIn>
        <MaskIn timeline={tlRef.current} delay={0.4}>
          <Button
            text="Explore Projects"
            caps={true}
            onClick={() => {
              const el = document.getElementById("projects");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          />
        </MaskIn>
      </div>

    </section>
  )
}

export default Hero
