import { PHONE, WHATSAPP } from "../lib/site";

const social = [
  ["Instagram", "https://instagram.com/eiadat_sihati"],
  ["Snapchat", "https://snapchat.com/add/eiadat_sihati"],
  ["TikTok", "https://tiktok.com/@eiadat_sihati"],
];

export default function Footer() {
  return (
    <footer className="bg-navy px-6 pb-8 pt-20 text-ice md:px-10">
      <div className="mx-auto max-w-7xl">
        <p aria-hidden className="font-display text-[clamp(4rem,16vw,14rem)] font-semibold leading-none">صحتي وبشرتي.</p>
        <div className="mt-16 grid gap-10 border-t border-ice/20 pt-10 text-sm md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xs tracking-widest text-ice/60">الهاتف وواتساب</h3>
            <a href={WHATSAPP} dir="ltr" className="block text-2xl" target="_blank" rel="noopener">{PHONE}</a>
          </div>
          <div>
            <h3 className="mb-4 text-xs tracking-widest text-ice/60">@eiadat_sihati</h3>
            <ul className="space-y-2">
              {social.map(([n, h]) => <li key={n}><a href={h} target="_blank" rel="noopener" className="hover:underline">{n}</a></li>)}
            </ul>
          </div>
          <nav aria-label="روابط التذييل">
            <h3 className="mb-4 text-xs tracking-widest text-ice/60">روابط</h3>
            <ul className="space-y-2">
              <li><a href="#treatments" className="hover:underline">خدماتنا</a></li>
              <li><a href="#location" className="hover:underline">موقعنا</a></li>
              <li><a href="#" className="hover:underline">سياسة الخصوصية</a></li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-xs text-ice/50">© 2026 عيادات صحتي وبشرتي. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
