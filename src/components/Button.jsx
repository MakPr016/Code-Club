import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
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
  href,
  target = "_blank",
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

  const commonClasses = `${size === "sm" ? "button-sm" : "button"} ${className} inline-flex items-center gap-1`;

  const content = (
    <>
      <span className="overflow-hidden leading-none inline-flex h-[1em]">
        <span ref={textRef} className="flex flex-col">
          <span>{caps ? text.toUpperCase() : text}</span>
          <span>{caps ? text.toUpperCase() : text}</span>
        </span>
      </span>
      {icon && <ChevronRight className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"}`} />}
    </>
  );

  return href ? (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={commonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={commonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};

export default Button;
