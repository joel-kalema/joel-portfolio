import { projects } from "@/utils/projects";
import Image from "next/image";

const ProjectDetails = ({ params }) => {
  const { title } = params; // Capture the dynamic title from the route
  const project = projects.find(
    (p) => p.title.split(" ").join("_") === title
  );

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-5">{project.description}</p>
      <div className="mt-10">
        <Image
          src={project.image}
          width={800}
          height={500}
          alt={project.title}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;