import { useState, useRef, useEffect, useCallback } from 'react'
import Project from '../components/Project'
import { projects } from '../data/projects'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const trackRef = useRef(null)
  const intervalRef = useRef(null)
  const interactionTimeoutRef = useRef(null)

  useEffect(() => {
    if (index >= projects.length) setIndex(0)
  }, [projects.length, index])

  const scrollTo = (i) => {
    const el = trackRef.current?.children?.[i]
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setIndex(i)
  }

  const nextSlide = useCallback(() => {
    setIndex(prevIndex => {
      if (prevIndex >= projects.length - 1) {
        return 0 // Reset to first slide
      }
      return prevIndex + 1
    })
  }, [projects.length])

  // Auto-scroll functionality
  useEffect(() => {
    const shouldScroll = !isHovered && !isInteracting

    if (shouldScroll) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
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

  // Update scroll position when index changes (for auto-scroll only)
  useEffect(() => {
    // Only auto-scroll to position if not currently interacting
    if (!isHovered && !isInteracting) {
      const wrap = trackRef.current
      if (wrap) {
        // Calculate the scroll position manually
        const scrollLeft = index * wrap.offsetWidth
        wrap.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        })
      }
    }
  }, [index, isHovered, isInteracting])

  const onScroll = () => {
    // Disable scroll detection during auto-scroll to prevent conflicts
    if (!isHovered && !isInteracting) return
    
    const wrap = trackRef.current
    if (!wrap) return
    const { scrollLeft, offsetWidth } = wrap
    const i = Math.round(scrollLeft / offsetWidth)
    if (i !== index) setIndex(i)
  }

  const handleInteraction = () => {
    setIsInteracting(true)
    
    // Clear existing timeout
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current)
    }
    
    // Resume auto-scroll after 3 seconds of no interaction
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false)
    }, 3000)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current)
      }
    }
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
    <section id="projects" className="w-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 min-h-screen flex flex-col">
        <div className="relative mx-auto project-titles flex flex-col gap-3 items-center justify-center max-w-2xl max-sm:max-w-[360px]">
          <h1 className="font-wix font-semibold text-4xl max-sm:text-3xl max-sm:font-semibold max-sm:text-center">Projects</h1>
          <p className="font-roboto text-sm max-sm:text-[12px] text-[#b9b9b9] max-sm:text-center">
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
              className="shrink-0 w-full flex justify-center items-center snap-start px-3 md:px-6 min-h-[78vh] md:min-h-[72vh]"
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