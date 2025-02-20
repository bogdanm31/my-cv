import { certificationHistory } from "@/constants/certification";

import Certification from "./Certification";
import Section from "../ui/section";

const Certifications = () => {
  return (
    <Section title="Certifications">
      <ul className="space-y-2">
        {certificationHistory.map((certification, index) => (
          <li key={`${certification.title}_${index}`}>
            <Certification certification={certification} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Certifications;