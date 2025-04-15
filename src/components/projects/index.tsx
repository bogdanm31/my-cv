import { projects } from "@/constants/project";

import Section from "../ui/section";
import Project from "./Project";

const Projects = () => {
  return (
    <Section title="Projects">
      <ul className="space-y-3">
        {projects.map((project, index) => (
          <li key={`${project.name}_${index}`}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;