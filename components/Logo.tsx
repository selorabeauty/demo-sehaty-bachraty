export default function Logo({ light = false }: { light?: boolean }) {
  const c = light ? "#E0F7FA" : "#0B1F3A";
  return (
    <span className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.2" strokeLinecap="round" aria-hidden>
        <path d="M18 14c0-6 5-9 10-8 5 1 8 5 8 10 0 3-1 5-2 7" />
        <path d="M18 14c-1 6 1 9 3 12 2 3 1 6-1 8l-2 3 6 1 8-1" />
        <path d="M24 12c3 0 6 2 6 5" />
        <path d="M36 9c3-3 7-2 7 1s-4 4-7-1Z" />
        <path d="M36 9c-3-3-7-2-7 1s4 4 7-1Z" />
        <circle cx="36" cy="9.5" r="1.2" />
        <path d="M14 42c4-3 8-4 12-4" />
      </svg>
      <span className="font-display text-xl font-semibold leading-none" style={{ color: c }}>
        صحتي وبشرتي
      </span>
    </span>
  );
}
