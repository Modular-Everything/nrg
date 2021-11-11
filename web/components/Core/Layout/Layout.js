/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import "normalize.css";
import Favicon from "../Favicon";
import GlobalStyles from "../../../styles/GlobalStyles";
import Typography from "../../../styles/Typography";
import Header from "../Header";
import Footer from "../Footer";

//

const Layout = ({ children, menuItems }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Favicon />
    </Head>

    <GlobalStyles />
    <Typography />

    <Header menuItems={menuItems} />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menuItems: PropTypes.object.isRequired,
};

export default Layout;
