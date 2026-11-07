import Image from "next/image";
import { XschoolFounder } from "../services/xschool";

type FounderProps = {
  founders: XschoolFounder[];
};

export function Founder({ founders }: FounderProps) {
  const founder = founders[0];

  return (
    <section className="px-6 py-10 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-[2rem] lg:text-[5rem] font-extrabold uppercase tracking-tight text-[#111111]">
          FOUNDER
        </h2>

        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">

          <div className="relative mx-auto w-full max-w-[480px] md:mx-0">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover grayscale"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#111111] shadow-sm backdrop-blur-md">
              <span>{founder.name}</span>
              <span className="mx-1 text-[#111111]/60">-</span>
              <span className="font-normal text-[#111111]/80">
                {founder.position}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center pt-2">
            <h3 className="mb-6 max-w-sm text-xl font-bold uppercase leading-snug tracking-tight text-[#111111] md:text-2xl lg:text-3xl">
              {founder.title}
            </h3>

            <p className="text-base leading-relaxed text-[#111111]/80 md:text-lg lg:text-xl">
              {founder.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}