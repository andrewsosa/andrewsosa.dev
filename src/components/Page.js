// @flow
import React from "react";
import type { Node } from "react";

import SEO from "./SEO";
import Header from "./Header";
import Navbar from "./ui/Navbar";

interface Props {
  title: ?string;
  children: Node;
}

const Page = ({ title = "Andrew Sosa", children }: Props) => (
  <>
    <SEO title={title} />
    <Header />
    <main>{children}</main>
    {/* <footer></footer> */}
  </>
);

export default Page;
