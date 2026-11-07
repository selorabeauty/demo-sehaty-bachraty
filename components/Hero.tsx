"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Photo from "./Photo";

const words = ["نضارة.", "عناية.", "تألق."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [mobile, setMobile] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const f = () => setMobile(mq.matches);
    f();
    mq.addEventListener("change", f);
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => { mq.removeEventListener("change", f); clearInterval(t); };
  }, []);

  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const k = reduce ? 0 : 1;
  const w = useTransform(p, [0, 0.75], [mobile ? "62vw" : "36vw", "100vw"]);
  const h = useTransform(p, [0, 0.75], [mobile ? "58vh" : "66vh", "100vh"]);
  const maxRot = (mobile ? 2 : 9) * k;
  const rotL = useTransform(p, [0, 1], [-maxRot, -maxRot * 3]);
  const rotR = useTransform(p, [0, 1], [maxRot, maxRot * 3]);
  const drift = (mobile ? 40 : 28) * k;
  const xL = useTransform(p, [0, 1], ["0vw", `-${drift}vw`]);
  const xR = useTransform(p, [0, 1], ["0vw", `${drift}vw`]);
  const sideOpacity = useTransform(p, [0.4, 0.8], [1, 0]);
  const textY = useTransform(p, [0, 1], ["0vh", `${-6 * k}vh`]);

  return (
    <section id="top" ref={ref} className="relative h-[230vh] bg-white" aria-label="مقدمة">
      <div className="sticky top-[72px] flex h-[calc(100vh-72px)] items-center justify-center overflow-hidden">
        <motion.div style={{ x: xR, rotate: rotR, opacity: sideOpacity }} className="absolute start-[4vw] top-[14vh] h-[34vh] w-[24vw] md:start-[8vw] md:h-[38vh] md:w-[16vw]">
          <Photo scene="liquid" tone="pale" alt="سوائل وكريمات منسابة بدرجات الأزرق الثلجي" className="h-full w-full" />
        </motion.div>
        <motion.div style={{ x: xL, rotate: rotL, opacity: sideOpacity }} className="absolute bottom-[8vh] end-[4vw] h-[34vh] w-[26vw] md:end-[8vw] md:h-[40vh] md:w-[17vw]">
          <Photo scene="laser" tone="navy" alt="جهاز ليزر طبي حديث" className="h-full w-full" />
        </motion.div>

        <motion.div style={{ width: w, height: h }} className="relative z-10 overflow-hidden shadow-2xl shadow-navy/10">
          <Photo scene="interior" tone="ice" alt="صالة عيادة هادئة بإضاءة ناعمة" className="h-full w-full" />
        </motion.div>

        <p className="absolute start-5 top-5 z-20 flex items-center gap-2 text-xs tracking-wide text-navy md:start-10 md:top-8 md:text-sm">
          <span aria-hidden className="h-px w-8 bg-navy" /> الوجه، تبوك
        </p>

        <motion.div style={{ y: textY }} className="absolute inset-x-0 z-20 flex flex-col items-center px-6 text-center text-navy">
          <p aria-live="off" className="mb-3 h-6 text-sm tracking-[.3em]">
            <motion.span key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="inline-block">{words[i]}</motion.span>
          </p>
          <h1 className="text-[clamp(3.5rem,13vw,11rem)] font-semibold leading-[1.05]">صحتي وبشرتي</h1>
          <p className="mt-4 max-w-md text-sm leading-8 md:text-base">
            عيادات الجلدية والتجميل. حيث تلتقي الخبرة الطبية بالرعاية الفاخرة.
          </p>
          <a href="#treatments" className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-medium shadow-lg shadow-navy/10 transition hover:-translate-y-0.5">
            استكشف خدماتنا ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
