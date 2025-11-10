import ProjectCard from "./ProjectCard";
import Divider from "./Divider";
import { projects } from "../data/content";

function Projects() {
  return (
    <section id="works" className="max-w-[850px] mx-auto p-5">
      <p className="text-[22px] m-0 text-[#21243d]">Projects</p>

      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard {...project} />
          {index < projects.length - 1 && <Divider />}
        </div>
      ))}

      <Divider />
    </section>
  );
}

export default Projects;
