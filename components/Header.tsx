"use client";
import { useState } from "react";
import Logo from "./Logo";
import { WHATSAPP } from "../lib/site";

const nav = [
  { href: "#treatments", label: "خدماتنا" },
  { href: "#reviews", label: "تجارب المراجعين" },
  { href: "#approach", label: "من نحن" },
];
const mega = [
  { href: "#treatments", t: "الليزر البارد", d: "إزالة شعر بدون ألم" },
  { href: "#treatments", t: "Q-switched الكربوني", d: "تفتيح وإزالة تصبغات" },
  { href: "#treatments", t: "العناية بالبشرة", d: "برامج مخصصة للإشراق" },
  { href: "#location", t: "موقعنا", d: "تبوك، الخالدية، الوجه" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-silver/50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
        <a href="#top" aria-label="صحتي وبشرتي — الصفحة الرئيسية"><Logo /></a>
        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="transition hover:text-navy/60">{n.label}</a>
          ))}
          <div className="relative">
            <button
              aria-expanded={open}
              aria-controls="mega"
              onClick={() => setOpen(!open)}
              onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
              className="flex items-center gap-1 transition hover:text-navy/60"
            >
              اكتشفي <span aria-hidden className={`transition ${open ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {open && (
              <div id="mega" className="absolute end-0 top-10 w-[420px] border border-silver/60 bg-white p-4 shadow-xl shadow-navy/10">
                <ul className="grid grid-cols-2 gap-1">
                  {mega.map((m) => (
                    <li key={m.t}>
                      <a href={m.href} onClick={() => setOpen(false)} className="block p-3 transition hover:bg-ice/60">
                        <span className="font-display block text-base">{m.t}</span>
                        <span className="text-xs text-navy/60">{m.d}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-gradient-to-l from-icy to-ice px-5 py-2.5 text-sm font-medium text-navy ring-1 ring-icy transition hover:shadow-lg hover:shadow-icy/60"
        >
          احجز موعدك ↗
        </a>
      </div>
    </header>
  );
}
