"use client";

import { workExperiences } from "@/constants/experience";
import { JobDetails } from "@/types/experience";

import { RoleContextProvider } from "@/context/RoleContext";

import Experience from "./Experience";
import Section from "../ui/section";

type Props = {
  jobDetails: JobDetails;
};

const History = ({ jobDetails }: Props) => {
  return (
    <Section title="Work experience">
      <RoleContextProvider jobDetails={jobDetails}>
        <ul className="space-y-6">
          {workExperiences.map((exp, index) => (
            <li key={`${exp.company}_${index}`}>
              <Experience experience={exp} />
            </li>
          ))}
        </ul>
      </RoleContextProvider>
    </Section>
  );
};

export default History;