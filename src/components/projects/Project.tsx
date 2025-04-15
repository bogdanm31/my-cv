import { RoleExperience } from "@/types/experience";

import Period from "../history/Period";
import RoleSummary from "../history/RoleSummary";

type Props = {
  project: RoleExperience;
};
  
const Project = ({ project }: Props) => {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto]">
        <div className="text-black text-base font-semibold">{project.name}</div>
        <Period {...project.period} />
      </div>
      {project.summary.map((section, index) => <p key={index}>{section}</p>)}
    </>
  );
};
  
export default Project;