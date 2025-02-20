import { WorkSummary } from "@/types/experience";

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
            : <ul key={index} className="list-disc list-inside ml-1">
              {section.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
        )}
      </ul>
      {/* <div className="pt-2"><span>Skills used:</span> {skillsUsed.join(', ')}</div> */}
    </>
  );
};

export default RoleSummary;