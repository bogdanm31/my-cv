import Section from "../ui/section";
import Info from "./Info";

const Head = () => {
  return (
    <Section
      className="grid gap-2"
      title="Bogdan-Mihaita Oprea"
    >
      <div className="text-black">
        <Info icon="location-dot" text="Popesti-Leordeni, Ilfov, Romania" />
        <Info icon="phone" text="+40763313284" />
        <Info icon="envelope" text="bogdanmihaita.oprea@gmail.com" />
        <Info icon="linkedin-in" text={(
          <a href="https://ro.linkedin.com/in/bogdan-mihaita-oprea-91b981142">
            https://ro.linkedin.com/in/bogdan-mihaita-oprea-91b981142
          </a>
        )} type="brands" />
      </div>
    </Section>
  );
};

export default Head;