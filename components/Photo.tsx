/* Art-directed placeholder "photography". Pass `src` to swap in a real photo (lazy-loaded, same cool grading). */
type Scene = "interior" | "liquid" | "skin" | "laser" | "reception" | "map";
type Tone = "ice" | "navy" | "pale";

const bg: Record<Tone, string> = {
  ice: "radial-gradient(120% 90% at 30% 20%, #ffffff 0%, #E0F7FA 40%, #9FD8E4 100%)",
  navy: "radial-gradient(110% 90% at 70% 15%, #2f5f8f 0%, #12305a 45%, #07152b 100%)",
  pale: "radial-gradient(120% 90% at 65% 25%, #ffffff 0%, #EAF6FA 45%, #C6DDE6 100%)",
};

function SceneArt({ scene, dark }: { scene: Scene; dark: boolean }) {
  const line = dark ? "rgba(224,247,250,.35)" : "rgba(11,31,58,.22)";
  const fill = dark ? "rgba(224,247,250,.08)" : "rgba(255,255,255,.55)";
  const glow = dark ? "#7fd6e8" : "#ffffff";
  const common = { viewBox: "0 0 400 500", preserveAspectRatio: "xMidYMid slice", className: "absolute inset-0 h-full w-full" };
  switch (scene) {
    case "interior":
      return (
        <svg {...common} aria-hidden>
          <rect x="70" y="60" width="110" height="300" rx="55" fill={fill} stroke={line} />
          <rect x="220" y="60" width="110" height="300" rx="55" fill={fill} stroke={line} />
          <path d="M0 380 H400 M0 420 H400" stroke={line} />
          <path d="M120 380 L40 500 M280 380 L360 500" stroke={line} />
          <circle cx="200" cy="200" r="120" fill={glow} opacity=".25" />
        </svg>
      );
    case "liquid":
      return (
        <svg {...common} aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M-20 ${120 + i * 70} C 100 ${40 + i * 70}, 180 ${200 + i * 70}, 420 ${100 + i * 70}`} fill="none" stroke={line} strokeWidth="1.2" />
          ))}
          <path d="M-20 260 C 120 160, 220 360, 420 240 V520 H-20Z" fill={fill} />
          <ellipse cx="260" cy="190" rx="70" ry="50" fill={glow} opacity=".35" />
        </svg>
      );
    case "skin":
      return (
        <svg {...common} aria-hidden>
          <circle cx="200" cy="230" r="150" fill={glow} opacity=".35" />
          <path d="M120 400 C100 250 140 130 200 130 C260 130 300 250 280 400" fill={fill} stroke={line} />
          <path d="M165 250 q35 25 70 0 M170 300 q30 14 60 0" fill="none" stroke={line} />
        </svg>
      );
    case "laser":
      return (
        <svg {...common} aria-hidden>
          <path d="M200 40 V210" stroke={line} strokeWidth="2" />
          <rect x="150" y="210" width="100" height="70" rx="14" fill={fill} stroke={line} />
          <path d="M200 280 L120 460 M200 280 L280 460" stroke={glow} strokeOpacity=".7" strokeWidth="1" />
          <circle cx="200" cy="280" r="60" fill={glow} opacity=".25" />
          <path d="M60 470 H340" stroke={line} />
        </svg>
      );
    case "reception":
      return (
        <svg {...common} aria-hidden>
          {[110, 200, 290].map((x) => (
            <g key={x}>
              <path d={`M${x} 0 V90`} stroke={line} />
              <circle cx={x} cy="110" r="22" fill={glow} opacity=".55" />
            </g>
          ))}
          <rect x="50" y="300" width="300" height="110" rx="6" fill={fill} stroke={line} />
          <path d="M0 410 H400" stroke={line} />
          <circle cx="200" cy="230" r="150" fill="none" stroke={line} />
        </svg>
      );
    case "map":
      return (
        <svg {...common} aria-hidden>
          {Array.from({ length: 9 }).map((_, i) => (
            <path key={i} d={`M0 ${i * 60} L400 ${i * 60 + 30}`} stroke={line} />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <path key={i} d={`M${i * 70} 0 L${i * 70 - 40} 500`} stroke={line} />
          ))}
          <circle cx="210" cy="240" r="46" fill={glow} opacity=".3" />
          <circle cx="210" cy="240" r="8" fill={dark ? "#E0F7FA" : "#0B1F3A"} />
        </svg>
      );
  }
}

export default function Photo({
  scene, tone = "ice", alt, src, className = "",
}: { scene: Scene; tone?: Tone; alt: string; src?: string; className?: string }) {
  return (
    <div role="img" aria-label={alt} className={`relative overflow-hidden ${className}`} style={{ background: bg[tone] }}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <SceneArt scene={scene} dark={tone === "navy"} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
    </div>
  );
}
