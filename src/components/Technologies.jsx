import React from 'react'
import { motion } from "framer-motion";
const Technologies = () => {
  
  return (
    <>

      <section className=' mt-16  sm:flex justify-between md:gap-16 sm:gap-12    items-center   shadow-md  shadow-orange-400   border-t-2 border-orange-400   w-11/12  rounded-xl mx-auto pt-4 pb-4 '>
       <div>
          <h1 className='lg:text-5xl sm:text-3xl  md:text-4xl xl:px-16 sm:px-5  md:px-6 text-3xl pt-3 pb-3 sm:py-2   font-Tourney text-center sm:tracking-wide tracking-widest text-white  bg-neutral-700 '>Tools <span className='sm:block'>and </span>Technologies</h1>
    </div>
        
          <div
            className='grid grid-cols-3  grid-flow-row justify-items-center sm:gap-10 gap-5 sm:my-14 my-5 p-4'>
       
            <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className=' w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
            <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
            <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />


            <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }} 
               viewport={{ once: true }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
            <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />          
<motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }} 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"  className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
            <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
            <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }}     
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
       
          
       <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }} 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
         <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }}     
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
       
            <motion.img initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "liner", duration: 1.6, delay: 0.9 }}
              viewport={{ once: true }}     
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
         
         
             </div>
      </section>
    </>
  )
}

export default Technologies