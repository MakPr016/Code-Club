import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const MaskIn = ({
  children,
  duration = 0.7,
  y = 24,
  opacity = 0,
  stagger = 0,
  ease = "power3.out",
  className = "",
  timeline,
  position = "+=0",   // <-- GSAP timeline position (label, relative, or time)
  standalone = false, // only animates automatically if true
}) => {
  const scope = useRef(null)

  useLayoutEffect(() => {
    if (!scope.current) return
    const el = scope.current

    if (timeline) {
      timeline.fromTo(
        el,
        { y, opacity, clipPath: "inset(100% 0 0 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration, ease, stagger },
        position // <-- use label/offset instead of hardcoded delay
      )
    } else if (standalone) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { y, opacity, clipPath: "inset(100% 0 0 0)" },
          { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration, ease, stagger }
        )
      }, scope)
      return () => ctx.revert()
    }
  }, [duration, y, opacity, stagger, ease, timeline, position, standalone])

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  )
}

export default MaskIn
