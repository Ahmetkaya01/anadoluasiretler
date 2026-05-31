type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="48" height="48" rx="12" fill="url(#logo-bg)" />
      <path
        d="M24 8L38 16V32L24 40L10 32V16L24 8Z"
        stroke="#D6B067"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="24" cy="24" r="6" fill="url(#logo-core)" />
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#214F4C" />
          <stop offset="1" stopColor="#1F318B" />
        </linearGradient>
        <linearGradient id="logo-core" x1="18" y1="18" x2="30" y2="30">
          <stop stopColor="#D6B067" />
          <stop offset="1" stopColor="#84B8B2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
