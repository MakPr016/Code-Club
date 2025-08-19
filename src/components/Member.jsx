import React from 'react'
import { Instagram, Github } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa"

const Member = () => {
  return (
    <div
      className="
        font-robot card h-60 w-53
        flex flex-col items-center justify-start
        rounded-2xl
        shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_-20px_rgba(0,0,0,0.6)]
        relative
        p-5
      "
    >
      <div className="w-16 h-16 rounded-full bg-[#6b6b6b] mt-1" />

      <div className="flex flex-col items-center gap-1 mt-5">
        <h3 className="font-semibold text-xl tracking-wide">Zaid</h3>
        <p className="text-sm text-[#9aa0a6] tracking-widest">AIML</p>
      </div>

      <div className="flex items-center gap-6 mt-auto mb-2">
        <a
          href="https://www.linkedin.com/company/atriacode/"
          target="_blank"
          rel="noreferrer"
          className="text-[#9aa0a6] hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>

        <a
          href="https://github.com/CODE-CLUB-ATRIA"
          target="_blank"
          rel="noreferrer"
          className="text-[#9aa0a6] hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>

        <a
          href="https://www.instagram.com/atriacode/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="text-[#9aa0a6] hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}

export default Member
