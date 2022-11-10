import { Link } from "react-router-dom";

import projects from "../../utils/projects";
const ProjectCard = () => {
  return (
    <div className="project--article">
      {projects.map((project) => (
        <article key={project.id}>
          <h3>{project.name}</h3>
          <h5>Status: {project.status}</h5>
          <Link to={`/projects/${project.id}`}> For more info</Link>
        </article>
      ))}
    </div>
  );
};
export default ProjectCard;
