import React from "react";
import { Link } from "gatsby";

import Layout, { Section } from "../components/layout";
import { ContentList, ContentLink } from "../components/layout/content";
import Image from "../components/image";
import SEO from "../components/seo";

import Projects from "../components/content/Projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Andrew Sosa" keywords={[`gatsby`, `application`, `react`]} />
    <Section>
      <p className="lh-copy f3 f2-m f1-l tl">
        Andrew Sosa is a software & dataops engineer, currently working at
        L3Harris Technologies.
      </p>
    </Section>
    <Projects />
  </Layout>
);

export default IndexPage;
