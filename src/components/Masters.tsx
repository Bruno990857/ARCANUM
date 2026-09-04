import { masters } from "../data/masters";
import SectionTitle from "./SectionTitle";

export default function Masters() {
  return (
    <section id="mestres" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow="Capítulo III"
        title="Os Quatro Mestres"
        subtitle="Não eram deuses. Não eram humanos. Eram as primeiras vontades a existir — e eram os seus próprios elementos."
      />

      <div className="mt-16 space-y-24">
        {masters.map((m, i) => (
          <article
            id={`mestre-${m.id}`}
            key={m.id}
            className={`grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Portrait */}
            <div className="relative">
              <div
                className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${m.colors.gradient} opacity-20 blur-2xl animate-pulse-glow`}
              />
              <div className={`relative overflow-hidden rounded-2xl border ${m.colors.border} shadow-2xl ${m.colors.glow}`}>
                <img
                  src={m.image}
                  alt={`${m.name}, Mestre do ${m.element}`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6">
                  <div className="text-4xl">{m.emoji}</div>
                  <div className={`font-display text-3xl font-black tracking-widest ${m.colors.text}`}>
                    {m.name.toUpperCase()}
                  </div>
                  <div className="font-display text-xs uppercase tracking-[0.3em] text-slate-300">
                    {m.element} · {m.principle}
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className={`font-display text-xs font-semibold uppercase tracking-[0.4em] ${m.colors.text}`}>
                {m.title}
              </p>
              <h3 className="mt-3 font-display text-4xl font-bold text-amber-50">
                {m.name} <span className="text-slate-500">—</span>{" "}
                <span className={m.colors.text}>{m.principle}</span>
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">{m.belief}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {m.taught.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${m.colors.badge}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className={`mt-6 rounded-xl border-l-4 ${m.colors.border} ${m.colors.bg} px-5 py-4`}>
                <p className="text-xs font-display uppercase tracking-[0.3em] text-slate-400">O perigo</p>
                <p className="mt-1 text-base italic text-slate-200">“{m.danger}”</p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-display uppercase tracking-[0.3em] text-slate-400">Hoje</p>
                <p className="mt-2 leading-relaxed text-slate-300">{m.today}</p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border ${m.colors.border} ${m.colors.bg} text-sm`}>
                  ◈
                </span>
                <span className="text-sm text-slate-400">
                  Guarda a <span className={`font-semibold ${m.colors.text}`}>{m.essence}</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
