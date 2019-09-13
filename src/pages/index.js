import React from "react";
// import { Link } from "gatsby";

import Layout, { Section } from "../components/layout";
import SEO from "../components/seo";

import Projects from "../components/content/Projects";

const IndexPage = () => (
  <>
    <SEO title="Andrew Sosa" />
    <Layout>
      <Section>
        <p className="lh-copy f3 f2-m f1-l tl">
          Andrew Sosa is a software & dataops engineer, currently working at
          L3Harris Technologies.
        </p>
      </Section>
      <Projects limit={4} linkToPage />
    </Layout>
  </>
);

export default IndexPage;
