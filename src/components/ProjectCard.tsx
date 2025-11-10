import type { Project } from "../types";

function ProjectCard({ title, year, type, description, imageUrl }: Project) {
  return (
    <div className="flex gap-5 py-5 items-start flex-col md:flex-row">
      <div
        className="w-[246px] h-[180px] rounded bg-top-left bg-no-repeat bg-cover flex-shrink-0"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="flex flex-col gap-6 pl-0 md:pl-5">
        <p className="font-bold text-[30px] m-0">{title}</p>
        <div className="flex items-center gap-3">
          <p className="bg-[#142850] text-white px-3 py-0 rounded-2xl font-bold text-lg m-0">
            {year}
          </p>
          <p className="text-[#8695a4] text-xl m-0">{type}</p>
        </div>
        <p className="text-base leading-6 m-0">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
