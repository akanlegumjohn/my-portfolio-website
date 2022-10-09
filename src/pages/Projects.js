import { Link } from "react-router-dom";

import projects from "../utils/projects";

//This page will contain some cards showing the various projects that I have
const Projects = () => {
  return (
    <div>
      <h1>My projects</h1>
      <div className="project--article">
        {projects.map((project) => (
          <article key={project.id}>
            <h3>{project.name}</h3>
            <h5>Status: {project.status}</h5>
            <Link to={`/projects/${project.id}`}> For more info</Link>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Projects;
