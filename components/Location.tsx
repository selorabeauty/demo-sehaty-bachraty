import Photo from "./Photo";

export default function Location() {
  return (
    <section id="location" aria-labelledby="l-h" className="bg-gradient-to-b from-navy via-[#1d5a7d] to-ice py-24 text-white md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <div>
          <h2 id="l-h" className="text-7xl font-semibold md:text-[10rem] md:leading-none">موقعنا.</h2>
          <address className="mt-8 text-xl not-italic leading-9 md:text-2xl">تبوك، الخالدية، الوجه 48721</address>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm backdrop-blur">
            <span aria-hidden className="h-2 w-2 rounded-full bg-ice shadow-[0_0_10px_#E0F7FA]" /> نستقبلكم يومياً
          </p>
          <a href="https://www.google.com/maps/search/?api=1&query=%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA+%D8%B5%D8%AD%D8%AA%D9%8A+%D9%88%D8%A8%D8%B4%D8%B1%D8%AA%D9%8A+%D8%A7%D9%84%D9%88%D8%AC%D9%87" target="_blank" rel="noopener" className="mt-8 block w-fit border-b border-white pb-1 text-sm">افتحي الخريطة ↗</a>
        </div>
        <Photo scene="map" tone="navy" alt="خريطة منمقة لموقع العيادة في الوجه، تبوك" className="aspect-[4/3] w-full ring-1 ring-white/30" />
      </div>
    </section>
  );
}
