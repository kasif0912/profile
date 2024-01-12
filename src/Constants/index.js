import css from "../assets/css.png";
import cpp from "../assets/cpp.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import contact from "../assets/contact-us.png";
import js from "../assets/js.png";
import hadoop from "../assets/hadoop.png";
import express from "../assets/express.png"
import ui from "../assets/ui.png";
import node from "../assets/nodejs.png";
import git from "../assets/git-1.png";
import mongodb from "../assets/mongodb.png";
import developer from "../assets/web-developer.png";
import gitversion from "../assets/git-version.png";
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"

const services = [
  {
    title: "Web Developer",
    icon: developer,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "UI/UX Designer",
    icon: ui,
  },
];

const technologies = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Express JS",
    icon: express,
  },
  {
    title: "React JS",
    icon: react,
  },
  {
    title: "Node JS",
    icon: node,
  },
  {
    title: "github",
    icon: git,
  },
  {
    title: "c++",
    icon: cpp,
  },
];

const projects=[
  {
    name:"Netflix",
    description:"loreIt is a long established fact that a reader wil-or-less normal distribution of letters, as opposed to using 'Content here",
    tags:[
      {
        name:"Tailwind css",
        color:"blue-text-gradiet",
      },
      {
        name:"Angular",
        color:"green-text-gradient",
      },
      {
        name:"Bootstrap",
        color:"pink-text-gradient",
      }
    ],
    image:pro1,
    source_code_link:"https://github.com/kasif0912/college-diary/",
    source_deploy_link:"https://niist-campus-update.netlify.app/"
  },
  {
    name:"spotify",
    description:"loreIt is a long established fact that a reader wil-or-less normal distribution of letters, as opposed to using 'Content here",
    tags:[
      {
        name:"Tailwind css",
        color:"blue-text-gradiet",
      },
      {
        name:"Angular",
        color:"green-text-gradient",
      },
      {
        name:"Bootstrap",
        color:"pink-text-gradient",
      }
    ],
    image:pro2,
    source_code_link:"https://github.com/kasif0912/college-diary/",
    source_deploy_link:"https://niist-campus-update.netlify.app/"
  },
  {
    name:"college-diary",
    description:"loreIt is a long established fact that a reader wil-or-less normal distribution of letters, as opposed to using 'Content here",

    tags:[
      {
        name:"Tailwind css",
        color:"blue-text-gradiet",
      },
      {
        name:"Angular",
        color:"green-text-gradient",
      },
      {
        name:"Bootstrap",
        color:"pink-text-gradient",
      }
    ],
    image:pro3,
    source_code_link:"https://github.com/kasif0912/college-diary/",
    source_deploy_link:"https://niist-campus-update.netlify.app/"
  },
]

export { services, technologies,projects };
