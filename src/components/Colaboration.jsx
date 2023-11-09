import React from 'react'
import gif from "../assets/dogGif.gif"
import { MdOutlineMessage } from "react-icons/md";
const Colaboration = () => {
    return (
        <>
            <div id='contact' className='flex-col gap-2   w-full'>
                <img src={gif} alt='dd' className='mx-auto  ' />
                <h1 className='text-center text-4xl font-bold  mt-2'>Interested in collaborating with me?</h1>
                <p className='text-center  font-semibold mt-2'>I'm always open to collaborate, discuss or partnership opportunities.</p>
                <div className="flex items-center justify-center w-full text-center">
          <a
            className="flex items-center p-2 mt-4 text-2xl font-semibold text-orange-500 border-2 border-gray-500 rounded-xl hover:bg-yellow-100"
            href="mailto:kushagarakp10@gmail.com"
            target="_blank"
          >
            <MdOutlineMessage className="items-center m-2 text-4xl hover:text-yellow-500 " />
            Start a Conversation
          </a>
        </div>
            </div>
        </>
    )
}

export default Colaboration