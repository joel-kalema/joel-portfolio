import { projects } from "@/utils/projects";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";

const ProjectDetails = ({ params }) => {
  const { title } = params;
  const project = projects.find(
    (p) => p.title.split(" ").join("_") === title
  );

  if (!project) {
    return <h1 className="text-center text-3xl mt-20">Project Not Found</h1>;
  }

  return (
    <div className="px-6 py-10 lg:py-40 overflow-hidden">
      <Link href='/#portfolio' className="flex items-center gap-3">
        <IoReturnUpBack /> Back
      </Link>
      <div className="lg:flex justify-between mt-10 gap-10 lg:w-5/6 mx-auto">
        <h1 className="text-3xl mb-4 lg:text-6xl font-bold lg:w-1/2">{project.title}</h1>
        <p className="text-sm lg:text-xl lg:w-1/2">{project.overview}</p>
      </div>
      <div className="mt-16 lg:w-5/6 mx-auto relative z-20">
        <Image src={project.image} width={1200} height={700} alt={project.title} className="mx-auto rounded-lg mb-10" />
        <div class="slider" reverse="true" style={{
          "--width": "300px",
          "--height": "150px",
          "--quantity": 4,
        }}>
          <div className="list">
            {project.images.map((image, index) => (
              <div key={index} className="item" style={{ "--position": index }}><Image src={image} width={700} height={400} quality={10} alt="image" className="mx-auto rounded-lg" /></div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[10rem] h-[10rem] lg:w-[50rem] absolute top-52 -ml-40 top lg:h-[50rem] opacity-10 transition duration-500 z-10 bg-[#FFFFE3] blur-3xl rounded-full"></div>

      <div className="mt-10 lg:mt-28 lg:w-5/6 mx-auto">

        <div className="lg:flex mb-10 gap-10">
          <div className="lg:w-1/2 p-10 bg-[#ffffe310] mb-4 lg:mb-0">
            <h2 className="font-semibold text-2xl mb-5">Features</h2>
            <ul className="list-disc pl-6">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-3 text-md">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 p-10 bg-[#ffffe310]">
            <h2 className="font-semibold text-2xl mb-5">My Contributions</h2>
            <ul className="list-disc pl-6">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="mb-3 text-md">{contribution}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:flex mb-16 gap-10">
          <div className="lg:w-1/2 p-10 bg-[#ffffe310] mb-4 lg:mb-0">
            <h2 className="font-semibold text-2xl mb-5">User Impact</h2>
            <p className="text-md">{project.userImpact}</p>
          </div>

          <div className="lg:w-1/2 bg-[#ffffe300] mt-10 lg:mt-0">
            <h2 className="font-semibold text-2xl mb-5">Outcome</h2>
            <p className="text-md">{project.outcome}</p>
          </div>
        </div>

        <div className="lg:flex justify-between">
          <div className="mt-16">
            <h2 className="font-semibold text-2xl mb-5">Technologies Used</h2>
            <div className="flex flex-wrap items-center gap-5">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="py-1 px-4 bg-[#ffffe3] text-[#10100e] text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:mt-0 w-1/2 mt-16 lg:w-1/6 flex items-center">
            <Link
              href={project.live}
              target="_blank"
              className="text-[#10100e] bg-[#FFFFE3] text-xl gap-5 px-6 py-2 rounded-3xl flex justify-center items-center shadow-md transition-transform duration-300"
            >
              See Live
              <LuArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
