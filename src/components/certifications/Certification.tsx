import { LicenseCertification } from "@/types/certification";
import { getYearAndMonthName } from "@/utils/date";

type Props = {
  certification: LicenseCertification;
};

const Certification = ({ certification }: Props) => {
  return (
    <>
      <div className="font-semibold">{certification.title}</div>
      <div>
        <span>{certification.institution}</span>{" "}
        - <span>{getYearAndMonthName(certification.issued)}</span>
      </div>
    </>
  );
};

export default Certification