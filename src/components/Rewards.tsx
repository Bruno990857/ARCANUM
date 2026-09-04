import { useMemo, useState } from "react";
import { masters, type MasterId } from "../data/masters";
import { rewards, tierLabels, type ItemKind, type RewardItem, type RewardTier } from "../data/rewards";
import SectionTitle from "./SectionTitle";
import { cn } from "../utils/cn";

type Filter = MasterId | "pacto";

const kindIcon: Record<ItemKind, string> = {
  Armadura: "🛡️",
  Arma: "⚔️",
  Artefato: "💍",
  Magia: "📜",
  Material: "🔩",
  Montaria: "🐉",
  Utilidade: "🧭",
  Exclusivo: "◈",
};

const kindColor: Record<ItemKind, string> = {
  Armadura: "bg-slate-500/20 text-slate-200 border-slate-400/30",
  Arma: "bg-red-500/15 text-red-200 border-red-400/30",
  Artefato: "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30",
  Magia: "bg-violet-500/15 text-violet-200 border-violet-400/30",
  Material: "bg-stone-500/20 text-stone-200 border-stone-400/30",
  Montaria: "bg-teal-500/15 text-teal-200 border-teal-400/30",
  Utilidade: "bg-blue-500/15 text-blue-200 border-blue-400/30",
  Exclusivo: "bg-amber-500/20 text-amber-200 border-amber-400/40",
};

const pactoTheme = {
  text: "text-amber-300",
  bg: "bg-amber-500/10",
  border: "border-amber-400/40",
  ring: "ring-amber-400",
  glow: "shadow-amber-400/30",
  gradient: "from-amber-400 via-orange-500 to-amber-600",
  badge: "bg-amber-500/20 text-amber-200 border-amber-400/40",
};

