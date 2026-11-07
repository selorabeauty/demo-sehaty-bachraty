import { WHATSAPP } from "../lib/site";

export default function Booking() {
  return (
    <section id="book" aria-labelledby="b-h" className="bg-ice px-6 py-28 text-center text-navy md:py-48">
      <p className="mb-6 text-sm tracking-widest text-navy/60">استشارة وحجز</p>
      <h2 id="b-h" className="mx-auto max-w-5xl text-5xl font-semibold leading-tight md:text-8xl">دعينا نبرز جمالك الحقيقي.</h2>
      <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-12 inline-block rounded-full bg-white px-9 py-4 font-medium shadow-xl shadow-navy/10 transition hover:-translate-y-1">
        احجزي جلستك الآن ↗
      </a>
    </section>
  );
}
