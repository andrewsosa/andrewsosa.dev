/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from '../Navbar';
import Header from '../header';
import Footer from '../Footer';

import '../../styles/reset.css';
import 'tachyons/css/tachyons.css';
import '../../styles/global.css';
import styles from './layout.module.css';

const Layout = ({ children }) => (
  <>
    {/* pa4-l */}
    <div className="pa4-l normal mono primary-color">
      <div className="bg-white h-100 pa3 ph0-l pv6-l">
        <div className="center mw7">
          {/* <Navbar /> */}
          {children}
          <Footer />
        </div>
      </div>

      {/* <footer>© {new Date().getFullYear()} Andrew Sosa</footer> */}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { default as Section } from './Section';
