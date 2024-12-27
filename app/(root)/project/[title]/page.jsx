import { projects } from "@/utils/projects";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = ({ params }) => {
  const { title } = params; // Capture the dynamic title from the route
  const project = projects.find(
    (p) => p.title.split(" ").join("_") === title
  );

  if (!project) {
    return <h1 className="text-center text-3xl mt-20">Project Not Found</h1>;
  }

  return (
    <div className="px-20 py-40 overflow-hidden">
      {/* Project Title */}
      <h1 className="text-6xl text-center font-bold">{project.title}</h1>

      {/* Project Overview */}
      <p className="mt-10 text-xl">{project.overview}</p>

      {/* Project Image */}
      <div className="mt-10 w-5/6 mx-auto relative z-20">
        <Image
          src={project.image}
          width={1200}
          height={700}
          alt={project.title}
          className="mx-auto rounded-lg"
        />
      </div>
      <div className="w-[50rem] absolute top-52 -ml-40 top h-[50rem] opacity-10 transition duration-500 z-10 bg-[#FFFFE3] blur-3xl rounded-full"></div>

      {/* Project Details Section */}
      <div className="mt-28 w-5/6 mx-auto">
        <div className="mb-16">
          {/* Features */}
          <h2 className="font-semibold text-2xl mb-5">Features</h2>
          <ul className="list-disc pl-10">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-3 text-lg">{feature}</li>
            ))}
          </ul>
        </div>

        {/* Contributions and Impact */}
        <div className="flex flex-col gap-16">
          <div>
            <h2 className="font-semibold text-2xl mb-5">My Contributions</h2>
            <ul className="list-disc pl-10">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="mb-3 text-lg">{contribution}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl mb-5">User Impact</h2>
            <p className="text-lg">{project.userImpact}</p>
          </div>
        </div>

        {/* Outcome */}
        <div className="mt-10">
          <h2 className="font-semibold text-2xl mb-5">Outcome</h2>
          <p className="text-lg">{project.outcome}</p>
        </div>

        {/* Live Link */}
        <div className="mt-16 flex items-center justify-center">
          <Link
            href={project.live}
            target="_blank"
            className="text-[#10100e] bg-[#FFFFE3] text-5xl w-[10rem] h-[10rem] rounded-full flex justify-center items-center shadow-md hover:scale-105 transition-transform duration-300"
          >
            <LuArrowUpRight />
          </Link>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h2 className="font-semibold text-2xl mb-5">Technologies Used</h2>
          <div className="flex flex-wrap items-center gap-5">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="border py-1 px-4 rounded-full bg-gray-100 text-gray-800 text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
