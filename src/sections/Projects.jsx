import { useState, useRef, useEffect, useCallback } from 'react'
import Project from '../components/Project'
import { projects } from '../data/projects'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const trackRef = useRef(null)
  const intervalRef = useRef(null)
  const interactionTimeoutRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (index >= projects.length) setIndex(0)
  }, [projects.length, index])

  const scrollTo = (i) => {
    const el = trackRef.current?.children?.[i]
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setIndex(i)
  }

  const nextSlide = useCallback(() => {
    setIndex(prevIndex => (prevIndex >= projects.length - 1 ? 0 : prevIndex + 1))
  }, [projects.length])

  useEffect(() => {
    const shouldScroll = !isHovered && !isInteracting
    if (shouldScroll) {
      intervalRef.current = setInterval(nextSlide, 3000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isHovered, isInteracting, nextSlide])

  useEffect(() => {
    if (!isHovered && !isInteracting) {
      const wrap = trackRef.current
      if (wrap) {
        const scrollLeft = index * wrap.offsetWidth
        wrap.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }, [index, isHovered, isInteracting])

  const onScroll = () => {
    if (!isHovered && !isInteracting) return
    const wrap = trackRef.current
    if (!wrap) return
    const { scrollLeft, offsetWidth } = wrap
    const i = Math.round(scrollLeft / offsetWidth)
    if (i !== index) setIndex(i)
  }

  const handleInteraction = () => {
    setIsInteracting(true)
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current)
    interactionTimeoutRef.current = setTimeout(() => setIsInteracting(false), 3000)
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headings = sectionRef.current.querySelectorAll(".animated-text")
      const cards = sectionRef.current.querySelectorAll(".project-card")
      gsap.set(headings, { yPercent: 100, opacity: 0 })
      gsap.set(cards, { y: 50, opacity: 0 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })
      tl.to(headings, { yPercent: 0, opacity: 1, stagger: 0.1, ease: "power3.out" })
      tl.to(cards, { y: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: "power3.out" }, "-=0.2")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const maxDots = 4
  const total = projects.length
  let start = Math.max(0, index - Math.floor(maxDots / 2))
  let end = start + maxDots
  if (end > total) {
    end = total
    start = Math.max(0, end - maxDots)
  }
  const dotRange = Array.from({ length: end - start }, (_, k) => start + k)

  return (
    <section id="projects" ref={sectionRef} className="w-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 min-h-screen flex flex-col">
        <div className="relative mx-auto project-titles flex flex-col gap-3 items-center justify-center max-w-2xl max-sm:max-w-[360px]">
          <h1 className="font-wix font-semibold text-4xl max-sm:text-3xl animated-text">Projects</h1>
          <p className="font-roboto text-sm max-sm:text-[12px] text-[#b9b9b9] animated-text">
            Explore the diverse range of projects developed by our club members and the club itself. Each project showcases the skills and creativity of our community.
          </p>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative mt-4 md:mt-5 flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mx-auto w-full max-w-6xl"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="shrink-0 w-full flex justify-center items-center snap-start px-3 md:px-6 min-h-[78vh] md:min-h-[72vh] project-card"
            >
              <div className="w-full max-w-[920px] sm:max-w-[960px]">
                <Project
                  title={p.title}
                  desc={p.desc}
                  banner={p.banner}
                  tags={p.tags}
                  preview={p.preview}
                  github={p.github}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 md:mt-6 flex items-center justify-center gap-4">
          <button
            className="px-2 py-1 text-zinc-300 hover:text-white disabled:opacity-40"
            onClick={() => scrollTo(Math.max(0, index - 1))}
            disabled={index === 0}
            aria-label="Previous"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          <div className="flex items-center gap-2 max-sm:gap-1.5">
            {dotRange.map((i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${i === index ? 'bg-white' : 'bg-zinc-500/50 hover:bg-zinc-400'}`}
              />
            ))}
          </div>

          <button
            className="px-2 py-1 text-zinc-300 hover:text-white disabled:opacity-40"
            onClick={() => scrollTo(Math.min(projects.length - 1, index + 1))}
            disabled={index === projects.length - 1}
            aria-label="Next"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
