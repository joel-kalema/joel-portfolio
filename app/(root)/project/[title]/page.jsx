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
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="px-20 py-40 overflow-hidden">
      <h1 className="text-6xl text-center font-bold">{project.title}</h1>
      <p className="mt-5">{project.description}</p>
      <div className="mt-10 mx-auto relative z-20">
        <Image
          src={project.image}
          width={1200}
          height={700}
          alt={project.title}
          className="mx-auto"
        />
      </div>
      <div className="w-[50rem] absolute top-52 -ml-40 top h-[50rem] opacity-10 transition duration-500 z-10 bg-[#FFFFE3] blur-3xl rounded-full"></div>
      <div className="mt-28 text-center text-xl w-5/6 mx-auto">
        <p>{project.details}</p>
        <h2 className="mt-16 font-semibold">Technologies Used</h2>
        <div className="flex justify-center items-center gap-5 my-10">
            {project.technologies.map((item) => (
                <div className="border py-1 px-4">{item}</div>
            ))}
        </div>

        <Link href={project.live} target="_blank" className="text-[#10100e] mx-auto cursor-pointer bg-[#FFFFE3] text-9xl w-[10rem] h-[10rem] rounded-full flex justify-center items-center"><LuArrowUpRight /></Link>
      </div>
    </div>
  );
};

export default ProjectDetails;