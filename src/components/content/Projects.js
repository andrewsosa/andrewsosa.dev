import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

import { Section } from "../layout";
import { ContentList } from "../layout/content";

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
        repositoriesContributedTo(
          first: 20
          privacy: PUBLIC
          orderBy: { field: PUSHED_AT, direction: DESC }
          contributionTypes: COMMIT
        ) {
          edges {
            node {
              name
              nameWithOwner
              url
              description
              updatedAt
              owner {
                login
              }
            }
          }
        }
        repositories(
          first: 20
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
              updatedAt
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

const Styled = {
  Header: styled.h1`
    .arrow {
      transition: all 0.3s ease;
      margin-left: 0.5rem;
      opacity: 1;
    }
    &:hover {
      .arrow {
        margin-left: 1.25rem;
        opacity: 1;
      }
    }
  `,
};

const ProjectsHeader = ({ showArrow }) => (
  <Styled.Header className="primary-color tl f3 b w-auto dib">
    <span>Latest Projects</span>
    {showArrow && <span className="arrow">{"->"}</span>}
  </Styled.Header>
);

const Projects = ({ limit, githubLink, linkToPage }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Section>
          {linkToPage ? (
            <Link to="/projects">
              <ProjectsHeader showArrow />
            </Link>
          ) : (
            <ProjectsHeader />
          )}
          <ContentList>
            {data.github.viewer.repositoriesContributedTo.edges
              .map(edge => edge.node)
              .filter(proj => proj.description !== null)
              .concat(
                data.github.viewer.repositories.edges
                  .map(edge => edge.node)
                  .filter(proj => proj.owner.login === "andrewsosa")
                  .filter(proj => proj.description !== null),
              )
              .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
              .slice(0, limit || 10)
              .map(proj => (
                <ProjectLink
                  key={proj.nameWithOwner}
                  link={proj.url}
                  name={proj.nameWithOwner}
                  desc={proj.description}
                />
              ))}
          </ContentList>
        </Section>
        {githubLink && (
          <div className="mt4">
            <a className="underline" href="https://github.com/andrewsosa">
              See more on Github
              {" ->"}
            </a>
          </div>
        )}
      </>
    )}
  />
);

export default Projects;
