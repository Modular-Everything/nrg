/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

import "normalize.css";
import GlobalStyles from "../../../styles/GlobalStyles";
import Typography from "../../../styles/Typography";
import Header from "../Header";
import Footer from "../Footer";

//

const Layout = ({ children, menuItems }) => (
    <>
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
