import React from "react";
import { graphql } from "gatsby";

import Page from "../components/Page";
import Projects from "../components/projects/Projects";
import Content from "../components/Content";

const IndexPage = ({ data }) => (
  <Page>
    <Content content={data.markdownRemark.html} />
    <Projects />
  </Page>
);

export default IndexPage;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
