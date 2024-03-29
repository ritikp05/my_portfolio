import React from "react";
import { data } from "../Data/data";
import Projects from "./Projects";
import { motion } from "framer-motion";
const Tech = () => {
  return (
    <motion.div id="project"
    initial={{ opacity: 0, y: -25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    viewport={{ once: true }}
>
      <h1 className="text-5xl mt-16 mb-4 text-center font-extrabold font-poppins ">
        MY Recent Work
      </h1>
      <p className=" text-xl text-center mt-6 mb-2 font-semibold ">
        Here are a few past projects I've worked on. Want to see more ?
        <a
          href="https://github.com/ritikp05"
          target="_blank"
          className="underline  text-blue-700  hover:underline  text-lg hover:font-bold pl-1"
        >
        
          Checkout Github
        </a>
      </p>

      {data.map((data) => {
        return (
          <div className="flex mt-8 justify-center " key={data.id}>
            <Projects
              name={data.name}
              tech={data.Tech}
              desc={data.Desc}
              github={data.github}
              live={data.live}
            ></Projects>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Tech;
