import * as React from "react";
import Layout from "../components/Layout";
import me from "../images/me.jpg";
import meColored from "../images/me-colored.jpg";
import { Link } from "gatsby";

export default function Index() {
  const imgRef = React.useRef(null);
  const [imageIsDotted, setimageIsDotted] = React.useState(true);

  React.useEffect(() => {
    function imageHoverChecker() {
      if (!imgRef.current) return;

      imgRef.current.addEventListener("mouseenter", () => {
        setimageIsDotted(false);
      });

      imgRef.current.addEventListener("mouseleave", () => {
        setimageIsDotted(true);
      });
    }

    imageHoverChecker();

    return () => {
      setimageIsDotted(true);
      document.removeEventListener("mouseenter", imageHoverChecker);
      document.removeEventListener("mouseleave", imageHoverChecker);
    };
  }, []);

  return (
    <>
      <title>Tuhin</title>
      <Layout />
      <div className="container">
        <div>
          <h1>
            I'm <span className="geruya">Tuhin</span>{" "}
            <span className="sada">Kanti</span>{" "}
            <span className="sobuj">Pal</span>.
          </h1>
          <p>
            I'm a programmer, Security Researcher and Opensource Enthusiast. I
            am potential on Frontend and Backend development with Javascript &
            Typescript. See my <Link to="/skillsets">Skillsets</Link> &{" "}
            <a
              target="_blank"
              href="https://github.com/tuhinpal"
              rel="noreferrer"
            >
              Projects
            </a>{" "}
            for more.
          </p>
          <Link to="/works" className="button">
            View my Works
          </Link>
          <p className="social">
            <a
              target="_blank"
              href="https://github.com/tuhinpal/"
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
          <img
            className="img"
            src={imageIsDotted ? me : meColored}
            alt="Tuhin"
            ref={imgRef}
            style={{
              opacity: imageIsDotted ? 0.6 : 1,
            }}
          />
        </div>
      </div>
    </>
  );
}
