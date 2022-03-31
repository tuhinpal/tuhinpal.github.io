import * as React from "react";
import Layout from "../components/Layout";
import JavascriptImage from "../images/icons/javascript.svg";
import NodeImage from "../images/icons/node-brands.svg";
import MongoImage from "../images/icons/mongodb.svg";
import ReactImage from "../images/icons/react.svg";
import DockerImage from "../images/icons/docker.svg";
import FirebaseImage from "../images/icons/firebase.svg";
import NextImage from "../images/icons/next-dot-js.svg";
import PythonImage from "../images/icons/python.svg";
import GatsbyImage from "../images/icons/gatsby.svg";

export default function Skillsets() {
  return (
    <>
      <title>Skillsets | Tuhin</title>
      <Layout />
      <div>
        <div className="projects_header">
          <h1>Skillsets</h1>
          <p>I love and work with these Technologies</p>
        </div>

        <div className="skillsets">
          {skillsetsData.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noreferrer"
              className="card"
            >
              <img
                src={skill.icon}
                className="blacknwhite"
                alt={skill.name}
                title={skill.name}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

const skillsetsData = [
  {
    name: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: JavascriptImage,
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/typescript.svg",
  },
  {
    name: "NodeJS",
    link: "https://nodejs.org",
    icon: NodeImage,
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: MongoImage,
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    icon: ReactImage,
  },
  {
    name: "NextJS",
    link: "https://nextjs.org/",
    icon: NextImage,
  },
  {
    name: "MySQL",
    link: "https://www.mysql.com/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/mysql.svg",
  },
  {
    name: "Docker",
    link: "https://docker.io/",
    icon: DockerImage,
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    icon: FirebaseImage,
  },
  {
    name: "Cloudflare Worker",
    link: "https://workers.cloudflare.com/",
    icon: "https://workers.cloudflare.com/resources/logo/logo.svg",
  },
  {
    name: "Python",
    link: "https://python.org/",
    icon: PythonImage,
  },
  {
    name: "GatsbyJS",
    link: "https://www.gatsbyjs.com/",
    icon: GatsbyImage,
  },
];
