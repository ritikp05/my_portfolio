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
                        Currently Dedicated and detail-oriented IT professional with a
                        Diploma in Information Technology and practical experience as an
                        Implementation Engineer at Amrita Technologies. Proven ability to 
                        manage and configure Hospital Information Systems ,
                        develop data-driven reports using SQL and TIBCO Jaspersoft, and 
                        oversee the deployment of releases in staging as well as patch 
                        creation for live environments. Additionally skilled in MERN stack 
                        (MongoDB, Express.js, React.js,Node.js)        
                    </h3>
                </div>

            </motion.section>
        </>
    )
}

export default About