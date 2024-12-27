import { projects } from "@/utils/projects";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = ({ params }) => {
  const { title } = params;
  const project = projects.find(
    (p) => p.title.split(" ").join("_") === title
  );

  if (!project) {
    return <h1 className="text-center text-3xl mt-20">Project Not Found</h1>;
  }

  return (
    <div className="px-4 py-40 overflow-hidden">
      <div className="flex justify-between gap-10 w-5/6 mx-auto">
        <h1 className="text-6xl font-bold w-1/2">{project.title}</h1>
        <p className="text-xl w-1/2">{project.overview}</p>
      </div>
      <div className="mt-16 w-5/6 mx-auto relative z-20">
        <Image src={project.image} width={1200} height={700} alt={project.title} className="mx-auto rounded-lg mb-10" />
        <div class="slider" reverse="true" style={{
          "--width": "400px",
          "--height": "200px",
          "--quantity": 4,
        }}>
          <div className="list">
            {project.images.map((image, index) => (
              <div className="item" style={{ "--position": index }}><Image src={image} width={700} height={400} alt="image" className="mx-auto rounded-lg" /></div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[50rem] absolute top-52 -ml-40 top h-[50rem] opacity-10 transition duration-500 z-10 bg-[#FFFFE3] blur-3xl rounded-full"></div>

      <div className="mt-28 w-5/6 mx-auto">

        <div className=" flex mb-10 gap-10">
          <div className="w-1/2 p-10 bg-[#ffffe310]">
            <h2 className="font-semibold text-2xl mb-5">Features</h2>
            <ul className="list-disc pl-6">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-3 text-md">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="w-1/2 p-10 bg-[#ffffe310]">
            <h2 className="font-semibold text-2xl mb-5">My Contributions</h2>
            <ul className="list-disc pl-6">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="mb-3 text-md">{contribution}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex mb-16 gap-10">
          <div className="w-1/2 p-10 bg-[#ffffe310]">
            <h2 className="font-semibold text-2xl mb-5">User Impact</h2>
            <p className="text-md">{project.userImpact}</p>
          </div>

          <div className="w-1/2 p-10 bg-[#ffffe310]">
            <h2 className="font-semibold text-2xl mb-5">Outcome</h2>
            <p className="text-md">{project.outcome}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="mt-16">
            <h2 className="font-semibold text-2xl mb-5">Technologies Used</h2>
            <div className="flex flex-wrap items-center gap-5">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="py-1 px-4 bg-[#ffffe372] text-[#10100e] text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center">
            <Link
              href={project.live}
              target="_blank"
              className="text-[#10100e] bg-[#FFFFE3] text-7xl w-[10rem] h-[10rem] rounded-full flex justify-center items-center shadow-md hover:scale-10 hover:rotate-45 transition-transform duration-300"
            >
              <LuArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
