const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Career", href: "#career" },
  { label: "Blog", href: "#blog" },
  { label: "xSchool", href: "#xschool" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <nav className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 lg:px-14 lg:py-7">
        <a href="/" className="text-[1.5rem] font-medium tracking-[-0.05em]">
          wemark
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[16px] md:flex lg:gap-9">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#lets-talk" className="hidden text-[15px] underline underline-offset-[5px] transition-opacity hover:opacity-70 md:block" >
          Let's Talk
        </a>

        <a href="#menu" className="text-[15px] transition-opacity hover:opacity-70 md:hidden" >
          Menu
        </a>
      </nav>
    </header>
  );
}
