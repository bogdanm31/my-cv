import { Education } from "@/types/education";
import Period from "../history/Period";

type Props = {
  education: Education;
};

const School = ({ education }: Props) => {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto]">
        <div className="text-black text-base">{education.institution}</div>
        <div>{education.location}</div>
      </div>
      <div className="grid grid-cols-[1fr_auto]">
        <div>{education.diploma}, {education.profile}</div>
        <Period {...education.period} />
      </div>
    </>
  );
};

export default School;