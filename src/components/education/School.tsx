import { Education } from "@/types/education";
import Period from "../history/Period";

type Props = {
  education: Education;
};

const School = ({ education }: Props) => {
  return (
    <>
      <div className="font-semibold">{education.institution}</div>
      <div>{education.diploma}, {education.profile}</div>
      <Period className="text-sm" {...education.period} />
    </>
  );
};

export default School;