// @flow
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectGrid, { ProjectCell } from "./ProjectsGrid";

const query = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            path
          }
        }
      }
    }
  }
`;

const Projects = () => {
  const { allMarkdownRemark } = useStaticQuery(query);

  const projects = allMarkdownRemark.edges.map(({ node }) => (
    <ProjectCell
      key={node.id}
      title={node.frontmatter.title}
      image={node.frontmatter.image}
      url={node.frontmatter.path}
    />
  ));

  return <ProjectGrid>{projects}</ProjectGrid>;
};

export default Projects;