function ItemCard({ item, accent }: { item: RewardItem; accent: string }) {
  const exclusive = item.kind === "Exclusivo";
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-2 rounded-xl border p-4 transition hover:-translate-y-0.5",
        exclusive
          ? "border-amber-400/50 bg-gradient-to-br from-amber-500/15 to-amber-900/10 shadow-lg shadow-amber-500/10"
          : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl leading-none">{kindIcon[item.kind]}</span>
          <h5 className={cn("font-semibold leading-tight", exclusive ? "text-amber-100" : "text-slate-100")}>
            {item.name}
          </h5>
        </div>
        {item.qty && (
          <span className={cn("shrink-0 rounded-md px-2 py-0.5 text-xs font-bold", accent, "bg-white/5")}>
            {item.qty}
          </span>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider", kindColor[item.kind])}>
          {item.kind}
        </span>
        <span className="rounded-full border border-white/10 bg-slate-800/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400">
          {item.mod}
        </span>
      </div>
      {item.note && <p className="text-sm italic text-slate-400">{item.note}</p>}
    </div>
  );
}

function TierBlock({
  tier,
  theme,
  emoji,
}: {
  tier: RewardTier;
  theme: typeof pactoTheme;
  emoji: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border bg-slate-900/50", theme.border)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", theme.gradient)} />
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[300px_1fr]">
        {/* Left: requirement */}
        <div>
          <div className="flex items-center gap-3">
            <span className={cn("flex h-11 w-11 items-center justify-center rounded-full border text-lg", theme.border, theme.bg)}>
              {emoji}
            </span>
            <div>
              <p className={cn("font-display text-[10px] font-bold uppercase tracking-[0.35em]", theme.text)}>
                Tier {tier.tier} · {tierLabels[tier.tier]}
              </p>
              <h4 className="font-display text-lg font-bold text-amber-50">{tier.tierName}</h4>
            </div>
          </div>
          <h3 className="mt-5 text-2xl font-semibold italic text-slate-100">“{tier.title}”</h3>

          <div className={cn("mt-4 rounded-xl border p-4", theme.border, theme.bg)}>
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-slate-400">Prova</p>
            <p className="mt-1 leading-relaxed text-slate-200">{tier.requirement}</p>
          </div>
          <div className="mt-3 flex items-start gap-2 text-sm text-slate-400">
            <span>📍</span>
            <span>{tier.location}</span>
          </div>
        </div>

        {/* Right: items */}
        <div>
          <p className="mb-3 font-display text-[10px] uppercase tracking-[0.3em] text-slate-400">
            Recompensas · {tier.items.length} itens
          </p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {tier.items.map((it) => (
              <ItemCard key={it.name} item={it} accent={theme.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Rewards() {
  const [filter, setFilter] = useState<Filter>("vulkar");
  const [tierFilter, setTierFilter] = useState<number | 0>(0);

  const current = useMemo(() => rewards.find((r) => r.master === filter)!, [filter]);
  const master = filter === "pacto" ? null : masters.find((m) => m.id === filter)!;
  const theme = master ? master.colors : pactoTheme;
  const emoji = master ? master.emoji : "◈";

  const visibleTiers = current.tiers.filter((t) => tierFilter === 0 || t.tier === tierFilter);

  const totalItems = rewards.reduce((acc, r) => acc + r.tiers.reduce((a, t) => a + t.items.length, 0), 0);

  return (
    <section id="recompensas" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow="Provas & Essências"
        title="Recompensas dos Mestres"
        subtitle="Cada Mestre concede quatro Provas. Complete-as para receber armaduras, armas e artefatos dos mods de Arcanum — e, no fim, a sua Essência."
      />

      {/* Stats */}
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center">
        {[
          ["4", "Mestres"],
          ["17", "Provas"],
          [String(totalItems), "Recompensas"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-xl border border-white/5 bg-white/[0.02] py-4">
            <div className="font-display text-3xl font-black text-amber-200">{n}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{l}</div>
          </div>
        ))}
      </div>

      {/* Master filter */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {masters.map((m) => {
          const active = filter === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setFilter(m.id)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-5 py-2.5 font-display text-xs font-bold uppercase tracking-[0.2em] transition",
                active
                  ? cn(m.colors.border, m.colors.bg, m.colors.text, "ring-1", m.colors.ring, "shadow-lg", m.colors.glow)
                  : "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
              )}
            >
              <span>{m.emoji}</span> {m.name}
            </button>
          );
        })}
        <button
          onClick={() => setFilter("pacto")}
          className={cn(
            "flex items-center gap-2 rounded-full border px-5 py-2.5 font-display text-xs font-bold uppercase tracking-[0.2em] transition",
            filter === "pacto"
              ? "border-amber-400/60 bg-amber-500/10 text-amber-200 ring-1 ring-amber-400 shadow-lg shadow-amber-400/30"
              : "border-amber-400/20 text-amber-300/70 hover:border-amber-400/40 hover:text-amber-200"
          )}
        >
          <span>◈</span> O Pacto
        </button>
      </div>

      {/* Tier filter */}
      {filter !== "pacto" && (
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {[0, 1, 2, 3, 4].map((t) => (
            <button
              key={t}
              onClick={() => setTierFilter(t)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition",
                tierFilter === t
                  ? "border-amber-300/50 bg-amber-300/10 text-amber-200"
                  : "border-white/5 text-slate-500 hover:text-slate-300"
              )}
            >
              {t === 0 ? "Todos os tiers" : `${t} · ${tierLabels[t]}`}
            </button>
          ))}
        </div>
      )}

      {/* Header for the selected master */}
      <div key={filter} className="animate-fade-up mt-10">
        {master ? (
          <div className={cn("mb-8 flex flex-col items-center gap-4 rounded-2xl border p-6 text-center sm:flex-row sm:text-left", theme.border, theme.bg)}>
            <img src={master.image} alt={master.name} className={cn("h-20 w-20 rounded-full object-cover ring-2", theme.ring)} />
            <div>
              <p className={cn("font-display text-xs uppercase tracking-[0.4em]", theme.text)}>
                {master.element} · {master.principle}
              </p>
              <h3 className="font-display text-2xl font-bold text-amber-50">Caminho de {master.name}</h3>
              <p className="mt-1 text-slate-300">
                Recompensa final: <span className={cn("font-semibold", theme.text)}>{master.essence}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-8 rounded-2xl border border-amber-400/40 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-emerald-500/10 p-6 text-center">
            <p className="font-display text-xs uppercase tracking-[0.4em] text-amber-300">Capítulo VIII</p>
            <h3 className="font-display text-2xl font-bold text-amber-50">O Pacto dos Quatro</h3>
            <p className="mt-2 text-slate-300">
              Somente os quatro juntos poderiam reconstruí-lo. Quem reunir as quatro Essências recebe o que nenhum Mestre pode dar sozinho.
            </p>
          </div>
        )}

        <div className="space-y-8">
          {visibleTiers.map((t) => (
            <TierBlock key={`${filter}-${t.tier}`} tier={t} theme={theme} emoji={emoji} />
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-sm italic text-slate-500">
        * Itens marcados como <span className="text-amber-300">Arcanum</span> são exclusivos do servidor. Tudo o resto vem dos mods listados abaixo — sem recompensas vanilla desnecessárias.
      </p>
    </section>
  );
}
