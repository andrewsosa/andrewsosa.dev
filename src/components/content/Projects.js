import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Section } from '../layout';
import { ContentList, ContentLink } from '../layout/content';

const ProjectLink = ({ link, name, desc }) => (
  <li className="mt4 db">
    <a className="fw7 w-auto dib link underline" href={link}>
      {name}
    </a>
    <p className="normal measure lh-copy mv3">{desc}</p>
  </li>
);

const query = graphql`
  query {
    github {
      viewer {
        email
        repositories(
          first: 12
          privacy: PUBLIC
          orderBy: { field: PUSHED_AT, direction: DESC }
          affiliations: OWNER
        ) {
          edges {
            node {
              name
              nameWithOwner
              url
              description
              owner {
                login
              }
            }
          }
        }
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Section>
        <h1 className="tl f3 b w-auto dib">Latest Projects</h1>
        <ContentList>
          {data.github.viewer.repositories.edges
            .map(edge => edge.node)
            .filter(proj => proj.owner.login === 'andrewsosa')
            .filter(proj => proj.description !== null)
            .map(proj => (
              <ProjectLink
                link={proj.url}
                name={proj.nameWithOwner}
                desc={proj.description}
              />
            ))}
        </ContentList>
      </Section>
    )}
  />
);

export default Projects;
