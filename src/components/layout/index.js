/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { StaticQuery, graphql } from "gatsby";

import Footer from "../Footer";

import "../../styles/reset.css";
import "tachyons/css/tachyons.css";
import "../../styles/global.css";

const Layout = ({ children }) => (
  <>
    <div className="pt2 pb4 normal mono primary-color">
      <div className="bg-white h-100 pa3 ph5-l pv6-l">
        <div className="center mw9 ph4">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { default as Section } from "./Section";
