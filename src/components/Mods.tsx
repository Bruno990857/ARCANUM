import { mods } from "../data/rewards";
import SectionTitle from "./SectionTitle";

const tagColor: Record<string, string> = {
  Combate: "bg-red-500/15 text-red-200 border-red-400/30",
  Magia: "bg-violet-500/15 text-violet-200 border-violet-400/30",
  Dimensão: "bg-sky-500/15 text-sky-200 border-sky-400/30",
  Criaturas: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  Artefatos: "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30",
  Tecnologia: "bg-amber-500/15 text-amber-200 border-amber-400/30",
  Recursos: "bg-cyan-500/15 text-cyan-200 border-cyan-400/30",
  Utilidade: "bg-blue-500/15 text-blue-200 border-blue-400/30",
  Base: "bg-slate-500/20 text-slate-200 border-slate-400/30",
};

export default function Mods() {
  return (
    <section id="mods" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Fundação do Mundo"
          title="Mods de Arcanum"
          subtitle="Cada mod tem um papel na história. As recompensas dos Mestres vêm exclusivamente daqui."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mods.map((m) => (
            <div
              key={m.name}
              className="group rounded-2xl border border-white/5 bg-slate-900/40 p-5 transition hover:border-amber-400/30 hover:bg-slate-900/70"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-bold text-amber-50 group-hover:text-amber-200">
                  {m.name}
                </h3>
                <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tagColor[m.tag]}`}>
                  {m.tag}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{m.role}</p>
            </div>
          ))}
        </div>

        {/* Element ↔ mod map */}
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            { e: "🔥", n: "Vulkar", c: "border-orange-500/40 text-orange-400", mods: ["Cataclysm (Ignis, Netherite Monstrosity)", "Iron's Spells — Fogo", "Ice and Fire — Dragão de Fogo", "Mowzie's — Wroughtnaut, Umvuthi", "Twilight Forest — Hydra"] },
            { e: "🌊", n: "Neris", c: "border-cyan-500/40 text-cyan-400", mods: ["Cataclysm (Leviathan, Harbinger)", "Ars Nouveau", "Iron's Spells — Gelo", "Deeper and Darker", "Aquaculture", "Ice and Fire — Sea Serpent"] },
            { e: "🌪️", n: "Avatis", c: "border-sky-400/40 text-sky-300", mods: ["The Aether", "Cataclysm (Ender Guardian, Scylla)", "Iron's Spells — Raio", "Ice and Fire — Dragão de Raio", "Waystones"] },
            { e: "🌱", n: "Erdan", c: "border-emerald-500/40 text-emerald-400", mods: ["Botania", "Create", "Cataclysm (Ancient Remnant, Maledictus)", "Twilight Forest — Naga, Lich", "Iron's Spells — Natureza", "Mowzie's — Sculptor, Frostmaw"] },
          ].map((col) => (
            <div key={col.n} className={`rounded-2xl border bg-slate-900/40 p-5 ${col.c.split(" ")[0]}`}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{col.e}</span>
                <span className={`font-display text-sm font-bold uppercase tracking-widest ${col.c.split(" ")[1]}`}>{col.n}</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {col.mods.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-slate-600">›</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
