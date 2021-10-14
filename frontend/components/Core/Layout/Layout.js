import React from "react";
import PropTypes from "prop-types";

import "normalize.css";
import GlobalStyles from "../../../styles/GlobalStyles";
import Typography from "../../../styles/Typography";
import Header from "../Header";
import Footer from "../Footer";

//

const Layout = ({ children, global }) => {
  const { footer } = global;

  return (
    <>
      <GlobalStyles />
      <Typography />

      <Header />
      <main>{children}</main>
      <Footer footer={footer} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
