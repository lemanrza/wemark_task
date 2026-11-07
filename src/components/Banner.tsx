import Image from "next/image";
import { Header } from "@/src/components/Header";

type BannerProps = {
  title: string;
  image: string;
};

export function Banner({ title, image }: BannerProps) {
  const lines = title.split(/\r?\n/).map((line) => line.replace(/\s+/g, " ").trim()).filter(Boolean);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-900">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <Header />
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-28">
        <h1 className="w-full max-w-6xl text-[clamp(2.75rem,7.4vw,6.75rem)] leading-[0.98] font-normal tracking-tight text-white uppercase">
          {lines.map((line, index) => {
            const alignments = ["text-left", "text-center", "text-right"];
            const alignClass = alignments[index % 3];

            return (
              <span key={line} className={`block ${alignClass}`}>
                {line}
              </span>
            );
          })}
        </h1>
      </div>
    </section>
  );
}
