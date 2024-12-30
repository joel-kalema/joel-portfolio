"use client";

import React from "react";
import { projects } from "@/utils/projects";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useRouter } from "next/navigation";

const Projects = () => {
    const router = useRouter();
    const handleRedirect = (project) => {
        router.push(`/project/${project.title.split(" ").join("_")}`);
    };

    return (
        <div className="pt-24 lg:pt-40 px-4 lg:px-20">
            <ParallaxProvider>
                <div className="lg:w-5/6 mx-auto text-center mb-40 mix-blend-difference">
                    <Parallax speed={-15}>
                        <h1 className="italic text-xl mb-4 font-light">SINCE 2020</h1>
                        <h1 className="text-2xl italic lg:text-4xl mix-blend-difference">
                            I have been working on Innovative solutions crafted to solve
                            real-world challenges. Each project reflects a commitment to{" "}
                            <span className="text-[#676767]">
                                quality, performance, and user impact.
                            </span>
                        </h1>
                    </Parallax>
                </div>

                <div className="flex justify-between gap-6 items-center my-10 lg:my-40 mix-blend-difference">
                    <h1 className="text-4xl lg:text-7xl font-semibold">Recent</h1>
                    <div className="h-[4px] w-2/6 bg-[#d3d1c891] mix-blend-difference hidden lg:block"></div>
                    <h1 className="text-4xl lg:text-7xl font-semibold">Projects</h1>
                </div>
            </ParallaxProvider>

            <div className="mt-40 lg:flex flex-wrap text-[#FFFFE3]"  id="portfolio">
                {projects.map((project) => (
                    <div
                    key={project.title}
                    className="lg:w-1/2 mb-4 lg:mb-0 relative overflow-hidden grayscale hover:grayscale-0 transition duration-300 border border-dotted border-[#2a2a26] group"
                >
                    <div className="lg:p-4 h-[12rem] lg:h-[20rem] overflow-hidden relative z-20">
                        <div className="relative float-right h-[12rem] lg:h-[18rem] w-full">
                            <Image
                                src={project.image}
                                layout="fill"
                                objectFit="cover"
                                alt={project.title}
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className="w-[30rem] absolute top-0 h-[30rem] opacity-0 group-hover:opacity-10 transition duration-500 z-10 bg-[#FFFFE3] blur-3xl rounded-full"></div>
                    <div className="p-4 lg:p-10 relative z-20">
                        <h1 className="text-2xl mb-2 font-extrabold">{project.title}</h1>
                        <p className="text-sm lg:w-5/6 mb-10 text-[#8f8f8f]">
                            {project.overview.substring(0, 190)}...
                        </p>
                        <p
                            onClick={() => handleRedirect(project)}
                            className="border flex items-center justify-between py-1 px-4 rounded-3xl w-3/6 lg:w-1/6 cursor-pointer"
                        >
                            More <LuMoveRight />
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;