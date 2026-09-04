import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const links = [
  { href: "#mestres", label: "Os Mestres" },
  { href: "#historia", label: "A História" },
  { href: "#recompensas", label: "Recompensas" },
  { href: "#mods", label: "Mods" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 via-cyan-500 to-emerald-500 opacity-70 blur-sm" />
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 font-display text-sm font-bold text-amber-300">
              A
            </span>
          </span>
          <span className="font-display text-lg font-bold tracking-[0.25em] text-amber-100">
            ARCANUM
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:text-amber-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-white/10 p-2 text-slate-300"
          aria-label="Menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 hover:text-amber-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
