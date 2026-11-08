import { Suspense } from "react";
import { Banner } from "@/src/components/Banner";
import { getXschool } from "@/src/services/xschool";
import { AboutXSchool } from "../components/AboutXSchool";
import { Founder } from "../components/Founder";
import { Program } from "../components/Program";
import { Questions } from "../components/Questions";
import { TextSlider } from "../components/TextSlider";
import { Footer } from "../components/Footer";

async function HomeContent() {
  const data = await getXschool();

  return (
    <>
      <main>
        <Banner title={data.banner_title} image={data.banner_image} />
        <AboutXSchool title={data.about_title} description={data.about_description} images={data.about_images} />
        <Founder founders={data.founders} />
        <Program programs={data.programs} />
        <TextSlider textSlider={data.text_slider} />
        <Questions title={data.faq_title} faqs={data.xschool_faq} />
      </main>
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<main className="min-h-svh" />}>
      <HomeContent />
    </Suspense>
  );
}
