import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  title: string;
};

const Section = ({ children, className, title }: Props) => {
  return (
    <section className={className}>
      <div className="text-xl font-semibold text-black mb-1 pb-1 border-b">{title}</div>
      {children}
    </section>
  );
};

export default Section;