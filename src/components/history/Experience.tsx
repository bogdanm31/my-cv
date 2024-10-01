import { WorkExperience } from "@/types/experience";

import Period from "./Period";
import RoleSummary from "./RoleSummary";

type Props = {
  experience: WorkExperience
};

const Experience = ({ experience }: Props) => {
  return (
    <div className="space-y-1">
      <div className="text-lg font-semibold">{experience.company}</div>
      <ul>
      {experience.roles.map(role =>
        <li className="space-y-1" key={role.period.started}>
          <div className="font-semibold">{role.name}</div>
          <Period {...role.period} showLongevity={true} />
          <RoleSummary summary={role.summary} skillsUsed={role.skillsUsed} />
        </li>
      )}
      </ul>
    </div>
  );
};

export default Experience;