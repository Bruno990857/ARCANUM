interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="font-display text-xs font-semibold uppercase tracking-[0.5em] text-amber-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-display text-4xl font-bold tracking-wide text-amber-50 sm:text-5xl">
        {title}
      </h2>
      <div className="rune-divider mx-auto mt-6 w-48" />
      {subtitle && <p className="mt-6 text-lg italic leading-relaxed text-slate-400">{subtitle}</p>}
    </div>
  );
}
