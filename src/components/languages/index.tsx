import { languageLevels, spokenLanguages } from "@/constants/language";

import Section from "../ui/section";
import { classNames } from "@/utils/className";

const Languages = () => {
  return (
    <Section title="Languages">
      <ul className="space-y-6">
        {spokenLanguages.map(language => (
          <li key={language.name}>
            <div className="flex gap-3 items-baseline">
              <span className="text-base text-black">{language.name}</span>
              <span className="">({languageLevels[language.level - 1]})</span>
            </div>
            <div className="flex gap-1">
              {Array.from(Array(languageLevels.length), (_, i) => (
                <i className={classNames(
                  'w-8 h-2 rounded-lg',
                  'inline-block',
                  i < language.level ? 'bg-cyan-700' : 'bg-cyan-400'
                )}
                key={i}></i>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Languages;