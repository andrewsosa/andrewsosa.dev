import React from 'react';
import { Link } from 'gatsby';

import Layout, { Section } from '../components/layout';
import { ContentList, ContentLink } from '../components/layout/content';
import Image from '../components/image';
import SEO from '../components/seo';

import Projects from '../components/content/Projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Andrew Sosa" keywords={[`gatsby`, `application`, `react`]} />
    <Section>
      <p className="lh-copy f3 f2-m f1-l tl">
        Andrew Sosa is a Florida-based software & data engineer, currently
        working at Harris Corporation.
      </p>
    </Section>
    <Projects />
  </Layout>
);

export default IndexPage;
