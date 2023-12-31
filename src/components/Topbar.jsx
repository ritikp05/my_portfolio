import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import img11 from '../assets/img4.jpg'
import resume from '../assets/resume.pdf';
import {motion} from "framer-motion";
const Topbar = () => {
  return (
    <section id='topbar' className='pt-28'>
      <div className='text-center'>
        <span className='font-sans text-4xl font-semibold pr-10 '>

          Hello, I'm
        </span>
        <div className='font-poppins font-bold text-5xl mt-4 text-amber-500 tracking-widest '>
          Ritik Pandey
        </div>  </div>

      <TypeAnimation
        aria-hidden="true"
        className="flex justify-center h-full mb-10 mt-6 font-Tourney text-3xl font-extrabold text-purple-800 md:text-4xl lg:text-5xl lg:my-16"

        sequence={[
          '<Developer/>',
          300,
          '',
          300,
          '<Student/>',
          2000,
          '',
          30
        ]}

        deletionSpeed={90}
        speed={{ type: "keyStrokeDelayInMs", value: 250 }}
        repeat={Infinity}
      />
      <div className="flex justify-center ">
        <img
          className="h-80 md:h-96 lg:h-96 border-4 border-gray-300 sm:h-96 xl:h-96 rounded-full"
          src={img11}
        />
      </div>
      <div className="flex justify-center m-2 font-Mali text-2xl text-center">
        I love to code explore and helping out others
      </div>
      <div className='flex justify-center mt-6 '>

      <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
   
    href={resume} download="ritik.pdf" className='block mb-3 text-2xl '>
          <button className="button animate-bounce hover:animate-none">
            get my resume
          </button>
        </motion.a>

      </div>


    </section>

  )
}

export default Topbar;