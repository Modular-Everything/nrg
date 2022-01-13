/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import "normalize.css";
import Favicon from "../Favicon";
import GlobalStyles from "../../../styles/GlobalStyles";
import Typography from "../../../styles/Typography";
import Stacking from "../../../styles/Stacking";
import Header from "../Header";
import Footer from "../Footer";

//

const Layout = ({ children, bgColor, menuItems }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Favicon />
      <style type="text/css">
        {`
        body {
          background-color: ${bgColor || "var(--white)"} !important;
        }`}
      </style>
    </Head>

    <GlobalStyles bgColor={bgColor} />
    <Typography />
    <Stacking />

    <Header menuItems={menuItems} />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  menuItems: PropTypes.object.isRequired,
};

Layout.defaultProps = {
  bgColor: null,
};

export default Layout;
