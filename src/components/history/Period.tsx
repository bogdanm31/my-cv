import { classNames } from "@/utils/className";
import { getPeriodData } from "@/utils/date";

type Props = {
  className?: string;
  started: string;
  ended?: string;
  showLongevity?: boolean;
};

const Period = ({
  className,
  started,
  ended,
  showLongevity
}: Props) => {
  const { when, longevity } = getPeriodData(started, ended);

  return (
    <div className={classNames("space-x-2", className)}>
      <span>{when}</span>
      {showLongevity && longevity && (
        <span className="text-gray-600">({ longevity })</span>
      )}
    </div>
  );
};

export default Period;