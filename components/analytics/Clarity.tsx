// @ts-nocheck
// @ts-ignore

import { useEffect, useRef } from "react";

export default function Clarity() {
  const clarityLoaded = useRef(false);

  useEffect(() => {
    const loadClarityScript = () => {
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "jewayfrmnj");
    };

    if (!clarityLoaded.current && typeof window !== "undefined") {
      clarityLoaded.current = true;
      loadClarityScript();
    }
  }, []);

  return null;
}
