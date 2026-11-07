import Image from "next/image";
import { AboutxSchoolSlider } from "./AboutxSchoolSlider";

type AboutXSchoolProps = {
    title: string;
    description: string;
    images: { image: string }[];
};

export function AboutXSchool({ title, description, images }: AboutXSchoolProps) {
    const titleLines = title.split(/\r?\n/).map((line) => line.replace(/\s+/g, " ").trim()).filter(Boolean);
    return (
        <section className="relative flex flex-col overflow-hidden">
            <div className="relative z-10 flex flex-1 items-end justify-between px-10 pt-20 pb-10">
                <h2 className="text-[5rem] font-extrabold tracking-tight uppercase">{titleLines.map((line, index) => (
                    <span key={line} className={`block ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                        {line}
                    </span>
                ))}</h2>
                <a href="#gotoschool" className="text-[20px] underline underline-offset-[5px] transition-opacity hover:opacity-70" >
                   Go to xSchool
                </a>    
            </div>
            <p className="text-[20px] font-normal tracking-tight px-10">{description}</p>
            <AboutxSchoolSlider images={images} />
        </section>
    );
}
