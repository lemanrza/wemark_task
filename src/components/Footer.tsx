import Image from "next/image";

const sitemapItems = [
  "Case Studies",
  "Services",
  "About",
  "Career",
  "Blog",
  "News",
];

const socialItems = ["Instagram", "LinkedIn", "YouTube"];
const additionalSocialItems = ["Facebook", "Twitter"];

export function Footer() {
  return (
    <footer className="bg-[#141419] px-3 py-10 text-[#e2e2e4] md:px-10 md:py-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-[1fr_1.15fr_1.65fr_1.75fr_auto] md:gap-8">
          <div>
            <h2 className="mb-4 text-lg font-medium">Sitemap</h2>
            <ul className="space-y-1 text-[15px] leading-5 text-white/45">
              {sitemapItems.map((item) => (
                <li key={item} className={item === "News" ? "hidden md:list-item" : undefined}>
                  {item}
                </li>
              ))}
              <li className="md:hidden">Vacancies</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-medium">Follow Us On</h2>
            <ul className="space-y-1 text-[15px] leading-5 text-white/45">
              {socialItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {additionalSocialItems.map((item) => (
                <li key={item} className="md:hidden">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 order-4 md:order-none md:col-span-1">
            <h2 className="mb-4 text-lg font-medium">Office</h2>
            <p className="max-w-[260px] text-[15px] leading-6 text-white/45">
              Alibeyov Gardashlari 27,
              <br />
              Sabail, Sabah Residence
            </p>
          </div>

          <div className="col-span-2 order-3 md:order-none md:col-span-1">
            <h2 className="mb-4 text-lg font-medium">For Partnerships</h2>
            <p className="text-[15px] leading-6 text-white/45">
              partnership@wemark.az
              <br />
              +994 51 555 55 55
            </p>
          </div>

          <div className="hidden justify-end md:flex">
            <Image
              src="/vector.svg"
              alt=""
              width={61}
              height={79}
              aria-hidden="true"
              className="mt-1 h-[52px] w-auto opacity-45"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-7">
        <div className="mb-4 flex items-center gap-3 text-[10px] uppercase text-white/40 md:hidden">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-4"
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M3.5 12h17M12 3c2.3 2.4 3.4 5.4 3.4 9s-1.1 6.6-3.4 9c-2.3-2.4-3.4-5.4-3.4-9S9.7 5.4 12 3Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span>Azərbaycan</span>
          <span className="h-3 border-l border-white/20" />
          <span>English</span>
        </div>

        <div className="border-t border-white/20 pt-6 md:pt-4">
        <div
          aria-label="Wemark"
          className="select-none overflow-hidden text-center text-[17vw] font-bold leading-[0.8] tracking-[-0.075em] text-white/[0.09] md:text-[13vw]"
        >
          wemark
        </div>

        <div className="mt-6 flex flex-row items-center justify-between gap-2 text-[9px] uppercase text-white/40 md:mt-12 md:text-[10px]">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Copyright © 2024 Wemark</span>
            <span className="hidden md:inline">Terms &amp; Privacy</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="size-4"
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M3.5 12h17M12 3c2.3 2.4 3.4 5.4 3.4 9s-1.1 6.6-3.4 9c-2.3-2.4-3.4-5.4-3.4-9S9.7 5.4 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span>Azərbaycan Dili</span>
            </div>
            <div className="flex items-center gap-1 md:hidden">
              <span>Back to top</span>
              <Image
                src="/vector.svg"
                alt=""
                width={12}
                height={16}
                aria-hidden="true"
                className="h-3 w-auto opacity-45"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
