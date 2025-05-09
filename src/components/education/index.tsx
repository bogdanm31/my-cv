import { educationHistory } from "@/constants/education";
import School from "./School";
import Section from "../ui/section";

const Education = () => {
  return (
    <Section className="break-inside-avoid" title="Education">
      <ul className="space-y-3">
        {educationHistory.map((education, index) => (
          <li key={`${education.diploma}_${index}`}>
            <School education={education} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Education;