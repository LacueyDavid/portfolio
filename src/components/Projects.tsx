import ProjectCard from "./ProjectCard";
import Divider from "./Divider";
import { projects } from "../data/content";

function Projects() {
  return (
    <section id="works" className="max-w-[850px] mx-auto p-5 ">
      <div
        role="list"
        aria-label="Liste des projets"
        tabIndex={0}
        className="m-4 pr-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      >
        {projects.map((project, index) => (
          <div key={index} role="listitem">
            <ProjectCard {...project} />
            {index < projects.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
