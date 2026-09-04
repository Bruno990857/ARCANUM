export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="text-4xl tracking-[0.5em]">🔥🌊🌪️🌱</div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["VULKAR", "FORÇA", "text-orange-400"],
            ["NERIS", "CONHECIMENTO", "text-cyan-400"],
            ["AVATIS", "LIBERDADE", "text-sky-300"],
            ["ERDAN", "EQUILÍBRIO", "text-emerald-400"],
          ].map(([n, p, c]) => (
            <div key={n}>
              <div className={`font-display text-sm font-bold tracking-[0.3em] ${c}`}>{n}</div>
              <div className="font-display text-[10px] tracking-[0.3em] text-slate-500">{p}</div>
            </div>
          ))}
        </div>

        <div className="rune-divider mx-auto my-10 w-64" />

        <p className="font-display text-lg font-bold tracking-widest text-amber-100">
          Quatro Mestres. Um mundo.
        </p>
        <p className="mt-2 text-lg italic text-slate-400">
          Uma história que começou antes do próprio mundo existir.
        </p>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
          E agora, pela primeira vez em milhares de anos, os quatro terão que decidir se continuarão sendo
          Mestres de Arcanum — ou se finalmente revelarão ao mundo aquilo que realmente são.
        </p>

        <p className="mt-12 font-display text-[10px] uppercase tracking-[0.4em] text-slate-600">
          Arcanum · Servidor Minecraft Modded · Não afiliado à Mojang
        </p>
      </div>
    </footer>
  );
}
