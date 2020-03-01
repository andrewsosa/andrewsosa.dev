import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/ui/container/Layout";
import IndexHeader from "../components/content/IndexHeader";
import ProjectGrid from "../components/content/ProjectGrid";

const IndexPage = () => (
  <Layout>
    <SEO title="Andrew Sosa" />
    <IndexHeader />
    <ProjectGrid />
  </Layout>
);

export default IndexPage;
