import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import SplitType from "split-type"

export default function AnimatedText({
  text,
  type = "words",
  tag: Tag = "h1",
  className = "",
  revealDistance = 100,
  duration = 1, // 👈 duration param
}) {
  const scope = useRef(null)
  const splitRef = useRef(null)

  useLayoutEffect(() => {
    const el = scope.current?.querySelector(".animated-text")
    if (!el) return
    const split = new SplitType(el, { types: type })
    splitRef.current = split

    let targets = []
    if (type === "words") targets = split.words
    if (type === "lines") targets = split.lines
    if (type === "chars") targets = split.chars

    targets.forEach(t => {
      const wrap = document.createElement("span")
      wrap.className = "wrap inline-block overflow-hidden"
      t.parentNode.insertBefore(wrap, t)
      wrap.appendChild(t)
    })

    gsap.fromTo(
      targets,
      {
        y: revealDistance,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        stagger: 0.05,
      }
    )

    return () => {
      splitRef.current?.revert()
      splitRef.current = null
    }
  }, [type, revealDistance, duration])

  return (
    <div ref={scope}>
      <Tag className={`animated-text ${className}`}>{text}</Tag>
    </div>
  )
}
