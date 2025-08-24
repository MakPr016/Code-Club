import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { navLinks } from "../data/links";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);

  const handleEnter = (e) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const direction = x < rect.width / 2 ? "left" : "right";
    const underline = link.querySelector(".underline");
    gsap.killTweensOf(underline);
    gsap.set(underline, {
      transformOrigin: direction === "left" ? "0% 50%" : "100% 50%",
      scaleX: 0
    });
    gsap.to(underline, { scaleX: 1, duration: 0.4, ease: "power2.out" });
    gsap.to(link, { color: "#22c55e", duration: 0.3, ease: "power2.out" });
  };

  const handleLeave = (e) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const direction = x < rect.width / 2 ? "left" : "right";
    const underline = link.querySelector(".underline");
    gsap.killTweensOf(underline);
    gsap.to(underline, {
      transformOrigin: direction === "left" ? "0% 50%" : "100% 50%",
      scaleX: 0,
      duration: 0.3,
      ease: "power2.in"
    });
    gsap.to(link, { color: "#ffffff", duration: 0.3, ease: "power2.in" });
  };

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (menuRef.current && overlayRef.current) {
      if (isOpen) {
        gsap.set(menuRef.current, { display: "flex" });
        gsap.set(overlayRef.current, { display: "block", opacity: 0 });
        gsap.to(overlayRef.current, { opacity: 0.5, duration: 0.3, ease: "power3.out" });
        gsap.fromTo(menuRef.current, { y: "-100%" }, { y: 0, duration: 0.6, ease: "power3.out" });
      } else {
        gsap.to(menuRef.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power3.in",
          onComplete: () => gsap.set(menuRef.current, { display: "none" })
        });
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => gsap.set(overlayRef.current, { display: "none" })
        });
      }
    }
  }, [isOpen]);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-[100] flex justify-between px-6 md:px-20 py-2 items-center bg-black text-white">
      <div className="flex items-center gap-2">
        <img src="/icons/logo_sm.png" alt="Logo" className="w-auto h-[36px]" />
        <span className="font-wix font-semibold text-2xl md:text-3xl">CodeClub</span>
      </div>

      <nav className="hidden md:flex font-roboto gap-10 text-[12px] tracking-wide">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="relative overflow-hidden"
          >
            {link.title.toUpperCase()}
            <span className="underline pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-green-500 scale-x-0" />
          </a>
        ))}
      </nav>

      <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
        <Menu size={28} />
      </button>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70 hidden z-[50]"
        onClick={() => setIsOpen(false)}
      />

      <div
        ref={menuRef}
        className="fixed top-0 z-[100] left-0 w-full h-[60vh] bg-black text-white flex-col items-center justify-center gap-8 text-lg hidden shadow-lg z-"
        style={{ transform: "translateY(-100%)" }}
      >
        <button className="absolute top-4 right-6 text-white" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} onClick={() => setIsOpen(false)} className="relative">
            {link.title.toUpperCase()}
          </a>
        ))}
      </div>
    </header>
  );
}
