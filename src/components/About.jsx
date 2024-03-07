import React from "react"
import {motion} from "framer-motion"
const About = () => {
    return (
        <>
            <motion.section id='about' className='font-Kalam mb-4 w-full mt-10 flex items-center shadow-orange-200 bg-blue-200 shadow-2xl'
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.7 }}
               viewport={{ once: true }}
           >
                <div className=' mt-14 px-1 sm:px-64 pb-8  mx-auto  w-full'>
                    <div className='pt-8 pb-1 text-xl font-semibold text-center'>
                        Hii, I m Ritik Pandey
                        <span className='block lg:inline md:inline sm:inline xl:inline pb-1'> Nice to meet you.</span>
                    </div>
                    <h3 className='text-center   text-xl pb-1 leading-8 sm:leading-9'>
                        I am a self-taught programmer with a passion for
                        learning and exploring new technologies.
                        Currently Pursuing Diploma in Information Technology  at GP Kashipur, Uttarakhand.   
                       developing scalable frontend using HTML, CSS and React.js.
                    As a dedicated and driven individual, 
                   I am constantly seeking out opportunities 
                   to grow and improve as a programmer and take on new challenges.
                        Loves to code(obviously), exlporing new places (a lot sometimes), being creative.
                    </h3>
                </div>

            </motion.section>
        </>
    )
}

export default About