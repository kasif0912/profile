import React from "react";
import profile from "../assets/profile.svg";
import { Styles } from "../utils/Style";
import Resume from "../assets/ali.pdf";
import { TiArrowDownOutline } from "react-icons/ti";
import '../App.css'
import './About.css'

const About = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10 p-10" id="Home">
      <div className="flex-1">
        <span className={Styles.heroHeadText}>
          Hi, I'm <span className="text-orange-600">Kasif</span>
          <br />
          <span className={Styles.heroSubText}>
            I am a MERN Stack Developer &
            <br />
            <span className="web">Web Desginer</span>
          </span>
        </span>

        <br />
        <div className="w-[14rem] ">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500">
              <TiArrowDownOutline className="text-lg mr-3 mt-1 text-orange-500"></TiArrowDownOutline>{" "}
              Resume
            </div>
          </a>
        </div>
      </div>
      {/* for  image */}
      <div className=" image flex flex-wrap">
        <img src={profile} alt="profile" className="element object-contain p-4" style={{ width: "100%", height: "70vh", marginTop: "20px" }}/>
      </div>
    </div>
  );
};

export default About;
