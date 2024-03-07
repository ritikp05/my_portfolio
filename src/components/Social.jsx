import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import {motion} from "framer-motion"
const Social = () => {
  return (
    <>
      <motion.div className="flex flex-col   text-3xl sm:fixed sm:top-56 top-60 sm:left-3 left-1 absolute  gap-5 z-50"   initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
       >
     

        <a href="mailto:kushagarakp10@gmail.com" target="_blank">
          <BiLogoGmail  className="text-red-600"/>
        </a>
        <a href="https://github.com/ritikp05" target="_blank">
          <FaSquareGithub />
        </a>
        <a href="https://www.linkedin.com/in/ritik-pandey-25061419b/">
          <FaLinkedin  className="text-blue-500"/>
        </a>
        <a href="https://twitter.com/_ritik_pandey_">
          <FaSquareXTwitter />
        </a>
      </motion.div>
    </>
  );
};

export default Social;
