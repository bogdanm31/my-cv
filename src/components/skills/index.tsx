import { skills } from "@/constants/skill";

import Section from "../ui/section";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="tracking-wide">{skills.join(', ')}</div>
    </Section>
  );
};

export default Skills;