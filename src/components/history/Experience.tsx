import { WorkExperience } from "@/types/experience";
import { useRoleContext } from "@/context/RoleContext";

import Period from "./Period";
import RoleSummary from "./RoleSummary";

type Props = {
  experience: WorkExperience
};

const Experience = ({ experience }: Props) => {
  const { jobDetails } = useRoleContext();

  return (
    <div className="break-inside-avoid">
      <div className="text-base mb-[2px]">{experience.company}</div>
      <ul>
        {experience.roles.map(role =>
          <li className="space-y-[2px]" key={role.period.started}>
            <div className="grid grid-cols-[1fr_auto]">
              <div className="text-black font-semibold">{role.name}</div>
              <Period {...role.period} />
            </div>
            {jobDetails === 'extended' ? <RoleSummary summary={role.summary} skillsUsed={role.skillsUsed} /> : null}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Experience;