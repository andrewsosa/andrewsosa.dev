import React from "react";
import { graphql } from "gatsby";

import Page from "../Page";
import Content from "../Content";

export default function ProjectPage({ data: pageQuery }) {
  const {
    markdownRemark: { frontmatter, html },
  } = pageQuery;

  return (
    <Page title={frontmatter.title}>
      <section>
        <Content content={html} />
      </section>
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
