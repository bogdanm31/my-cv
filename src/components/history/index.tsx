import { workExperiences } from "@/constants/experience";

import Experience from "./Experience";
import Section from "../ui/section";

const History = () => {
  return (
    <Section title="Work experience">
      <ul className="space-y-5">
        {workExperiences.map((exp, index) => (
          <li key={`${exp.company}_${index}`}>
            <Experience experience={exp} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default History;