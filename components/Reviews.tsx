"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const reviews = [
  { q: "تجربة حلوة واشكر الممرضة شيماء على الشغل الممتاز", src: "تقييم Google" },
  { q: "أول جلسة ليزر بارد ممتازة، ما حسيت بشيء بعد الجلسة وإن شاء الله بعد كم جلسة يختفي الشعر.", src: "تقييم واتساب" },
];

function Star({ fill }: { fill: number }) {
  return (
    <svg viewBox="0 0 24 24" className="glow-star h-6 w-6" aria-hidden>
      <defs>
        <linearGradient id={`g${fill}`}><stop offset={`${fill * 100}%`} stopColor="#5CC8DC" /><stop offset={`${fill * 100}%`} stopColor="#DCE6EA" /></linearGradient>
      </defs>
      <path fill={`url(#g${fill})`} d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.3 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
    </svg>
  );
}

export default function Reviews() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + reviews.length) % reviews.length);
  return (
    <section id="reviews" aria-labelledby="r-h" className="bg-white py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-silver pb-10 md:flex-row md:items-end">
          <h2 id="r-h" className="text-4xl font-light md:text-6xl">تجارب <span className="font-semibold">المراجعين</span></h2>
          <div className="flex items-center gap-4">
            <span className="font-display text-5xl font-semibold">4.4</span>
            <div>
              <div className="flex" role="img" aria-label="4.4 نجوم من 5">
                {[1, 1, 1, 1, 0.4].map((f, n) => <Star key={n} fill={f} />)}
              </div>
              <p className="mt-1 text-xs text-navy/60">4.4 نجوم على خرائط Google</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[22rem] py-16 md:min-h-[26rem]">
          <span aria-hidden className="font-display absolute -top-2 start-0 text-[9rem] leading-none text-icy">”</span>
          <AnimatePresence mode="wait">
            <motion.figure key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45 }} aria-live="polite" className="relative ps-0 md:ps-24">
              <blockquote className="font-display text-3xl font-light leading-[1.6] md:text-6xl md:leading-[1.5]">«{reviews[i].q}»</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-sm text-navy/70">
                <span className="flex" aria-label="5 نجوم">{[0, 1, 2, 3, 4].map((n) => <Star key={n} fill={1} />)}</span>
                <span>تقييم 5 نجوم — {reviews[i].src}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <button onClick={() => go(1)} aria-label="التقييم السابق" className="grid h-11 w-11 place-items-center rounded-full border border-silver transition hover:bg-ice">→</button>
          <button onClick={() => go(-1)} aria-label="التقييم التالي" className="grid h-11 w-11 place-items-center rounded-full border border-silver transition hover:bg-ice">←</button>
          <span className="text-navy/50">{i + 1} / {reviews.length}</span>
        </div>
      </div>
    </section>
  );
}
