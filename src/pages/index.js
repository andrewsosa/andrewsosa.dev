import React from "react";

import SEO from "../components/common/SEO";
import Layout from "../components/common/Layout";

import Header from "../components/index/Header";
import Section from "../components/index/Section";

import content from "../content/index.yaml";

const IndexPage = () => (
  <Layout>
    <SEO title="Andrew Sosa" />
    <Header />
    {/* <Section title="Background">
      <p>
        I'm currently an Engineer at{" "}
        <a href="https://google.com">Upstatement</a> building things for the web
        with some awesome people. I recently graduated from Northeastern
        University after completing three awesome six-month co-ops at MullenLowe
        U.S., Starry, and Apple Music.
      </p>

      <p>
        <strong>As a software engineer</strong>, I enjoy bridging the gap
        between engineering and design — combining my technical knowledge with
        my keen eye for design to create a beautiful product. My goal is to
        always build applications that are scalable and efficient under the hood
        while prodviding engaging, pixel-perfect user experiences.
      </p>

      <p>
        When I'm not in front of a computer screen, I'm probably snowboarding,
        cruising around on my penny board, or crossing off another item on my
        bucket list.
      </p>
    </Section> */}
  </Layout>
);

export default IndexPage;
