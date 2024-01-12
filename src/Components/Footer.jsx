import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { MdPhoneForwarded } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <div className='w-[screen] flex flex-row justify-around bg-black'>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="https://www.linkedin.com/feed/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                   <FaLinkedin className="text-white"></FaLinkedin>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>
                    Kasif
                </span>
            </a>
        </div>

        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="kasifali009@gmail.com" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                   <MdAttachEmail className="text-white"></MdAttachEmail>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>
                    Kasif
                </span>
            </a>
        </div>

        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="//" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                   <MdPhoneForwarded className="text-white"></MdPhoneForwarded>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>
                    8987897572
                </span>
            </a>
        </div>
         

      </div>
    </div>
  )
}

export default Footer
