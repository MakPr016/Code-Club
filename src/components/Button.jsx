import React, { useRef } from 'react'
import { ChevronRight } from "lucide-react"
import { gsap } from "gsap";

const Button = ({
  text = "Button",
  type = "button",
  onClick,
  icon = true,
  disabled = false,
  className = "",
  caps = false,
  size = "md",
}) => {
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      y: "0%",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${size === "sm" ? "button-sm " : "button"} ${className} flex items-center gap-1`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="overflow-hidden leading-none inline-flex h-[1em]">
        <span ref={textRef} className="flex flex-col">
          <span>{caps ? text.toUpperCase() : text}</span>
          <span>{caps ? text.toUpperCase() : text}</span>
        </span>
      </span>
      {icon && (
        <ChevronRight className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"}`} />
      )}
    </button>
  )
}

export default Button
