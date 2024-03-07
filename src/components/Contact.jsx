import React from "react";
import { BsFire } from "react-icons/bs";
import { motion } from "framer-motion";
function Contact() {
  return (
    <>
      <motion.div  className="mt-10 flex flex-col items-center h-full p-4 bg-slate-300   justify-evenly sm:flex lg:flex-row  rounded-3xl lg:rounded-2xl md:rounded-2xl sm:rounded-2xl  sm:py-4 "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
>
        <div className="mb-6 font-serif text-3xl font-extrabold text-center text-purple-600 ">
          Start a Project
        </div>
        <div className="items-center mb-6 text-lg text-center text-stone-900 font-serif">
          <div>
            Interested in working together? We should queue up a time to chat.
          </div>
          <div className="flex justify-center items-center"> I'll buy the coffee.</div>
        </div>
        <div className="flex justify-center w-full md:w-fit">
          <a
            className="flex p-2 mx-10 my-3 text-2xl border border-cyan-500 rounded-xl hover:scale-105 hover:underline   bg-white"
            href="mailto:kushagarakp10@gmail.com@gmail.com"
            target="_blank"
          >
            <BsFire className="m-2 hover:text-yellow-400  text-yellow-600  " />
            Let's do this
          </a>
        </div>
      </motion.div>
      <motion.div className="flex flex-col items-center justify-center mt-6 h-full pt-8 bg-blue-500"
         initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
>
        <div className=" cursor-pointer font-[Cursive] lg:text-4xl md:text-4xl sm:text-4xl text-3xl  transition ease-in-out delay-150 text-yellow-200 hover:-translate-y-1 hover:scale-110 duration-300">
        Thanks for visiting!
        </div>
        <div className="flex flex-col justify-center mt-8  text-xl font-semibold">
          <span className="flex justify-center">
            Living, learning, & leveling up
          </span>
          <span className="flex justify-center mb-8">one day at a time</span>
        </div>
      </motion.div>
    </>
  );
}
export default Contact;