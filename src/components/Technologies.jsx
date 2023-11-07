import React from 'react'
import {motion} from "framer-motion";
const Technologies = () => {

  return (
    <>

            <section className=' mt-12 '>
<div className='lg:w-3/4 md:w-10/12 shadow-2xl  sm:w-10/12 xl:w-10/12 w-11/12 bg-gray-300  rounded-xl mx-auto  flex-col  gap-14 pt-4 pb-4 justify-center'>
<h1 className='lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-medium text-center mb-8  tracking-widest text-white p-4 bg-neutral-700 hover:underline'>Tech Stack</h1>
  <motion.div
   animate={{
      scale: [1,0.7,1],}}
      transition={{ duration: 4, repeat: Infinity }}
      
   className='flex justify-center gap-4 mt-4 ' >
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className=' w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110'/>
  </motion.div>
  <motion.div 
   animate={{
    scale: [1,0.7,1],}}
      transition={{ duration: 4, repeat: Infinity }}
     
   
   className='flex justify-center gap-4 mt-4' >
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110'/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
  </motion.div>
  <motion.div
   animate={{
    scale: [1,0.7,1],}}
      transition={{ duration: 4, repeat: Infinity }}
     
   
   className='flex justify-center gap-4  mt-4 mb-4' >
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110'/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className='w-16 lg:w-24 md:w-24 sm:w-24 hover:scale-110' />
          
</motion.div>
          
          
          
               
</div>
        </section>
    </>
  )
}

export default Technologies