import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technologies, services } from "../Constants/index";
import { motion } from "framer-motion";
import './Overview.css'

const Overview = () => {
  return (
    <div>
      {/* intro */}
      <div className="flex-row items-center pl-5 justify-center pt-3" id="Overview">
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%]" />
        <div className={Styles.sectionText}>
          I'm a skilled web developer with experience in javaScript and
          expertise in frameworks like react, Node.js I'm a quick learner and
          collaborate, scalable and user-friendly solutions that solve real
          world problems. Let's work together to bring your ideas to life!
        </div>
      </div>

        {/* services part */}
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <div>
            <Tilt key={service.icon} className="parallax-effect-glare-scale" glareEnable={true} glareColor="orange" perspective={500}  glareMaxOpacity={0.50} scale={1.02} gyroscope={true}>
              <div className="flex p-3 m-3 flex-col items-center justify-evenly">
                <img className="h-[150px] w-[150px]" src={service.icon} alt={service.title}/>
                <div className="m-5 text-violet-500">{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
          
          {/* technology part */}
      <div className="flex flex-wrap justify-center items-center">
            {technologies.map((technology)=>(
                 <div key={technology.title} className=" orange m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400">
                    <img className="p-2 " src={technology.icon} alt={technology.title} />
                    <div className="text-violet-600 justify-center flex">
                        {technology.title}
                    </div>
                </div>
            ))}
      </div>

    </div>
  );
};

export default Overview;
