import { useParams, Link } from "react-router-dom";

import projects from "../../utils/projects";

const Project = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);
  // This page would contain the detailed information of each project
  return (
    <div>
      <h1>Here is the details of the {project.name}</h1>
      <p>
        <Link to="/projects"> Back to projects</Link>
      </p>
    </div>
  );
};

export default Project;
