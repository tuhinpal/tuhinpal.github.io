import markdownIt from "markdown-it";
import { useMemo } from "react";

export default function RenderMarkdown({ content = "", className = "" }) {
  const __html = useMemo(
    () => markdownIt({ linkify: true, html: true }).render(content),
    [content]
  );

  return (
    <article
      className={`article ${className}`}
      dangerouslySetInnerHTML={{
        __html: __html,
      }}
    />
  );
}
