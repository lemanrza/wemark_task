import Image from "next/image";
import { AboutxSchoolSlider } from "./AboutxSchoolSlider";

type AboutXSchoolProps = {
  title: string;
  description: string;
  images: { image: string }[];
};

export function AboutXSchool({ title, description, images }: AboutXSchoolProps) {
  const titleLines = title
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  return (
    <section className="relative flex flex-col overflow-hidden py-10">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
        <div className="relative z-10 flex flex-1 items-end justify-between pb-10">
          <h2 className="text-[2rem] font-bold uppercase tracking-tight lg:text-[5rem] lg:font-extrabold">
            {titleLines.map((line, index) => (
              <span
                key={line}
                className={`block ${index % 2 === 0 ? "text-left" : "text-right"}`}
              >
                {line}
              </span>
            ))}
          </h2>
          <a
            href="#gotoschool"
            className="hidden text-[20px] underline underline-offset-[5px] transition-opacity hover:opacity-70 md:block"
          >
            Go to xSchool
          </a>
        </div>

        <p className=" text-[20px] tracking-tight text-[#111111]/80">
          {description}
        </p>
      </div>

      <div className="w-full px-0">
        <AboutxSchoolSlider images={images} />
      </div>
    </section>
  );
}