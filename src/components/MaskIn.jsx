import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const MaskIn = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 24,
  opacity = 0,
  stagger = 0,
  ease = "power3.out",
  className = "",
  timeline, 
}) => {
  const scope = useRef(null)

  useLayoutEffect(() => {
    if (!scope.current) return
    const el = scope.current

    if (timeline) {
      timeline.fromTo(
        el,
        { y, opacity },
        { y: 0, opacity: 1, duration, ease, stagger },
        `+=${delay}`
      )
    } else {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { y, opacity },
          { y: 0, opacity: 1, delay, duration, ease, stagger }
        )
      }, scope)
      return () => ctx.revert()
    }
  }, [delay, duration, y, opacity, stagger, ease, timeline])

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  )
}

export default MaskIn
