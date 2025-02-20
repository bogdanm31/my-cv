import { languageLevels, spokenLanguages } from "@/constants/language";

import Section from "../ui/section";
import { classNames } from "@/utils/className";

const Languages = () => {
  return (
    <Section title="Languages">
      <ul className="grid grid-cols-2 gap-6">
        {spokenLanguages.map(language => (
          <li className="flex gap-3 items-baseline" key={language.name}>
            <span className="text-base text-black">{language.name}</span>
            <span className="">{languageLevels[language.level - 1]}</span>
            <span className="inline-flex gap-[2px]">
              {Array.from(Array(languageLevels.length), (_, i) => (
                <i className={classNames(
                  'w-2 h-2 rounded-lg',
                  'inline-block',
                  i < language.level ? 'bg-black' : 'bg-gray-400'
                )}></i>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Languages;