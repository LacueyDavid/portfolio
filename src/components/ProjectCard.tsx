import type { Project } from "../types";
import Oeil from "./icons/Oeil";

function ProjectCard({
  title,
  year,
  type,
  description,
  imageUrl,
  githubUrl,
}: Project) {
  return (
    <div className="flex gap-5 py-5 items-center flex-col md:flex-row">
      <a
        href={githubUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block flex-shrink-0 overflow-hidden rounded relative group"
        aria-label={`Open ${title} on GitHub`}
      >
        <div
          className="w-[246px] h-[180px] rounded transform transition-transform duration-300 ease-out group-hover:scale-105 group-hover:grayscale bg-top-left bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-white/70 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-200 pointer-events-none">
          <Oeil className="w-8 h-8 text-gray-800" title={`Voir ${title}`} />
        </div>
      </a>

      <div className="flex flex-col gap-6 pl-0 md:pl-5">
        <p className="font-bold text-[30px] m-0 text-gray-900 dark:text-gray-100">
          {title}
        </p>
        <div className="flex items-center gap-3">
          <p className="bg-[#142850] text-white px-3 py-0 rounded-2xl font-bold text-lg m-0">
            {year}
          </p>
          <p className="text-[#8695a4] dark:text-gray-400 text-xl m-0">
            {type}
          </p>
        </div>
        <p className="text-base leading-6 m-0 text-gray-800 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
