import { title } from "process";
import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    imageUrl: "/project.jpg",
    title: "Ren Systems",
    date: "Feb 2021",
    link: "/projects/ren-system",
    toolsProject:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate ",
    githubCode: "http://github.com",
    linkWeb: "http://Google.com",
  },
  {
    imageUrl: "/project1.png",
    title: "Cryptonite Dashboard",
    date: "Jan 2022",
    link: "/projects/cryptonite-dashboard",
    toolsProject:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate ",
    githubCode: "http://github.com",
    linkWeb: "http://Google.com",
  },
  {
    imageUrl: "/project2.png",
    title: "Shopping List",
    date: "Mar 2022",
    link: "/projects/shopping-list",
    toolsProject:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate ",
    githubCode: "http://github.com",
    linkWeb: "http://Google.com",
  },
  {
    imageUrl: "/project3.png",
    title: "Referrals",
    date: "Apr 2022",
    link: "/projects/referrals",
    toolsProject:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate ",
    githubCode: "http://github.com",
    linkWeb: "http://Google.com",
  },
];

export default function Project() {
  return (
    <div className="my-20 ">
      <h1 className="text-2xl py-5 mb-5 relative underline-quarter max-w-fit">
        Last list project
      </h1>
      <div className="grid grid-cols sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            imageUrl={project.imageUrl}
            title={project.title}
            date={project.date}
            toolsProject={project.toolsProject}
            githubCode={project.githubCode}
            linkWeb={project.linkWeb}
          />
        ))}
      </div>
    </div>
  );
}
