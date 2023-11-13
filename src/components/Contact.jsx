
import React from "react";
import { BsFire } from "react-icons/bs";
import {RiHeartsLine} from 'react-icons/ri'

function Contact() {
  return (
    <>
      <div  className="mt-8 flex flex-col items-center h-full p-4 bg-slate-950 justify-evenly sm:flex lg:flex-row  rounded-3xl lg:rounded-2xl md:rounded-2xl sm:rounded-2xl  sm:py-4 ">
        <div className="mb-6 font-serif text-3xl font-extrabold text-center text-white ">
          Start a Project
        </div>
        <div className="items-center mb-6 text-lg text-center text-white">
          <div>
            Interested in working together? We should queue up a time to chat.
          </div>
          <div className="flex justify-center"> I'll buy the coffee.</div>
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
      </div>
      <div className="flex flex-col items-center justify-center mt-6 h-full pt-8 bg-blue-500">
        <div className=" cursor-pointer font-[Cursive] lg:text-4xl md:text-4xl sm:text-4xl text-3xl  transition ease-in-out delay-150 text-yellow-200 hover:-translate-y-1 hover:scale-110 duration-300">
        Thanks for visiting!
        </div>
        <div className="flex flex-col justify-center mt-8 text-xl font-semibold">
          <span className="flex justify-center">
            Living, learning, & leveling up
          </span>
          <span className="flex justify-center">one day at a time</span>
        </div>
        <div className="flex mt-8 justify-evenly">
          <a
            href="https://www.instagram.com/_ritik05/"
            target="_blank"
          >
            <div className="w-10 h-10 p-1 m-2 overflow-hidden border border-black rounded-full">
              <img
                className=" h-fit w-fit"
                src="https://cdn.discordapp.com/attachments/1001501223750479953/1132884003914010736/pngfind.com-instagram-symbol-png-381345.png"
              />
            </div>
          </a>
       
          <a href="mailto:kushagarakp10@gmail.com" target="_blank">
            <img
              className="w-10 h-10 p-1 m-2 border border-black rounded-full "
              src="https://cdn.discordapp.com/attachments/1001501223750479953/1132886379571970138/pngwing.com_3.png"
            />
          </a>

          <a href="https://github.com/ritikp05" target="_blank">
            <img
              className="w-10 h-10 p-1 m-2 border border-black rounded-full "
              src="https://cdn.discordapp.com/attachments/1001501223750479953/1132885706075803698/pngwing.com.png"
            />
          </a>
        
          <a
            href="https://www.facebook.com/ritik.pandey.9889"
            target="_blank"
          >
            <img
              className="w-10 h-10 p-1 m-2 border border-black rounded-full "
              src="https://cdn.discordapp.com/attachments/1001501223750479953/1132885133641392178/pngfind.com-facebook-png-icon-262815.png"
            />
          </a>
        </div>
        <div className="mt-14 text-white flex">Made with <RiHeartsLine className="px-1 text-3xl text-red-500 pb-1"/> by Ritik Pandey</div>
      </div>
    </>
  );
}
export default Contact;