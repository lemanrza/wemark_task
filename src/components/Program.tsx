import { XschoolProgram } from "../services/xschool";

type ProgramProps = {
  programs: XschoolProgram[];
};

export function Program({ programs }: ProgramProps) {
  const program = programs[0];

  if (!program) {
    return null;
  }

  return (
    <section className="px-5 py-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-8 text-[2rem] font-black uppercase leading-none tracking-[-0.08em] text-[#111111] md:text-[5rem]">
          {program.title}
        </h2>

<div
  className="max-w-8xl text-[#111111] 
    [&_p]:mb-2 [&_p]:text-[0.95rem] [&_p]:leading-[1.65] [&_p]:text-[#111111]/80 md:[&_p]:text-[1.2rem] 
    [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-[#111111] md:[&_h2]:text-2xl 
    [&_h3]:mb-2 [&_h3]:mt-10 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-tight [&_h3]:text-[#111111] md:[&_h3]:text-xl 
    [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:text-[0.95rem] [&_h4]:font-semibold [&_h4]:text-[#111111] 
    [&_strong]:font-semibold [&_strong]:text-[#111111] 
    [&_ul]:mb-2 [&_ul]:mt-1 [&_ul]:space-y-2 [&_ul]:pl-1 
    [&_li]:relative [&_li]:pl-4 [&_li]:text-[0.92rem] [&_li]:leading-[1.6] [&_li]:text-[#111111]/80 md:[&_li]:text-[1.1rem] 
    [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-[0.6em] [&_li::before]:h-[3px] [&_li::before]:w-[3px] [&_li::before]:rounded-full [&_li::before]:bg-[#111111]/80 [&_li::before]:content-['']"
  dangerouslySetInnerHTML={{ __html: program.description }}
/>
      </div>
    </section>
  );
}