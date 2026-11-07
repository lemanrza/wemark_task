const XSCHOOL_URL = "https://admin.wemark.pro/api/tasks-xschool/";

export type XschoolAboutImage = {
  image: string;
};

export type XschoolFounder = {
  title: string;
  description: string;
  name: string;
  position: string;
  image: string;
  linkedin_url: string;
  instagram_url: string;
};

export type XschoolProgram = {
  title: string;
  description: string;
};

export type XschoolFaq = {
  question: string;
  answer: string;
};

export type XschoolTextSlider = {
  xline1: string;
  xline2: string;
  xline3: string;
};

export type XschoolData = {
  banner_title: string;
  banner_image: string;
  about_title: string;
  about_description: string;
  about_images: XschoolAboutImage[];
  founders: XschoolFounder[];
  programs: XschoolProgram[];
  faq_title: string;
  xschool_faq: XschoolFaq[];
  text_slider: XschoolTextSlider;
};
export async function getXschool(): Promise<XschoolData> {
  const response = await fetch(XSCHOOL_URL);

  if (!response.ok) {
    throw new Error(`Failed to load xSchool data (${response.status})`);
  }

  return response.json();
}
