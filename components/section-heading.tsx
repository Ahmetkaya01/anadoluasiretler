type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl text-slateBrand-900 md:text-5xl">{title}</h2>
      {description ? (
        <p className="text-base leading-8 text-slateBrand-700">{description}</p>
      ) : null}
    </div>
  );
}
