import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Main from "./Main";

export const query = graphql`
  query graphBlog($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        author
        imgurl
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`;

export default function blog({ data }) {
  const { body, frontmatter } = data.mdx;
  return (
    <main>
      <title>{frontmatter.title} | Blog | Tuhin</title>
      {Main()}
      <div className="blog_single">
        <h1>{frontmatter.title}</h1>
        <h2>
          <span role="img" aria-label="date">
            📅
          </span>{" "}
          {frontmatter.date}{" "}
          <span role="img" aria-label="author">
            🧔
          </span>{" "}
          {frontmatter.author}
        </h2>
        <p>
          <img
            src={frontmatter.imgurl}
            alt={frontmatter.title}
            title={frontmatter.title}
          />
        </p>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </main>
  );
};
