import React from "react";
import { motion } from "framer-motion";
import { techdata } from "../Data/tech";
const Technologies = () => {
  return (
    <>
      <section className=" mt-16  ">
        <div className="rounded-xl mx-auto w-full  flex-col  items-center  gap-14 sm:gap-16 pt-4 pb-4 justify-center ">
          <motion.h1
            initial={{ opacity: 0,y:-50 }}
            whileInView={{y:0, opacity: 1 }}
            transition={{duration:0.5,delay:0.7}}
            viewport={{once:true}}
            className=" text-5xl  text-center mb-8  tracking-widest   font-bold p-4  hover:underline font-Tourney"
          >
            Tech Stack
          </motion.h1>

          <div className="grid grid-flow-row sm:grid-cols-6  grid-cols-3  sm:w-1/2 w-4/5  mx-auto gap-7 sm:gap-8">
            {techdata.map((data) => {
              return (
                <motion.div
                key={data.logo}
                  className="bg-gradient-to-t from-gray-300 to-fuchsia-100  shadow-xl  p-2 w-fit  rounded-full"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{  duration: 0.7, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={data.logo}
                    className=" sm:w-14 w-10  pt-1 "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
