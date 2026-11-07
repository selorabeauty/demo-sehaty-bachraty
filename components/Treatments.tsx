"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Photo from "./Photo";
import { WHATSAPP } from "../lib/site";

type T = {
  n: string; title: string; desc: string; text: number; photoFirst: boolean;
  scene: "laser" | "liquid" | "skin"; tone: "ice" | "navy" | "pale"; alt: string;
};

const items: T[] = [
  { n: "٠١", title: "الليزر البارد", desc: "أجهزة متقدمة وإزالة شعر بدون ألم مع نتائج ملحوظة من الجلسة الأولى.", text: 42, photoFirst: false, scene: "laser", tone: "ice", alt: "جهاز الليزر البارد لإزالة الشعر" },
  { n: "٠٢", title: "جهاز Q-switched الكربوني", desc: "تفتيح فوري، إزالة تصبغات، ونضارة لا تنتهي.", text: 42, photoFirst: true, scene: "laser", tone: "navy", alt: "جهاز Q-switched بإضاءة زرقاء داكنة" },
  { n: "٠٣", title: "العناية بالبشرة", desc: "برامج مخصصة لتجديد شباب البشرة واستعادة إشراقتها الطبيعية.", text: 40, photoFirst: false, scene: "skin", tone: "pale", alt: "بشرة متوهجة ناعمة" },
];

function Story({ t }: { t: T }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const f = () => setMobile(mq.matches);
    f(); mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const start = reduce || mobile ? 0 : 55;
  const rotateY = useTransform(scrollYProgress, [0, 1], [start, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [mobile && !reduce ? 1.5 : 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  const textPane = (
    <div className="flex flex-col justify-center bg-white px-6 py-14 md:px-14 md:py-0" style={{ flexBasis: `${t.text}%` }}>
      <span className="font-display text-sm tracking-widest text-navy/50">{t.n}</span>
      <div className="my-5 h-px w-16 bg-silver" />
      <h3 className="text-4xl font-semibold leading-tight md:text-6xl">{t.title}</h3>
      <p className="mt-6 max-w-sm leading-9 text-navy/75">{t.desc}</p>
      <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-8 w-fit border-b border-navy pb-1 text-sm transition hover:opacity-60">احجزي جلستك ↗</a>
    </div>
  );
  const photoPane = (
    <div
      className={`relative flex items-center justify-center overflow-hidden py-14 md:py-0 ${t.tone === "navy" ? "bg-navy" : t.tone === "ice" ? "bg-ice" : "bg-[#DCEBF1]"}`}
      style={{ flexBasis: `${100 - t.text}%`, perspective: 1200 }}
    >
      <motion.div style={{ rotateY, rotate: rotateZ, opacity, transformOrigin: t.photoFirst ? "right center" : "left center" }} className="aspect-[4/5] w-[72%] max-w-md shadow-2xl shadow-navy/25 ring-8 ring-white/80">
        <Photo scene={t.scene} tone={t.tone === "navy" ? "navy" : "pale"} alt={t.alt} className="h-full w-full" />
      </motion.div>
    </div>
  );

  return (
    <article ref={ref} className="flex min-h-[85vh] flex-col md:flex-row">
      {/* In RTL, the first flex child sits on the right. */}
      {t.photoFirst ? <>{photoPane}{textPane}</> : <>{textPane}{photoPane}</>}
    </article>
  );
}

export default function Treatments() {
  return (
    <section id="treatments" aria-labelledby="t-h" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <p className="mb-6 text-sm tracking-widest text-navy/50">المجموعة المختارة</p>
        <h2 id="t-h" className="max-w-3xl text-5xl font-light leading-tight md:text-8xl">عناية فائقة. <span className="font-semibold">نتائج تدوم.</span></h2>
      </div>
      <div className="flex flex-col">{items.map((t) => <Story key={t.n} t={t} />)}</div>
    </section>
  );
}
