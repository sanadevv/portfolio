import React from "react";
import projectsData from "../assets/data/projectsData";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
