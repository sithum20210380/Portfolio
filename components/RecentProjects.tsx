import React from 'react'
import { Projects } from '@/constant'
import Link from "next/link";
import Image from "next/image";

const RecentProjects: React.FC<{}> = () => {
    return (
        <section id="RecentProjects">
            <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
                FEATURED PROJECTS
            </h2>
            <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
                EXPLORE NOW
            </p>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {Projects.map((project) => {
                    return (
                        <div
                            key={project.title}
                            className="flex flex-col items-center justify-center w-[500px] h-[320px] bg-[#1a1a1a] rounded-xl pr-5 pl-5 pt-8 pb-8 cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                height={100}
                                width={100}
                                alt={project.title}
                                sizes="100vw"
                            />
                            <h3 className="text-white text-xl font-semibold mt-5">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm text-center mt-2">
                                {project.description}
                            </p>
                            <span className="text-white text-sm mt-5">
                                {project.stack}
                            </span>
                            <Link
                                href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="z-[1] mt-5 text-white text-sm cursor-pointer flex items-center"
                            >
                                <Image
                                    src={project.icon}
                                    height={20}
                                    width={20}
                                    alt=''
                                    sizes="100vw"
                                    className="mr-2"
                                />
                                View Project
                            </Link>


                        </div>
                    )
                }
                )}
            </div>
        </section>
    )
}

export default RecentProjects
