import React from "react";
import Image from "next/image";
import type { Project } from "../page";

type ProjectCardPropType = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardPropType) => {
  return (
    <article>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white">
        <Image
          className="w-full border"
          src={project.image}
          width={300}
          height={250}
          alt={`${project.title}'s image`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">
            {project.title}
          </div>
          <p className="text-gray-800 text-sm">{project.content}</p>
        </div>
        <div className="px-6 pt-2 pb-6">
          <a
            href={project.link}
            target="_blank"
            className="block ml-auto w-[100%]"
          >
            <button className="bg-black hover:bg-gray-800 text-white text-sm block py-2 px-4 rounded w-[100%]">
              See more
            </button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
