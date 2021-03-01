import * as React from "react";
import { useState } from "react";
import "../style/style.scss";
import { Link } from "gatsby";
import '../style/singleblog.scss';

export default () => {
  const [mmenu, setMmenu] = useState("");

  const mmenuF = () => {
    if (mmenu === "") {
      setMmenu("mmenu");
    } else {
      setMmenu("fadeout");
      setTimeout(() => {
        setMmenu("");
      }, 500);
    }
  };

  return (
    <div>
      <div className="header">
        <Link className="title" to="../../">
          <span className="gerua">Tu</span>h<span className="sobuj">in</span>.
        </Link>
        <div className="nav">
          <Link to="../../works" className="item">
            Works
          </Link>
          <Link to="../../skillsets" className="item">
            Skillsets
          </Link>
          <Link to="../../blog" className="item">
            Blog
          </Link>
          <Link to="../../contact" className="item">
            Contact
          </Link>
        </div>
      </div>
      <div>
        <i
          onClick={mmenuF}
          aria-hidden="true"
          className="fa fa-compass float fa-2x"
        ></i>
        <div className={mmenu}>
          <div className="close">
            <i
              onClick={mmenuF}
              aria-hidden="true"
              className="fa fa-window-close fa-2x"
            ></i>
          </div>
          <div className="items">
            <div className="mitem" aria-hidden="true">
              <Link to="../../" onClick={mmenuF} className="ms">
                Home
              </Link>
              <Link to="../../works" onClick={mmenuF} className="ms">
                Works
              </Link>
              <Link to="../../skillsets" onClick={mmenuF} className="ms">
                Skillsets
              </Link>
              <Link to="../../blog" onClick={mmenuF} className="ms">
                Blog
              </Link>
              <Link to="../../contact" onClick={mmenuF} className="ms">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
