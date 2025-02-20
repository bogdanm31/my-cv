import { skills } from "@/constants/skill";

import Section from "../ui/section";
import { classNames } from "@/utils/className";

const Skills = () => {
  return (
    <Section title="Skills">
      <ul className="tracking-wide flex flex-wrap items-center gap-2">
        {skills.map((skill, index) => (
          <>
            {index ? (
              <li key={`${index}_b`}>
                <i className={classNames(
                  'w-1 h-1 rounded-lg',
                  'inline-block',
                  'bg-gray-600',
                  'align-middle'
                )}></i>
              </li>
            ) : null}
            <li key={index}>
              {skill}
            </li>
          </>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;