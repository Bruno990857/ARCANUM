import { useState } from "react";
import { chapters } from "../data/chapters";
import SectionTitle from "./SectionTitle";
import { cn } from "../utils/cn";

export default function Story() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section id="historia" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Crônica de Arcanum"
          title="A História dos Quatro"
          subtitle="Do Vazio ao Pacto. Do Silêncio ao Retorno. Doze capítulos de uma história que começou antes do próprio mundo existir."
        />

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/0 via-amber-400/40 to-amber-400/0 sm:left-8" />

          <ol className="space-y-4">
            {chapters.map((c, i) => {
              const open = openIdx === i;
              return (
                <li key={c.numeral} className="relative pl-14 sm:pl-20">
                  <button
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center sm:h-16 sm:w-16 sm:top-0"
                    aria-label={`Capítulo ${c.numeral}`}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border font-display text-xs font-bold transition sm:h-12 sm:w-12 sm:text-sm",
                        open
                          ? "border-amber-400 bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/40"
                          : "border-amber-400/40 bg-slate-950 text-amber-300 hover:border-amber-400"
                      )}
                    >
                      {c.numeral}
                    </span>
                  </button>

                  <div
                    className={cn(
                      "rounded-2xl border transition-all",
                      open
                        ? "border-amber-400/30 bg-slate-900/70 shadow-xl shadow-black/30"
                        : "border-white/5 bg-slate-900/30 hover:border-white/10"
                    )}
                  >
                    <button
                      onClick={() => setOpenIdx(open ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <div>
                        <p className="font-display text-[10px] uppercase tracking-[0.4em] text-amber-300/70">
                          Capítulo {c.numeral}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-bold text-amber-50 sm:text-2xl">
                          {c.title}
                        </h3>
                      </div>
                      <svg
                        className={cn("h-5 w-5 shrink-0 text-amber-300 transition-transform", open && "rotate-180")}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {open && (
                      <div className="animate-fade-up border-t border-white/5 px-6 pb-7 pt-5">
                        {c.quote && (
                          <blockquote className="mb-5 border-l-2 border-amber-400/60 pl-4 text-lg italic text-amber-100/90">
                            “{c.quote}”
                          </blockquote>
                        )}
                        <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                          {c.paragraphs.map((p, j) => (
                            <p key={j} className={cn(j === c.paragraphs.length - 1 && i === chapters.length - 1 && "font-semibold text-amber-200")}>
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Pact summary */}
        <div className="mt-20 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-center sm:p-12">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-amber-300/70">O Pacto dos Quatro</p>
          <p className="mt-4 text-xl italic text-slate-300">
            O Arcano foi dividido. Cada Mestre guardaria uma parte. Nenhum deles poderia utilizá-lo sozinho.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["🔥", "Vulkar", "Essência da Força", "text-orange-400"],
              ["🌊", "Neris", "Essência do Conhecimento", "text-cyan-400"],
              ["🌪️", "Avatis", "Essência da Liberdade", "text-sky-300"],
              ["🌱", "Erdan", "Essência do Equilíbrio", "text-emerald-400"],
            ].map(([e, n, ess, color]) => (
              <div key={n} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="text-3xl">{e}</div>
                <div className={cn("mt-2 font-display text-sm font-bold uppercase tracking-widest", color)}>{n}</div>
                <div className="mt-1 text-sm text-slate-400">{ess}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Jamais permitiriam que o Arcano fosse reunido novamente.
          </p>
        </div>
      </div>
    </section>
  );
}
