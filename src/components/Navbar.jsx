import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [navbar, Setnavbar] = useState(false);
    const [open, setopen] = useState(false)
    return (<>

        <div className=' w-full bg-purple-800 h-14  text-white flex justify-between fixed z-40'>

            <section >
                <h1 className='pl-4 font-poppins text-4xl text-yellow-300 tracking-widest italic   mt-2 hover:not-italic'>RITIK</h1>
            </section>

            <section className='sm:flex md:flex lg:flex hidden gap-4 pr-4'>
                <Link className='hover:underline hover:cursor-pointer mt-2 text-xl ' to='topbar' spy={true} smooth={true} offset={10}
      duration={1000}
      delay={300}>Home</Link>
        <Link className='hover:underline hover:cursor-pointer  mt-2 text-xl' to='about' spy={true} smooth={true} offset={-60}
      duration={1000}
      delay={300}>About</Link>
                <Link className='hover:underline hover:cursor-pointer  mt-2 text-xl' to='project' spy={true} smooth={true} offset={-60}
      duration={1000}
      delay={300}>Projects</Link>
              
                <a href='' download className=' mt-2 text-xl'>Resume</a>

            </section>


            <section className='lg:hidden sm:hidden md:hidden pr-4 '>
                <button className='text-4xl mt-2' onClick={() => {
                    Setnavbar(!navbar);
                    setopen(!open);
                }}>
                    <IoIosMenu></IoIosMenu>
                </button>

            </section>

        </div>

        {
            open && <section className=' text-white bg-slate-400 w-32 fixed z-50 right-0  h-auto float-right lg:hidden md:hidden sm:hidden'>
                <div className=' pl-4 mt-24 pb-8 '>
                    <Link to="topbar" spy={true} smooth={true} offset={10}
      duration={1000}
      delay={300} className='block mb-3 text-2xl hover:underline hover:cursor-pointer' onClick={() => setopen(false)} >Home</Link>
                    <Link to='about' spy={true} smooth={true}  offset={-60}  duration={1000}
      delay={200}  className='block mb-3 text-2xl hover:underline hover:cursor-pointer' onClick={() => setopen(false)}>About</Link>
       <Link to='project' spy={true} smooth={true}  offset={-60}  duration={1000}
      delay={300}  className='block mb-3 text-2xl hover:underline hover:cursor-pointer' onClick={() => setopen(false)}>Projects</Link>
                    <a href='' download className='block mb-3 text-2xl '>Resume</a>
                    <button className='mt-4 ml-2 '>

                        <AiOutlineClose className='text-3xl' onClick={() => setopen(false)} />
                    </button>
                </div>

            </section>


        }
    </>

    )
}

export default Navbar