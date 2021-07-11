import * as React from "react";
import { Link } from "gatsby";
import "../style/not-found.scss";

export default function Fourofour() {
  return (
    <main>
      <title>404 | Tuhin</title>
      <div className="not-found">
        <Link className="text" to="../../">
          404
        </Link>
      </div>
    </main>
  );
};
