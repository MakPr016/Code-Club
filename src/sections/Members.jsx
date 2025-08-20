import { useEffect, useMemo, useState } from "react";
import Member from "../components/Member";
import { members } from "../data/members";

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
    return ["all", ...ordered, ...extras];
  }, []);

  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return members;
    return members.filter(m => normalize(m.team) === active);
  }, [active]);

  const columns = useColumns();
  const pageSize = Math.max(1, columns) * 2;

  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(p => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const start = page * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  const next = () => setPage(p => Math.min(p + 1, totalPages - 1));
  const prev = () => setPage(p => Math.max(p - 1, 0));

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

      <div className="mx-auto mb-6 flex max-w-5xl flex-wrap items-center justify-center gap-6 px-6">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`relative pb-1 text-sm uppercase tracking-wide transition-colors ${
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
        className="member-cards mx-auto grid max-w-6xl px-6
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                   gap-x-8 gap-y-10 place-items-center"
      >
        {pageItems.map((m, i) => (
          <Member
            key={`${m.email}-${i}`}
            {...m}
          />
        ))}

        {Array.from({ length: Math.max(0, pageSize - pageItems.length) }).map((_, i) => (
          <div key={`ghost-${i}`} className="h-56 w-64" />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-6 pb-10">
        <button
          onClick={prev}
          className="rounded-full border border-white/20 p-2 text-gray-200 hover:bg-white/10 disabled:opacity-40"
          disabled={page === 0}
          aria-label="Previous page"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 w-2 rounded-full ${
                i === page ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="rounded-full border border-white/20 p-2 text-gray-200 hover:bg-white/10 disabled:opacity-40"
          disabled={page >= totalPages - 1}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
    </section>
  );
}
