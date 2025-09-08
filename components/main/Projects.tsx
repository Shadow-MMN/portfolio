import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ProjectsData } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-20"
      id="projects"
    >
      <h1 className="text-[40px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {ProjectsData.map(
          ({ project_title, image, href, description }, index) => (
            <ProjectCard
              key={index}
              title={project_title}
              src={image}
              href={href}
              description={description}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
