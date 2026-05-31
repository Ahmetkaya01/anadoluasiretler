type MarqueeTickerProps = {
  items: string[];
};

export function MarqueeTicker({ items }: MarqueeTickerProps) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-slateBrand-100 bg-white/90 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap py-3.5">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-6 inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-slateBrand-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
