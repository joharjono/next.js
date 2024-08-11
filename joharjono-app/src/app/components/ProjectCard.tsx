import React, { Fragment } from "react";
import Image from "next/image";
import { RiGithubLine } from "react-icons/ri";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  date: string;
  toolsProject: string;
  githubCode: string;
  linkWeb: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  date,
  toolsProject,
  githubCode,
  linkWeb,
}) => {
  return (
    <div className="max-w-sm mx-auto rounded-sm relative border border-slate-100 dark:border-none">
      <div className="relative w-full h-52 mb-4 overflow-hidden rounded-t-sm">
        <Image
          src={imageUrl}
          fill
          alt="project image"
          className="transition-transform duration-700 ease-in-out transform hover:scale-105 object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="py-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-2">{date}</p>
        <p className="mt-2 mb-4">{toolsProject}</p>
        <div className="flex justify-between items-center absolute top-[40%] w-full left-0 right-0 px-4">
          <a
            href={githubCode}
            target="_blank"
            className="cursor-pointer backdrop-blur-sm bg-white/30 px-5 py-1 rounded-xl"
            rel="noopener noreferrer"
          >
            <RiGithubLine className="text-2xl" />
          </a>
          <a
            href={linkWeb}
            target="_blank"
            className="cursor-pointer backdrop-blur-sm bg-green-900/30 px-5 py-1 rounded-xl relative"
            rel="noopener noreferrer"
          >
            <span className="liveWebsite">Live</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
