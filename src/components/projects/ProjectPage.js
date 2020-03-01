import React from "react";
import { graphql } from "gatsby";
import Page from "../Page";

export default function ProjectPage({ data }) {
  const {
    markdownRemark: { frontmatter, html },
  } = data;

  return (
    <Page title={frontmatter.title}>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
