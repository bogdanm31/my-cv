import { softSkills } from "@/constants/skill";

import Section from "../ui/section";
import SkillsList from "./SkillsList";

const SoftSkills = () => {
  return (
    <Section title="Skills">
      <SkillsList skills={softSkills} />
    </Section>
  );
};

export default SoftSkills;