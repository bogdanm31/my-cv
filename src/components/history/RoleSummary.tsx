import { WorkSummary } from "@/types/experience";

type Props = {
  skillsUsed: string[];
  summary: WorkSummary;
};

const RoleSummary = ({ skillsUsed, summary }: Props) => {
  return (
    <div className="space-y-1 text-sm">
      {summary.map((section) => 
        typeof section === 'string'
          ? <div key={section}>{section}</div>
          : <ul className="space-y-1">
            {section.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
      )}
      <div className="pt-3"><span className="font-semibold">Skills used:</span> {skillsUsed.join(', ')}</div>
    </div>
  );
};

export default RoleSummary;