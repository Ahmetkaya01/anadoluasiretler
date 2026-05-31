type PageBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <div className="relative overflow-hidden border-b border-slateBrand-100 bg-heroGlow">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-accent-gold/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-slateBrand-900 md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slateBrand-700">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
