import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  title: string;
};

const Section = ({ children, className, title }: Props) => {
  return (
    <section className={className}>
      <div className="text-2xl font-semibold mb-2">{title}</div>
      {children}
    </section>
  );
};

export default Section;