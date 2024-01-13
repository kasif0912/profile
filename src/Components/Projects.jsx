import React from "react";
import { Styles } from "../utils/Style";
import Tilt from "react-parallax-tilt";
import { projects } from "../Constants";
import {SiNetlify,SiGithub} from "react-icons/si"

const Projects = () => {
  return (
    <div>
      {/* Project description */}
        <div className="flex-row items-center pl-5 justify-center pt-3"  style={{ backgroundColor: "#FFF1DD" }} id="Projects">
            <span className={Styles.sectionHeadText}>Projects</span>
            <hr className="w-[35%]" />
            <div className={Styles.sectionText}>
            I'm a skilled web developer with experience in javaScript and
            expertise in frameworks like react, Node.js I'm a quick learner and
            collaborate, scalable and user-friendly solutions that solve real
            world problems. Let's work together to bring your ideas to life!
            </div>
        </div>

        <div className="flex flex-wrap p-8 justify-evenly items-center">
            {projects.map((project)=>(
                
                <Tilt key={projects.name} className="w-[300px] h-[500px]  justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900">
                  <div>
                    <div className="flex justify-center flex-col items-center mb-3">
                      <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex  justify-center items-center">
                            <a href={project.source_deploy_link} target="blank">
                              <SiNetlify className="text-3xl font-bold text-violet-600"></SiNetlify>
                            </a>
                            
                      </div>
                      <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-orange-500 flex justify-center items-center">
                            <a href={project.source_deploy_link} target="blank">
                              <SiGithub className="text-3xl font-bold text-violet-600"></SiGithub>
                            </a>
                            
                      </div>

                      <img src={project.image} alt={project.name} className="h-[200px]   w-[300px] self-center  border-2 border-pink-200 rounded-2xl" />
                        <div className="text-2xl text-violet-600 font-extrabold">
                          {project.name}
                        </div>
                        <div className="text-center">
                          <span className="text-orange-500">
                            {project.description}
                          </span>
                        </div>
                    </div>
                  </div>
 
                </Tilt>
            ))}

        </div>

    </div>
  );
};

export default Projects;
