import { languageLevels, spokenLanguages } from "@/constants/language";

import Section from "../ui/section";

const Languages = () => {
  return (
    <Section title="Languages">
      <ul className="divide-y">
        {spokenLanguages.map(language => (
          <li className="py-2" key={language.name}>
            <div className="font-semibold">{language.name}</div>
            <div className="text-gray-600">{languageLevels[language.level]}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Languages;