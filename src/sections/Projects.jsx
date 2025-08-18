import { useState, useRef, useEffect } from 'react'
import Project from '../components/Project'
import { projects } from '../data/projects'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    if (index >= projects.length) setIndex(0)
  }, [projects.length, index])

  const scrollTo = (i) => {
    const el = trackRef.current?.children?.[i]
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setIndex(i)
  }

  const onScroll = () => {
    const wrap = trackRef.current
    if (!wrap) return
    const { scrollLeft, offsetWidth } = wrap
    const i = Math.round(scrollLeft / offsetWidth)
    if (i !== index) setIndex(i)
  }

  // compute a window of up to 4 dots centered around the current index
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
    <section className="w-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 min-h-screen flex flex-col">
        <div className="relative mx-auto project-titles flex flex-col gap-3 items-center justify-center max-w-2xl max-sm:max-w-[360px]">
          <h1 className="font-wix font-bold text-4xl max-sm:text-3xl max-sm:font-semibold max-sm:text-center">Projects</h1>
          <p className="font-roboto text-sm max-sm:text-[12px] text-[#b9b9b9] max-sm:text-center">
            Explore the diverse range of projects developed by our club members and the club itself. Each project showcases the skills and creativity of our community.
          </p>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
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
