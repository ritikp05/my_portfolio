import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [navbar, Setnavbar] = useState(false);
    const [open, setopen] = useState(false)
    return (<>

        <div className=' w-full  bg-white shadow-sm shadow-slate-700 h-14 text-black flex justify-between fixed top-0 z-40'>

            <section className='flex justify-center items-center'>
                <h1 className='pl-2 font-Monoton text-4xl text-purple-500 tracking-widest  italic  hover:not-italic'><span className='text-5xl '>R</span>ITIK</h1>
            </section>

            <section className='sm:flex md:flex lg:flex hidden gap-4 pr-4'>
                <Link className='hover:underline  hover:cursor-pointer mt-2 text-xl ' to='topbar' spy={true} smooth={true} offset={10}
                    duration={1000}
                    delay={300}>Home</Link>
                <Link className='hover:underline hover:cursor-pointer  mt-2 text-xl' to='about' spy={true} smooth={true} offset={-180}
                    duration={1000}
                    delay={300}>About</Link>
                <Link className='hover:underline hover:cursor-pointer  mt-2 text-xl' to='project' spy={true} smooth={true} offset={-60}
                    duration={1000}
                    delay={300}>Projects</Link>
                <Link className='hover:underline hover:cursor-pointer  mt-2 text-xl' to='contact' spy={true} smooth={true} offset={50}
                    duration={1000}
                    delay={300}>Contact</Link>


            </section>


            <section className='lg:hidden sm:hidden md:hidden pr-4 flex justify-center items-center  '>
                <button className='text-3xl ' onClick={() => {
                    Setnavbar(!navbar);
                    setopen(!open);
                }}>
                    <RiMenu3Fill />
                </button>

            </section>

        </div>

        <section
            className={`${open ? " shadow-slate-500 translate-y-0 duration-700" : " -translate-y-80 duration-700"} bg-white shadow-lg sm:hidden fixed top-0 z-50 w-full `}>
            <div className=' mt-9  pb-7 '>
                <Link to="topbar" spy={true} smooth={true} offset={5}
                    duration={1000}
                    delay={300} className='block mb-3 text-center text-2xl hover:underline hover:cursor-pointer' onClick={() => setopen(false)} >Home</Link>
                <Link to='about' spy={true} smooth={true} offset={-180} duration={1000}
                    delay={200} className='block mb-3 text-2xl text-center hover:underline hover:cursor-pointer' onClick={() => setopen(false)}>About</Link>
                <Link to='project' spy={true} smooth={true} offset={-60} duration={1000}
                    delay={300} className='block mb-3 text-2xl text-center hover:underline hover:cursor-pointer' onClick={() => setopen(false)}>Projects</Link>

                <Link to='contact' spy={true} smooth={true} offset={50} duration={1000}
                    delay={200} className='block mb-3 text-2xl text-center hover:underline hover:cursor-pointer' onClick={() => setopen(false)}>Contact</Link>

                <button className='mx-auto block  '>

                    <AiOutlineClose className='text-3xl' onClick={() => setopen(false)} />
                </button>
            </div>

        </section>

        {/* }  */}

    </>

    )
}

export default Navbar