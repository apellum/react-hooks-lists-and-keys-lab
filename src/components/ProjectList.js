import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> {projects.map(project => <ProjectItem key={project.id} technologies={prop.technologies} name={props.name} about={props.about} /> )}
      </div>
    </div>
  );
}

export default ProjectList;
