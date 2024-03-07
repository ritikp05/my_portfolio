import { TypeAnimation } from "react-type-animation";
import img11 from "../assets/img4.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import Social from "./Social";
import React from "react";
const Topbar = () => {
  return (
    <>
      <section
        id="topbar"
        className="mt-28  w-full relative flex sm:flex-row flex-col items-center  justify-evenly "
      >
        <Social />
        <motion.div
          className="flex flex-col sm:w-fit w-full items-center  mt-5 text-center "
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="font-sans sm:text-5xl text-4xl font-semibold tracking-widest "
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Hii,I'm
          </motion.span>
          <div className="font-poppins font-bold sm:text-5xl text-4xl mt-4 text-amber-500 tracking-widest ">
            Ritik Pandey
          </div>
          <div className="  mt-6 text-2xl w-full  font-Mali mb-20 font-extrabold text-purple-800  ">
            <span className="pr-2 block pb-2 ">I am a</span>
            <TypeAnimation
              className=""
              aria-hidden="true"
              sequence={[
                "Programmer",
                200,
                "",
                "Front End Developer",
                600,
                "",
                "MERN Stack Developer",
                600,
                "",
                200,
                "",
                30,
              ]}
              deletionSpeed={90}
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.div className="relative sm:left-36  sm:ml-11  left-2 "   initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
       >
          <img
            className="  border-4 border-gray-300 sm:h-80  h-64 rounded-full"
            src={img11}
          />
        </motion.div>
      </section>

      <motion.a
         initial={{ opacity: 0,}}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.5, delay:0.7}}
         viewport={{ once: true }}
    
       href={resume}
        download="ritik.pdf"
        className="mt-10 flex items-center w-full  mb-10 text-xl "
      >
        <button className="button animate-bounce hover:animate-none mx-auto ">
          Get my resume
        </button>
      </motion.a>
    </>
  );
};

export default Topbar;
