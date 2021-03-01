import * as React from "react";
import Main from "../compi/Main";
import me from "../images/me.jpg";
import { Link } from "gatsby";
import '../style/index.scss';

export default () => {
  return (
    <main>
      <title>Tuhin</title>
      {Main()}
      <div className="container">
        <div>
          <h1>
            I'm <span className="geruya">Tuhin</span>{" "}
            <span className="sada">Kanti</span>{" "}
            <span className="sobuj">Pal</span>.
          </h1>
          <p>
            I'm a programmer, Security Researcher and Opensource Enthusiast. I
            have Researched about many OTTs and founded many bugs. I have
            created some awesome Open Source projects, They are available on my{" "}
            <a
              target="_blank"
              href="https://github.com/cachecleanerjeet"
              rel="noreferrer"
            >
              Github
            </a>
            . Yeah, I love Monospace.
          </p>
          <Link to="../../works" className="button">
            View my Works
          </Link>
          <p className="social">
            <a
              target="_blank"
              href="https://github.com/cachecleanerjeet/"
              rel="noreferrer"
            >
              <i className="fa fa-github-alt item gh"></i>{" "}
            </a>
            <a
              target="_blank"
              href="https://twitter.com/jeeetpaul"
              rel="noreferrer"
            >
              <i className="fa fa-twitter item tw"></i>{" "}
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tuhin-kanti-pal-ab299a1ba/"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin item ln"></i>{" "}
            </a>
            <a
              target="_blank"
              href="http://youtube.com/jeetpaul"
              rel="noreferrer"
            >
              <i className="fa fa-youtube-play item yt"></i>{" "}
            </a>
            <a
              target="_blank"
              href="https://www.telegram.dog/cachecleanerjeet"
              rel="noreferrer"
            >
              <i className="fa fa-telegram item tg"></i>{" "}
            </a>
          </p>
        </div>
        <div className="imagectnr">
          <img className="img" src={me} alt="Tuhin" />
        </div>
      </div>
    </main>
  );
};
