import { useRef, useEffect } from "react"
import { events } from "../data/events"
import AnimatedText from '../components/AnimateText'
import Button from "../components/Button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Events = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headings = sectionRef.current.querySelectorAll(".animated-text")
      const cards = sectionRef.current.querySelectorAll(".card")

      // Set initial states
      gsap.set(headings, { yPercent: 100, opacity: 0 })
      gsap.set(cards, { y: 50, opacity: 0 })

      // Timeline for scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })

      // Animate headings
      tl.to(headings, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power3.out",
      })

      // Animate cards
      tl.to(cards, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.2")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='events' ref={sectionRef} className='min-h-screen w-full mb-10'>
      <div className="relative mx-auto mb-10 project-titles flex flex-col gap-3 items-center justify-center max-w-3xl max-sm:max-w-[360px]">
        <AnimatedText
          text="CodeClub Events"
          type="words"
          tag="h1"
          className="font-wix text-4xl max-sm:text-3xl font-semibold text-center"
        />
        <AnimatedText
          text="Explore our past and upcoming events. Join us for workshops, coding challenges, and more!"
          type="lines"
          tag="p"
          className="font-roboto text-center text-sm max-sm:text-[12px] text-[#b9b9b9] max-sm:text-center"
        />
      </div>

<div className="font-roboto w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-6 gap-4">
  <div className="card p-8 flex flex-col md:flex-row md:col-span-2 md:row-span-2">
    <div className='card-text space-y-3 md:flex-1/2'>
      <p className='text-[12px] text-[#ccc]'>Workshop</p>
      <h3 className='text-lg font-medium'>Web Development Workshop</h3>
      <p className='text-sm text-[#ccc]'>Frontend Development Workshop where participants built e-commerce websites using HTML, CSS, and JavaScript, learning page structure, styling, and interactivity.</p>
    </div>
    <div className='md:flex-1/2 flex justify-center items-center w-full h-full mt-4 md:mt-0'>
      <img src="/images/events/web.svg" alt="" />
    </div>
  </div>

  <div className="card md:row-span-4 md:row-start-3 py-10 px-7">
          <div className='card-text space-y-3 flex-1/2'>
            <p className='text-[12px] text-[#ccc]'>Workshop</p>
            <h3 className='text-lg font-medium'>Mobile App Development with Flutter</h3>
            <p className='text-sm text-[#ccc]'>Learn to create cross-platform mobile apps with Flutter, Google's UI toolkit. This workshop covers the fundamentals of Flutter development.</p>
          </div>
          <div className='flex-1/2 flex justify-center items-center w-full h-full max-sm:h-[50%]'>
            <img src="/images/events/load.svg" alt="Blocks"/>
          </div>
        </div>

  <div className="card p-4 flex flex-col md:flex-row md:row-span-2 md:row-start-3">
    <div className='card-text space-y-3 md:flex-1/2'>
      <p className='text-[12px] text-[#ccc]'>College Fest</p>
      <h3 className='text-lg font-medium'>VigyaanRang – Techno Cultural Fest</h3>
      <p className='text-sm text-[#ccc]'>VigyaanRang is our annual techno‑cultural fest uniting innovation and tradition with exciting tech competitions, cultural showcases, workshops, and celebrations.</p>
    </div>
    <div className='md:flex-1/2 flex justify-center items-center w-full h-70 mt-4 md:mt-0'>
      <img src="/images/events/vig.svg" alt="Blocks" className='h-50'/>
    </div>
  </div>

  <div className="card p-4 flex flex-col md:flex-row md:col-start-2 md:row-start-5 md:row-span-2">
    <div className='card-text space-y-3 md:flex-1/2'>
      <p className='text-[12px] text-[#ccc]'>Workshop</p>
      <h3 className='text-lg font-medium'>Game Development with Godot</h3>
      <p className='text-sm text-[#ccc]'>A hands-on workshop using the Godot engine where students explored 2D game creation, including sprite animations and scripting player controls with GDScript.</p>
    </div>
    <div className='md:flex-1/2 flex justify-center items-center w-full h-70 mt-4 md:mt-0'>
      <img src="/images/events/mini_loader.svg" alt="Blocks" className='h-90'/>
    </div>
  </div>
</div>


    </section>
  )
}

export default Events
