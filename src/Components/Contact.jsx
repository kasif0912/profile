import React from 'react'
import { Styles } from "../utils/Style";
import contact from "../assets/contact-us.png"


const Contact = () => {
  return (
    <div>
        {/* contact info */}
      <div className="flex-row items-center pl-5 justify-center pt-3" id="Contact">
        <span className={Styles.sectionHeadText}>Contact-Us</span>
        <hr className="w-[35%]" />
      </div>

        <div className='mt-5'>
            <div className='flex flex-wrap flex-row justify-around'>
                <div className='lg:w-[40%]'>
                    <form className='m-5 flex flex-col gap-3'>
                        <label className="flex flex-col gap-3">
                            <span className='text-violet-700 font-medium mb-2'>
                                    Your Name
                            </span>
                            <input type='text' name='name' placeholder='whats your good name?' className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'>
                            </input>
                        </label>  

                        <label className="flex flex-col gap-3">
                            <span className='text-violet-700 font-medium mb-2'>
                                    Your Email
                            </span>
                            <input type='email' name='email' placeholder='whats your email ?' className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'>
                            </input>
                        </label>  

                        <label className="flex flex-col gap-3">
                            <span className='text-violet-700 font-medium mb-2'>
                                    Your Message
                            </span>
                            <textarea rows={5} name='text' placeholder='whats you want to say?' className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'>
                            </textarea>
                        </label>  
                        <button type='submit' className='bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'>
                            submit
                        </button>
                    </form>
                </div>

                <div className='lg:w-[50%]'>
                    <img  src={contact} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact
