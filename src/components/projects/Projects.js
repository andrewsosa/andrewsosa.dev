// @flow
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectGrid from "./ProjectGrid";
import ProjectCell from "./ProjectCell";

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
            path
            date
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
      date={node.frontmatter.date}
      image={node.frontmatter.image.childImageSharp.fluid}
      url={node.frontmatter.path}
    />
  ));

  return <ProjectGrid>{projects}</ProjectGrid>;
};

export default Projects;
