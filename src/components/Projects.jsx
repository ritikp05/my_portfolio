import React from "react";
import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { IoGlobeOutline } from "react-icons/io5";
const Projects = ({ name, tech, desc, github, live, id }) => {
  return (
    <motion.div
      initial={
        { x: "-100%", opacity: 0 }
      }
      whileInView={{ x: "0%", opacity: 1 }}
      transition={{duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className=" border-gray-400 border-2 rounded-lg p-4 w-11/12  sm:w-5/6  h-auto  cursor-pointer    "
    >
      <h1 className="text-2xl  md:text-3xl sm:text-2xl font-semibold  italic text-gray-500 cursor-default ">
        {name}
      </h1>
      <h1></h1>
      <div className="mt-3 lg:ml-16">
        <div className=" flex gap-3 flex-wrap">
          {tech.map((elem, index) => {
            return (
              <button
                className="px-2 border-2 cursor-default border-green-500 hover:bg-green-500 hover:text-white rounded-md "
                key={index}
              >
                {elem}
              </button>
            );
          })}
        </div>
      </div>
      <h1 className="flex-wrap ml-5 mt-1 lg:text-xl md:text-xl sm:text-lg cursor-default ">
        {desc}
      </h1>
      <div className="flex gap-6 mt-2 ml-8 ">
        <a href={github} target="_blank" className="ml-10">
          <VscGithubInverted className="text-3xl" />
        </a>
        <a href={live} target="_blank">
          <IoGlobeOutline className="text-3xl text-blue-600" />
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
