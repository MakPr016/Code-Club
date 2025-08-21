import { useMemo, useRef, useState, useEffect } from "react";
import Member from "../components/Member";
import { members } from "../data/members";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

const TEAMS_ORDER = [
  "leads",
  "core",
  "technical",
  "design",
  "event management",
  "documentation",
  "social media",
  "outreach",
];

const normalize = (s = "") => s.trim().toLowerCase();

function useColumns() {
  const getCols = () =>
    window.matchMedia("(min-width:1024px)").matches
      ? 4
      : window.matchMedia("(min-width:640px)").matches
      ? 2
      : 1;

  const [cols, setCols] = useState(typeof window === "undefined" ? 4 : getCols());
  useEffect(() => {
    const onResize = () => setCols(getCols());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return cols;
}

export default function Members() {
  const tabs = useMemo(() => {
    const present = Array.from(new Set(members.map(m => normalize(m.team)))).filter(Boolean);
    const ordered = TEAMS_ORDER.filter(t => present.includes(t));
    const extras = present.filter(t => !TEAMS_ORDER.includes(t));
    return [...ordered, ...extras];
  }, []);

  const [active, setActive] = useState(tabs[0] || "");
  const columns = useColumns();

  const filtered = useMemo(
    () => members.filter(m => normalize(m.team) === active),
    [active]
  );

  const pageSize = Math.max(1, columns) * 2;

  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < filtered.length; i += pageSize) {
      chunks.push(filtered.slice(i, i + pageSize));
    }
    return chunks.length ? chunks : [[]];
  }, [filtered, pageSize]);

  const total = slides.length;

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    setIndex(0);
    if (trackRef.current && window?.gsap && gsap) {
      gsap.fromTo(
        trackRef.current.children[0],
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.28, ease: "power2.out" }
      );
    }
  }, [active, pageSize]);

  const scrollTo = (i, dir = 0) => {
    const wrap = trackRef.current;
    if (!wrap) return;
    const slide = wrap.children?.[i];
    if (!slide) return;

    if (window?.gsap && gsap) {
      const fromX = dir > 0 ? 32 : dir < 0 ? -32 : 0;
      gsap.fromTo(
        slide,
        { x: fromX, opacity: 0.98 },
        { x: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      );
    }
    slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setIndex(i);
  };

  const next = () => scrollTo(Math.min(total - 1, index + 1), 1);
  const prev = () => scrollTo(Math.max(0, index - 1), -1);

  const onScroll = () => {
    const wrap = trackRef.current;
    if (!wrap) return;
    const { scrollLeft, offsetWidth } = wrap;
    const i = Math.round(scrollLeft / offsetWidth);
    if (i !== index) setIndex(i);
  };

  const maxPages = 3;
  const half = Math.floor(maxPages / 2);
  let start = Math.max(0, index - half);
  let end = start + maxPages;
  if (end > total) {
    end = total;
    start = Math.max(0, end - maxPages);
  }
  const pageRange = Array.from({ length: end - start }, (_, k) => start + k);

  return (
    <section id="members" className="min-h-screen w-full bg-black text-white">
      <div className="relative mx-auto project-titles flex flex-col gap-3 items-center justify-center max-w-2xl max-sm:max-w-[360px] py-10">
        <h1 className="font-wix font-semibold text-4xl max-sm:text-3xl max-sm:font-semibold max-sm:text-center">
          Meet Our Members
        </h1>
        <p className="font-roboto text-sm max-sm:text-[12px] text-[#b9b9b9] max-sm:text-center">
          Explore the talented members of our coding community.
        </p>
      </div>

      <div
        className="mx-auto mb-6 flex items-center justify-center gap-6 px-6 max-w-5xl
                   max-sm:justify-start max-sm:gap-8 max-sm:overflow-x-auto max-sm:flex-nowrap
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`relative pb-1 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${
              active === t ? "text-emerald-400" : "text-gray-300 hover:text-white"
            }`}
          >
            {t}
            {active === t && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-emerald-400" />
            )}
          </button>
        ))}
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="relative mx-auto w-full max-w-6xl flex overflow-x-auto snap-x snap-mandatory scroll-smooth
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {slides.map((items, i) => (
          <div
            key={i}
            className="shrink-0 w-full snap-start px-6"
          >
            <div className="member-cards mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 place-items-center">
              {items.map((m, k) => (
                <Member key={`${m.email}-${k}`} {...m} />
              ))}
              {Array.from({ length: Math.max(0, pageSize - items.length) }).map((_, g) => (
                <div key={`ghost-${g}`} className="h-56 w-64" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 pb-10">
        <button
          className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-2 text-gray-200 hover:bg-white/10 disabled:opacity-40"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>

        <div className="flex items-center gap-2">
          {pageRange.map(i => (
            <button
              key={i}
              onClick={() => scrollTo(i, i > index ? 1 : -1)}
              className={`min-w-8 rounded-md px-2 py-1 text-sm ${
                i === index ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label={`Go to page ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-2 text-gray-200 hover:bg-white/10 disabled:opacity-40"
          onClick={next}
          disabled={index === total - 1}
          aria-label="Next"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
