import { masters } from "../data/masters";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />

      {/* Rotating rune ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <svg className="animate-spin-slow h-[720px] w-[720px] max-w-none" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="96" stroke="#fbbf24" strokeWidth="0.4" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="80" stroke="#fbbf24" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="62" stroke="#fbbf24" strokeWidth="0.3" strokeDasharray="1 3" />
          <polygon points="100,20 180,100 100,180 20,100" stroke="#fbbf24" strokeWidth="0.3" />
          <polygon points="100,38 162,100 100,162 38,100" stroke="#fbbf24" strokeWidth="0.3" />
          <line x1="100" y1="4" x2="100" y2="196" stroke="#fbbf24" strokeWidth="0.2" />
          <line x1="4" y1="100" x2="196" y2="100" stroke="#fbbf24" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-24 text-center">
        <p className="animate-fade-up font-display text-xs font-semibold uppercase tracking-[0.5em] text-amber-300/80">
          A História dos Quatro
        </p>
        <h1
          className="animate-fade-up mt-6 font-display text-6xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-amber-500 sm:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          ARCANUM
        </h1>

        <blockquote
          className="animate-fade-up mx-auto mt-8 max-w-2xl text-xl italic leading-relaxed text-slate-300 sm:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          “Antes dos reinos, antes dos homens e antes mesmo de existir um céu para olhar,
          quatro forças já caminhavam pelo vazio.”
        </blockquote>

        <div
          className="animate-fade-up mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          style={{ animationDelay: "0.3s" }}
        >
          {masters.map((m) => (
            <a
              key={m.id}
              href={`#mestre-${m.id}`}
              className={`group rounded-xl border ${m.colors.border} ${m.colors.bg} px-4 py-4 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg ${m.colors.glow}`}
            >
              <div className="text-3xl">{m.emoji}</div>
              <div className={`mt-2 font-display text-sm font-bold uppercase tracking-widest ${m.colors.text}`}>
                {m.name}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{m.principle}</div>
            </a>
          ))}
        </div>

        <div
          className="animate-fade-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#historia"
            className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-950 shadow-lg shadow-amber-500/30 transition hover:from-amber-400 hover:to-amber-500"
          >
            Ler a História
          </a>
          <a
            href="#recompensas"
            className="rounded-full border border-amber-300/40 px-8 py-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-amber-200 transition hover:bg-amber-300/10"
          >
            Ver Recompensas
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-amber-300/60">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
