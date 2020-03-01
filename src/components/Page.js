// @flow
import React from "react";
import type { Node } from "react";

import SEO from "./SEO";
import Navbar from "./ui/Navbar";

interface Props {
  title: ?string;
  children: Node;
}

const Page = ({ title = "Andrew Sosa", children }: Props) => (
  <section>
    <SEO title={title} />
    <Navbar />
    {children}
  </section>
);

export default Page;
