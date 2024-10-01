import { ReactNode } from "react";

type Props = {
  icon: string;
  text: string | ReactNode;
  type?: string;
};

const Info = ({ icon, text, type }: Props) => {
  return (
    <div className="grid gap-2 grid-cols-[24px_auto] items-center">
      <i className={`fa${type ? '-' + type : ''} fa-${icon} text-lg`}></i> {text}
    </div>
  );
};

export default Info;