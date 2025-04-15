import { Metadata } from "next";

import History from "@/components/history";
import Head from "@/components/head";
import IntroSoftSkills from "@/components/IntroSoftSkills";

import Education from "@/components/education";
import Languages from "@/components/languages";
import SoftSkills from "@/components/skills/SoftSkills";

export const metadata: Metadata = {
  title: 'CV - Bogdan-Mihaita Oprea - simple',
};

export default function Page() {
  return (
    <>
      <Head />
      <IntroSoftSkills />
      <History jobDetails="simple" />
      <Languages />
      <Education />
      <SoftSkills />
    </>
  );
}
