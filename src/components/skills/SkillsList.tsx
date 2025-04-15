import { classNames } from "@/utils/className";

type Props = {
  label?: string;
  skills: string[];
};

const SkillsList = ({ label, skills }: Props) => {
  return (
    <ul className="inline-block tracking-wide">
      {label && (
        <li className="font-semibold inline-block pr-2" key={'default'}>{label}: </li>
      )}
      {skills.map((skill, index) => (
        <>
          {index ? (
            <li className="inline-block px-2" key={`${index}_b`}>
              <i className={classNames(
                'w-1 h-1 rounded-lg',
                'inline-block',
                'bg-gray-600',
                'align-middle'
              )}></i>
            </li>
          ) : null}
          <li className="inline-block" key={index}>
            {skill}
          </li>
        </>
      ))}
    </ul>
  );
};

export default SkillsList;