import React from "react";
import PropTypes from "prop-types";

import "normalize.css";
import GlobalStyles from "../../../styles/GlobalStyles";
import Typography from "../../../styles/Typography";
import Header from "../Header";
import Footer from "../Footer";

//

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />

    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
