import markdownIt from "markdown-it";
import { useMemo } from "react";

export default function RenderMarkdown({ content = "", className = "" }) {
  const __html = useMemo(() => {
    const html = markdownIt({ linkify: true, html: true }).render(content);
    // const replaceImageHtml = html.replace(
    //   // if imageUrl starts with /images/ then replace it with /_next/image?url={imageUrl}&w=1080&q=75
    //   /<img src="\/images\/(.+)" alt="(.+)">/g,
    //   (_, imageUrl, imageAlt) =>
    //     `<img src="/_next/image?url=${encodeURIComponent(
    //       `/images/${imageUrl}`
    //     )}&w=1080&q=75" alt="${imageAlt}">`
    // );

    // return replaceImageHtml;
    return html;
  }, [content]);

  return (
    <article
      className={`article ${className}`}
      dangerouslySetInnerHTML={{
        __html: __html,
      }}
    />
  );
}
