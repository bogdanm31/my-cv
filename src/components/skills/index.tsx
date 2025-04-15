import { techSkills, softSkills } from "@/constants/skill";

import Section from "../ui/section";
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <Section title="Skills">
      <SkillsList skills={[ ...techSkills, ...softSkills ]} />
    </Section>
  );
};

export default Skills;