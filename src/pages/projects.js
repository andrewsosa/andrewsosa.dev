import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Projects from "../components/content/Projects";

const ProjectsPage = () => (
  <Layout>
    <Link to="/">
      <span className="primary-color f3 b">{"<-"}</span>
    </Link>
    <Projects githubLink />
  </Layout>
);

export default ProjectsPage;
