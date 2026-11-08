import type { XschoolFaq } from "../services/xschool";

type QuestionsProps = {
    title: string;
    faqs: XschoolFaq[];
};

export function Questions({ title, faqs }: QuestionsProps) {

    return (
        <section className=" px-5 py-8 md:px-10 md:py-12 lg:px-16">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="mb-12 max-w-[600px] text-[2.5rem] font-medium uppercase leading-[0.95] tracking-[-0.06em] text-[#17171b] md:mb-14 md:text-[4rem]">
                    {title}
                </h2>

                <div className="border-t border-[#17171b]/20">
                    {faqs.map((faq, index) => (
                        <details
                            key={`${faq.question}-${index}`}
                            className="group border-b border-[#17171b]/20"
                            open={index === 0}
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-sm text-[#17171b] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17171b] md:py-5 md:text-base [&::-webkit-details-marker]:hidden">
                                <span>{faq.question}</span>
                                <span
                                    aria-hidden="true"
                                    className="relative block size-4 shrink-0 text-[#17171b]/70"
                                >
                                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                                    <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform group-open:scale-y-0" />
                                </span>
                            </summary>
                            <div
                                className="max-w-[900px] pb-8 pr-8 text-sm leading-[1.65] text-[#17171b]/55 md:pb-9 md:text-base [&_p]:mb-4 [&_p:last-child]:mb-0"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}