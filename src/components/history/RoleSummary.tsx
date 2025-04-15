import { WorkSummary } from "@/types/experience";
import SkillsList from "../skills/SkillsList";

type Props = {
  skillsUsed: string[];
  summary: WorkSummary;
};

const RoleSummary = ({ skillsUsed, summary }: Props) => {
  return (
    <>
      <ul className="space-y-1">
        {summary.map((section, index) =>
          typeof section === 'string'
            ? <li key={index}>{section}</li>
            : <ul key={`${index}_ul`} className="list-disc list-inside ml-1">
              {section.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
        )}
      </ul>
      <SkillsList label="Skills used" skills={skillsUsed} />
    </>
  );
};

export default RoleSummary;