import * as React from "react";
import Main from "../compi/Main";
import JavascriptImage from "../images/icons/javascript.svg";
import NodeImage from "../images/icons/node-brands.svg";
import MongoImage from "../images/icons/mongodb.svg";
import ReactImage from "../images/icons/react.svg";
import HtmlImage from "../images/icons/html5.svg";
import SassImage from "../images/icons/sass.svg";
import DockerImage from "../images/icons/docker.svg";
import FirebaseImage from "../images/icons/firebase.svg";
import NextImage from "../images/icons/next-dot-js.svg";
import PythonImage from "../images/icons/python.svg";
import GatsbyImage from "../images/icons/gatsby.svg";
import DenoImage from "../images/icons/deno.svg"

export default function Skillsets() {
  return (
    <main>
      <title>Skillsets | Tuhin</title>
      {Main()}
      <div>
        <div className="projects_header">
          <h1>Skillsets</h1>
          <p>I love and work with these Technologies</p>
        </div>

        <div className="skillsets">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={JavascriptImage} alt="Javascript" />
          </a>
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={NodeImage} alt="NodeJS" />
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={MongoImage} alt="MongoDB" />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={ReactImage} alt="React" />
          </a>
          <a
            href="https://html5.org/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={HtmlImage} alt="Html5" />
          </a>
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={SassImage} alt="Sass" />
          </a>
          <a
            href="https://docker.io/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={DockerImage} alt="Docker" />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={FirebaseImage} alt="Firebase" />
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={NextImage} alt="NextJS" />
          </a>
          <a
            href="https://python.org/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={PythonImage} alt="Python" />
          </a>
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={GatsbyImage} alt="Gatsby" />
          </a>
          <a
            href="https://deno.land/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={DenoImage} alt="Deno" />
          </a>
        </div>
      </div>
    </main>
  );
};
