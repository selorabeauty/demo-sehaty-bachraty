import Photo from "./Photo";

const pts = [
  ["النظافة", "تعقيم صارم وبيئة نقية في كل غرفة وكل جلسة."],
  ["التقنية", "أجهزة ليزر حديثة معتمدة لنتائج آمنة وملحوظة."],
  ["الرعاية", "خطة علاج مخصصة لبشرتك، بإشراف أطباء وممرضات متخصصات."],
];

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="a-h" className="relative overflow-hidden bg-mist py-24 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-12 md:px-10">
        <figure className="relative md:col-span-6">
          <div aria-hidden className="absolute -start-16 -top-16 h-[110%] w-[110%] rounded-full border border-icy" />
          <Photo scene="reception" tone="pale" alt="استقبال العيادة النظيف والهادئ" className="relative aspect-[4/5] w-full shadow-xl shadow-navy/10" />
          <figcaption className="mt-3 text-xs text-navy/60">استقبال العيادة — الوجه، تبوك</figcaption>
        </figure>
        <div className="relative md:col-span-5 md:col-start-8 md:-mt-24">
          <p className="mb-5 text-sm tracking-widest text-navy/50">من نحن</p>
          <h2 id="a-h" className="text-4xl font-semibold leading-tight md:text-6xl">صحتك وبشرتك.. في أيدٍ أمينة.</h2>
          <p className="mt-6 leading-9 text-navy/75">نلتزم بأعلى معايير النظافة، ونعتمد أحدث التقنيات، ونصمم لكِ رعاية شخصية تحترم بشرتك وخصوصيتك.</p>
          <dl className="mt-10 divide-y divide-silver border-y border-silver">
            {pts.map(([t, d]) => (
              <div key={t} className="grid grid-cols-[6rem_1fr] gap-4 py-5">
                <dt className="font-display text-lg">{t}</dt>
                <dd className="text-sm leading-7 text-navy/70">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
