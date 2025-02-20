import { Metadata } from "next";

import History from "@/components/history";
import Head from "@/components/head";
import Intro from "@/components/Intro";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Languages from "@/components/languages";
import Skills from "@/components/skills";

export const metadata: Metadata = {
  title: 'CV - Bogdan-Mihaita Oprea',
};

export default function Page() {
  return (
    <>
      <Head />
      <Intro />
      <History />
      <Languages />
      <Education />
      {/* <Certifications /> */}
      <Skills />
    </>
  );
}
