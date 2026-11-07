import type { XschoolTextSlider } from '@/src/services/xschool';

type TextSliderProps = {
  textSlider: XschoolTextSlider;
};

export const TextSlider = ({ textSlider }: TextSliderProps) => {
  const lines = [textSlider.xline1, textSlider.xline2, textSlider.xline3];

  return (
    <div className="w-full overflow-hidden border-y border-neutral-300 py-4 mb-4">
      <div className="flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap pr-10">
          {lines.concat(lines, lines, lines).map((text, index) => (
            <div key={`row1-a-${index}`} className="flex items-center gap-10 text-xl font-bold uppercase tracking-tight text-[#111111] md:text-2xl">
              <span>{text}</span>
              <span className="font-normal text-red-500">*</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap pr-10" aria-hidden="true">
          {lines.concat(lines, lines, lines).map((text, index) => (
            <div key={`row1-b-${index}`} className="flex items-center gap-10 text-xl font-bold uppercase tracking-tight text-[#111111] md:text-2xl">
              <span>{text}</span>
              <span className="font-normal text-red-500">*</span>
            </div>
          ))}
        </div>
      </div>

      <div className="my-3 border-t border-neutral-300" />

      <div className="flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-marquee-reverse items-center gap-10 whitespace-nowrap pr-10">
          {lines.concat(lines, lines, lines).map((text, index) => (
            <div key={`row2-a-${index}`} className="flex items-center gap-10 text-xl font-bold uppercase tracking-tight text-[#111111] md:text-2xl">
              <span>{text}</span>
              <span className="font-normal text-red-500">*</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee-reverse items-center gap-10 whitespace-nowrap pr-10" aria-hidden="true">
          {lines.concat(lines, lines, lines).map((text, index) => (
            <div key={`row2-b-${index}`} className="flex items-center gap-10 text-xl font-bold uppercase tracking-tight text-[#111111] md:text-2xl">
              <span>{text}</span>
              <span className="font-normal text-red-500">*</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};